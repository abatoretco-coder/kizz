import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();
const outDir = join(ROOT, 'assets', 'questions', 'landmarks');
const outFile = join(ROOT, 'src', 'generated', 'contentLandmarkVisual.ts');
const imageMapFile = join(ROOT, 'src', 'generated', 'landmarkQuestionImages.ts');
const manifestFile = join(outDir, 'landmark-manifest.json');
const USER_AGENT = 'Kizz offline quiz landmark builder/1.0 (https://github.com/abatoretco-coder/kizz)';

const landmarks = [
  ['Taj Mahal', 'Agra', 'Inde', 'moghol', 'mausolee de marbre blanc'],
  ['Angkor Vat', 'Siem Reap', 'Cambodge', 'khmer', 'temple monumental khmer'],
  ['Petra', 'Wadi Musa', 'Jordanie', 'nabateen', 'facades taillees dans la roche'],
  ['Machu Picchu', 'Cusco', 'Perou', 'inca', 'cite andine en terrasses'],
  ['Chichen Itza', 'Yucatan', 'Mexique', 'maya', 'pyramide a degres mesoamericaine'],
  ['Christ Redempteur', 'Rio de Janeiro', 'Bresil', 'art deco', 'statue dominant la baie de Rio'],
  ['Opera de Sydney', 'Sydney', 'Australie', 'expressionniste', 'toitures en coques blanches'],
  ['Burj Khalifa', 'Dubai', 'Emirats arabes unis', 'gratte-ciel contemporain', 'plus haute tour du monde'],
  ['Empire State Building', 'New York', 'Etats-Unis', 'art deco', 'gratte-ciel new-yorkais des annees 1930'],
  ['Golden Gate Bridge', 'San Francisco', 'Etats-Unis', 'pont suspendu', 'pont orange sur le detroit'],
  ['Tower Bridge', 'Londres', 'Royaume-Uni', 'neogothique', 'pont basculant a deux tours'],
  ['Big Ben', 'Londres', 'Royaume-Uni', 'neogothique', 'tour horloge du palais de Westminster'],
  ['Stonehenge', 'Wiltshire', 'Royaume-Uni', 'megalithique', 'cercle de pierres prehistoriques'],
  ['Mont-Saint-Michel', 'Normandie', 'France', 'medieval', 'abbaye sur ilot rocheux'],
  ['Chateau de Chambord', 'Loir-et-Cher', 'France', 'Renaissance', 'chateau royal aux toits complexes'],
  ['Pont du Gard', 'Occitanie', 'France', 'romain', 'aqueduc antique a trois niveaux'],
  ['Cathedrale de Chartres', 'Chartres', 'France', 'gothique', 'cathedrale aux vitraux celebres'],
  ['Basilique du Sacre-Coeur', 'Paris', 'France', 'romano-byzantin', 'basilique blanche de Montmartre'],
  ['Arc de triomphe', 'Paris', 'France', 'neoclassique', 'monument au centre de l Etoile'],
  ['Musee du Louvre', 'Paris', 'France', 'palais classique', 'ancien palais royal devenu musee'],
  ['Palais de Versailles', 'Versailles', 'France', 'classique francais', 'residence royale de Louis XIV'],
  ['Alhambra', 'Grenade', 'Espagne', 'nasride', 'palais fortifie andalou'],
  ['Guggenheim Bilbao', 'Bilbao', 'Espagne', 'deconstructivisme', 'musee aux volumes de titane'],
  ['Duomo de Milan', 'Milan', 'Italie', 'gothique', 'cathedrale aux nombreuses fleches'],
  ['Basilique Saint-Pierre', 'Vatican', 'Vatican', 'Renaissance', 'grande basilique de la cite du Vatican'],
  ['Tour de Pise', 'Pise', 'Italie', 'roman', 'campanile penche'],
  ['Pantheon de Rome', 'Rome', 'Italie', 'romain', 'coupole antique a oculus'],
  ['Hagia Sophia', 'Istanbul', 'Turquie', 'byzantin', 'ancienne basilique a grande coupole'],
  ['Mosquee bleue', 'Istanbul', 'Turquie', 'ottoman', 'mosquee aux six minarets'],
  ['Acropole d Athenes', 'Athenes', 'Grece', 'antique grec', 'plateau monumental dominant Athenes'],
  ['Meteores', 'Thessalie', 'Grece', 'monastere', 'monasteres poses sur des pitons rocheux'],
  ['Kremlin de Moscou', 'Moscou', 'Russie', 'forteresse', 'enceinte historique au coeur de Moscou'],
  ['Cathedrale Saint-Basile', 'Moscou', 'Russie', 'russe', 'coupoles colorees sur la place Rouge'],
  ['Neuschwanstein', 'Baviere', 'Allemagne', 'historicisme', 'chateau romantique bavarois'],
  ['Porte de Brandebourg', 'Berlin', 'Allemagne', 'neoclassique', 'porte monumentale berlinoise'],
  ['Atomium', 'Bruxelles', 'Belgique', 'modernisme', 'structure metallique en forme de maille cristalline'],
  ['Maison dansante', 'Prague', 'Tchequie', 'deconstructivisme', 'immeuble contemporain aux lignes courbes'],
  ['Parlement de Budapest', 'Budapest', 'Hongrie', 'neogothique', 'grand batiment au bord du Danube'],
  ['Sainte-Sophie de Kiev', 'Kiev', 'Ukraine', 'byzantin ukrainien', 'cathedrale historique a coupoles'],
  ['Sagrada Familia', 'Barcelone', 'Espagne', 'modernisme catalan', 'basilique aux tours organiques de Gaudi'],
  ['Fallingwater', 'Pennsylvanie', 'Etats-Unis', 'organique', 'maison construite au-dessus d une cascade'],
  ['Villa Rotonda', 'Vicence', 'Italie', 'Renaissance', 'villa palladienne a plan central'],
  ['Bauhaus Dessau', 'Dessau', 'Allemagne', 'Bauhaus', 'ecole moderniste aux facades vitrees'],
  ['Centre Pompidou', 'Paris', 'France', 'high-tech', 'batiment aux tuyaux et structures apparents'],
  ['Bibliotheque Sainte-Genevieve', 'Paris', 'France', 'eclectique', 'bibliotheque parisienne a grande salle de lecture'],
  ['Musee d Orsay', 'Paris', 'France', 'beaux-arts', 'ancienne gare transformee en musee'],
  ['Louvre Abu Dhabi', 'Abu Dhabi', 'Emirats arabes unis', 'contemporain', 'musee sous un dome ajoure'],
  ['Marina Bay Sands', 'Singapour', 'Singapour', 'contemporain', 'trois tours reliees par une terrasse'],
  ['Gardens by the Bay', 'Singapour', 'Singapour', 'paysage contemporain', 'supertrees lumineux et serres geantes'],
  ['Tour CN', 'Toronto', 'Canada', 'tour de communication', 'tour fine dominant Toronto'],
  ['Biosphere de Montreal', 'Montreal', 'Canada', 'geodesique', 'dome geodesique de Buckminster Fuller'],
  ['Lotus Temple', 'New Delhi', 'Inde', 'expressionniste', 'temple en forme de fleur de lotus'],
  ['Temple d Or', 'Amritsar', 'Inde', 'sikh', 'sanctuaire dore entoure d eau'],
  ['Borobudur', 'Java central', 'Indonesie', 'bouddhique', 'temple en terrasses avec stupas'],
  ['Kinkaku-ji', 'Kyoto', 'Japon', 'japonais', 'pavillon dore au bord d un etang'],
  ['Chateau de Himeji', 'Himeji', 'Japon', 'japonais', 'chateau blanc surnomme heron blanc'],
  ['Gyeongbokgung', 'Seoul', 'Coree du Sud', 'coreen', 'palais royal de la dynastie Joseon'],
  ['Palais Potala', 'Lhassa', 'Chine', 'tibetain', 'palais monumental sur colline'],
  ['Grande Muraille de Chine', 'Chine du Nord', 'Chine', 'fortification', 'longue muraille defensive'],
  ['Temple du Ciel', 'Pekin', 'Chine', 'chinois', 'complexe rituel imperial circulaire'],
];

function slug(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function selectJpegUrl(info) {
  if (info.thumburl && /\.jpe?g(?:$|\?)/i.test(info.thumburl)) return info.thumburl;
  if (info.mime === 'image/jpeg') return info.url;
  return null;
}

async function searchCommonsImage(name, city, country) {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    generator: 'search',
    gsrnamespace: '6',
    gsrlimit: '12',
    gsrsearch: `${name} ${city} ${country}`,
    prop: 'imageinfo',
    iiprop: 'url|mime|extmetadata',
    iiurlwidth: '1280',
    origin: '*',
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { headers: { 'User-Agent': USER_AGENT } });
  if (!response.ok) return null;
  const json = await response.json();
  for (const page of Object.values(json.query?.pages ?? {})) {
    const title = page.title ?? '';
    const lower = title.toLowerCase();
    const info = page.imageinfo?.[0];
    if (!info?.url || !String(info.mime).startsWith('image/')) continue;
    if (lower.includes('map') || lower.includes('plan') || lower.includes('logo') || lower.includes('icon') || lower.includes('diagram')) continue;
    const url = selectJpegUrl(info);
    if (!url) continue;
    return {
      title,
      url,
      license: info.extmetadata?.LicenseShortName?.value ?? '',
      artist: info.extmetadata?.Artist?.value?.replace(/<[^>]+>/g, '') ?? '',
      credit: info.extmetadata?.Credit?.value?.replace(/<[^>]+>/g, '') ?? '',
    };
  }
  return null;
}

async function downloadImage(url, filename) {
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!response.ok) throw new Error(`image ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) throw new Error(`image non jpeg: ${url}`);
  await writeFile(filename, buffer);
}

function rotate(values, answer) {
  const pool = [...new Set(values.filter((value) => value !== answer))].slice(0, 3);
  return [answer, ...pool];
}

const easyLandmarks = new Set([
  'Taj Mahal', 'Petra', 'Machu Picchu', 'Christ Redempteur', 'Opera de Sydney', 'Burj Khalifa', 'Empire State Building',
  'Golden Gate Bridge', 'Tower Bridge', 'Big Ben', 'Stonehenge', 'Mont-Saint-Michel', 'Chateau de Chambord', 'Arc de triomphe',
  'Musee du Louvre', 'Palais de Versailles', 'Tour de Pise', 'Pantheon de Rome', 'Acropole d Athenes', 'Cathedrale Saint-Basile',
  'Porte de Brandebourg', 'Atomium', 'Sagrada Familia', 'Centre Pompidou', 'Musee d Orsay', 'Tour CN', 'Grande Muraille de Chine',
]);

const hardLandmarks = new Set([
  'Maison dansante', 'Sainte-Sophie de Kiev', 'Fallingwater', 'Villa Rotonda', 'Bauhaus Dessau',
  'Bibliotheque Sainte-Genevieve', 'Louvre Abu Dhabi', 'Gardens by the Bay', 'Biosphere de Montreal', 'Borobudur',
  'Gyeongbokgung', 'Palais Potala', 'Temple du Ciel',
]);

function landmarkDifficulty(name) {
  if (easyLandmarks.has(name)) return 1;
  if (hardLandmarks.has(name)) return 3;
  return 2;
}

function imageChoiceGroup(items, index) {
  const start = Math.floor(index / 4) * 4;
  const group = items.slice(start, start + 4);
  while (group.length < 4) group.push(items[group.length]);
  return group;
}

function q(id, difficulty, prompt, choices, answerIndex, explanation, tags, sourceUrl, extra = {}) {
  return { id, topicId: 'architecture', difficulty, prompt, choices, answerIndex, explanation, tags, sourceLabel: 'Banque Kizz monuments - Wikimedia Commons', sourceUrl, ...extra };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await mkdir(join(ROOT, 'src', 'generated'), { recursive: true });

  const manifest = [];
  const enriched = [];
  for (const [name, city, country, style, clue] of landmarks) {
    const info = await searchCommonsImage(name, city, country);
    if (!info) continue;
    const asset = `landmarks/${slug(name)}`;
    try {
      await downloadImage(info.url, join(outDir, `${slug(name)}.jpg`));
    } catch {
      continue;
    }
    const sourceUrl = `https://commons.wikimedia.org/wiki/${encodeURIComponent(info.title.replace(/ /g, '_'))}`;
    enriched.push({ name, city, country, style, clue, asset, sourceUrl });
    manifest.push({ label: name, city, country, style, asset, sourceUrl, license: info.license, artist: info.artist, credit: info.credit });
    await new Promise((resolve) => setTimeout(resolve, 180));
  }

  const names = enriched.map((item) => item.name);
  const cities = enriched.map((item) => item.city);
  const countries = enriched.map((item) => item.country);
  const styles = enriched.map((item) => item.style);
  const questions = [];
  enriched.forEach((item, index) => {
    const id = `landmark-${String(index + 1).padStart(3, '0')}`;
    const difficulty = landmarkDifficulty(item.name);
    questions.push(q(`${id}-identify`, difficulty, 'Quel monument ou batiment est visible sur cette photo ?', rotate(names, item.name), 0, `${item.name} se reconnait notamment par ${item.clue}.`, ['architecture', 'image', 'monument', 'banque-visuelle-monuments', 'subtheme:architecture:buildings'], item.sourceUrl, { imageAsset: item.asset, imageAlt: `Photo de ${item.name}` }));
    questions.push(q(`${id}-city`, difficulty, `Dans quelle ville ou zone se trouve ${item.name} ?`, rotate(cities, item.city), 0, `${item.name} est rattache ici a ${item.city}.`, ['architecture', 'geographie', 'ville', 'banque-visuelle-monuments', 'subtheme:architecture:buildings'], item.sourceUrl));
    questions.push(q(`${id}-country`, difficulty, `Dans quel pays se trouve ${item.name} ?`, rotate(countries, item.country), 0, `${item.name} se trouve en ${item.country}.`, ['architecture', 'geographie', 'pays', 'banque-visuelle-monuments', 'subtheme:architecture:buildings'], item.sourceUrl));
    questions.push(q(`${id}-style`, 2, `Quel repere stylistique associer a ${item.name} ?`, rotate(styles, item.style), 0, `${item.name} est classe ici dans le repere ${item.style}.`, ['architecture', 'style', 'banque-visuelle-monuments', 'subtheme:architecture:styles'], item.sourceUrl));
    if (index % 2 === 0) {
      const group = imageChoiceGroup(enriched, index);
      const answerIndex = group.findIndex((candidate) => candidate.name === item.name);
      questions.push(q(`${id}-image-choice`, difficulty, `Selectionne l image de ${item.name}.`, group.map((candidate) => candidate.name), answerIndex, `${item.name} correspond au repere visuel : ${item.clue}.`, ['architecture', 'image-choice', 'monument', 'banque-visuelle-monuments', 'subtheme:architecture:buildings'], item.sourceUrl, { choiceImageAssets: group.map((candidate) => candidate.asset), choiceImageAlts: group.map((candidate) => `Photo de ${candidate.name}`) }));
    }
  });

  const content = `import { QuestionSeed } from '../domain';\n\nexport const landmarkVisualQuestions: QuestionSeed[] = ${JSON.stringify(questions, null, 2)};\n`;
  const imageMapEntries = manifest.map((item) => `  '${item.asset}': require('../../assets/questions/landmarks/${item.asset.replace('landmarks/', '')}.jpg'),`).join('\n');
  const imageMap = `import { ImageSourcePropType } from 'react-native';\n\nexport const landmarkQuestionImages: Record<string, ImageSourcePropType> = {\n${imageMapEntries}\n};\n`;
  await writeFile(outFile, content, 'utf8');
  await writeFile(imageMapFile, imageMap, 'utf8');
  await writeFile(manifestFile, JSON.stringify({ generatedAt: new Date().toISOString(), imageCount: manifest.length, questionCount: questions.length, sources: manifest }, null, 2), 'utf8');
  console.log(JSON.stringify({ images: manifest.length, questions: questions.length, outFile, imageMapFile, manifestFile }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
