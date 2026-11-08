import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { franceDepartmentData, franceRegionData, franceAdminQuestions } from '../src/contentFranceAdmin';
import { countryCapitalData, worldCountryQuestions } from '../src/contentWorldCountries';
import { franceMapQuestions } from '../src/contentFranceMap';
import { openQuizzGeoQuestions } from '../src/contentOpenQuizzGeo';
import { mapCorrectionBounds } from '../src/quizEngine';

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll('’', "'").toLowerCase();
const reference = JSON.parse(readFileSync(new URL('../external-data/insee/cog-2026-chefs-lieux.json', import.meta.url), 'utf8')) as {
  departments: { code: string; name: string; regionCode: string; chiefTown: string }[];
  regions: { code: string; name: string; chiefTown: string }[];
};

test('le recadrage de correction englobe les deux points, même à travers la ligne de changement de date', () => {
  const ajaccio = { lat: 41.9192, lon: 8.7386 };
  const guess = { lat: 44.5, lon: 6.1 };
  const [west, south, east, north] = mapCorrectionBounds(guess, ajaccio);
  for (const point of [guess, ajaccio]) {
    assert.ok(west < point.lon && east > point.lon);
    assert.ok(south < point.lat && north > point.lat);
  }
  for (const [from, to] of [[179, -179], [-179, 179]]) {
    const bounds = mapCorrectionBounds({ lat: 0, lon: from }, { lat: 1, lon: to });
    assert.ok(bounds[2] - bounds[0] < 5);
  }
  const coincident = mapCorrectionBounds(ajaccio, ajaccio);
  assert.ok(coincident[2] > coincident[0] && coincident[3] > coincident[1]);
});

test('les 101 départements et les 18 régions correspondent au COG Insee 2026', () => {
  assert.equal(franceDepartmentData.length, reference.departments.length);
  assert.equal(franceRegionData.length, reference.regions.length);
  for (const row of reference.departments) {
    const department = franceDepartmentData.find((item) => item.code === row.code);
    assert.ok(department, row.code);
    assert.equal(normalize(department.name), normalize(row.name));
    assert.equal(normalize(department.chiefTown), normalize(row.chiefTown));
    assert.equal(normalize(department.region), normalize(reference.regions.find((item) => item.code === row.regionCode)!.name));
  }
  for (const row of reference.regions) {
    assert.equal(normalize(franceRegionData.find((item) => normalize(item.name) === normalize(row.name))!.chiefTown), normalize(row.chiefTown));
  }
});

test('les choix administratifs distinguent les échelles et privilégient des départements comparables', () => {
  for (const question of franceAdminQuestions) {
    assert.equal(new Set(question.choices).size, 4, question.id);
    const code = question.id.match(/^fr-dept-(?:code|cheflieu)-(.+)$/)?.[1].toUpperCase();
    if (!code) continue;
    const department = franceDepartmentData.find((item) => item.code === code)!;
    const selector = question.id.includes('-code-') ? 'name' : 'chiefTown';
    assert.equal(question.choices![question.answerIndex!], department[selector], question.id);
    const rows = question.choices!.map((choice) => franceDepartmentData.find((item) => item[selector] === choice)!);
    assert.ok(rows.every((item) => (item.code.length === 3) === (code.length === 3)), question.id);
    if (franceDepartmentData.filter((item) => item.region === department.region).length >= 4) {
      assert.ok(rows.every((item) => item.region === department.region), question.id);
    }
  }
});

test('les distracteurs de capitales restent sur le même continent avec une seule réponse attendue', () => {
  for (const question of worldCountryQuestions) {
    const field = question.id.startsWith('world-capital-') ? 'capital' : 'country';
    const correct = countryCapitalData.find((row) => row[field] === question.choices![question.answerIndex!])!;
    assert.ok(correct, question.id);
    assert.equal(new Set(question.choices).size, 4, question.id);
    assert.ok(question.choices!.every((choice) => countryCapitalData.some((row) => row[field] === choice && row.continent === correct.continent)), question.id);
  }
  for (const [country, role] of [['nauru', 'pas de capitale officielle'], ['suisse', 'ville fédérale'], ['afrique-du-sud', 'administrative'], ['bolivie', 'constitutionnelle'], ['sri-lanka', 'législative']]) {
    assert.ok(worldCountryQuestions.find((question) => question.id === `world-capital-${country}`)!.prompt.includes(role), country);
  }
});

test('la sélection en ligne conserve sa provenance et corrige deux erreurs des sources', () => {
  assert.equal(openQuizzGeoQuestions.length, 10);
  for (const question of openQuizzGeoQuestions) {
    const [, pack, item] = question.id.split('-');
    const original = JSON.parse(readFileSync(new URL(`../external-data/openquizzdb/openquizzdb_${pack}.json`, import.meta.url), 'utf8'));
    assert.ok(original.quizz.some((entry: { id: number }) => entry.id === Number(item)), question.id);
    assert.ok(question.sourceLabel?.includes('Philippe Bresoux'), question.id);
    assert.ok(question.sourceUrl?.endsWith(`id=${pack}`), question.id);
    assert.equal(new Set(question.choices).size, 4, question.id);
  }
  assert.match(openQuizzGeoQuestions.find((item) => item.id === 'oqdb-542-002')!.explanation, /indication géographique protégée/);
  assert.match(openQuizzGeoQuestions.find((item) => item.id === 'oqdb-554-004')!.explanation, /micro/);
});

test('les cartes de régions annoncent la cible ponctuelle et les repères France expliquent la position', () => {
  for (const question of franceMapQuestions.filter((item) => item.type === 'map-point')) {
    assert.ok(question.explanation.length > 90, question.id);
    if (question.id.startsWith('fr-region-map-')) assert.match(question.prompt, /centre approximatif/, question.id);
  }
  assert.match(franceMapQuestions.find((item) => item.id === 'fr-quiz-005')!.prompt, /historique/);
  assert.match(franceMapQuestions.find((item) => item.id === 'fr-map-014')!.explanation, /en Normandie/);
});
