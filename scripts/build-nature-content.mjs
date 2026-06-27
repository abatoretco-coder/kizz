import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = process.cwd();
const outDir = join(ROOT, 'assets', 'questions', 'nature');
const outFile = join(ROOT, 'src', 'generated', 'contentNatureVisual.ts');
const imageMapFile = join(ROOT, 'src', 'generated', 'natureQuestionImages.ts');
const manifestFile = join(outDir, 'nature-manifest.json');
const USER_AGENT = 'Kizz offline quiz nature builder/1.0 (https://github.com/abatoretco-coder/kizz)';

const species = [
  { kind: 'animals', name: 'Renard roux', scientific: 'Vulpes vulpes', family: 'mammifere', clue: 'pelage roux, museau fin et queue touffue', difficulty: 1 },
  { kind: 'animals', name: 'Loup gris', scientific: 'Canis lupus', family: 'mammifere', clue: 'canide social vivant souvent en meute', difficulty: 1 },
  { kind: 'animals', name: 'Lynx boreal', scientific: 'Lynx lynx', family: 'mammifere', clue: 'oreilles terminees par des pinceaux noirs', difficulty: 2 },
  { kind: 'animals', name: 'Bouquetin des Alpes', scientific: 'Capra ibex', family: 'mammifere', clue: 'grandes cornes arquees et habitat de haute montagne', difficulty: 2 },
  { kind: 'animals', name: 'Cerf elaphe', scientific: 'Cervus elaphus', family: 'mammifere', clue: 'grand cervide dont le male porte des bois ramifies', difficulty: 1 },
  { kind: 'animals', name: 'Herisson commun', scientific: 'Erinaceus europaeus', family: 'mammifere', clue: 'petit mammifere couvert de piquants', difficulty: 1 },
  { kind: 'animals', name: 'Flamant rose', scientific: 'Phoenicopterus roseus', family: 'oiseau', clue: 'oiseau rose aux longues pattes vivant dans les lagunes', difficulty: 1 },
  { kind: 'animals', name: 'Martin-pecheur d Europe', scientific: 'Alcedo atthis', family: 'oiseau', clue: 'petit oiseau bleu et orange qui plonge pour pecher', difficulty: 2 },
  { kind: 'animals', name: 'Chouette hulotte', scientific: 'Strix aluco', family: 'oiseau', clue: 'rapace nocturne frequent dans les forets europeennes', difficulty: 2 },
  { kind: 'animals', name: 'Aigle royal', scientific: 'Aquila chrysaetos', family: 'oiseau', clue: 'grand rapace de montagne a l envergure imposante', difficulty: 1 },
  { kind: 'animals', name: 'Salamandre tachetee', scientific: 'Salamandra salamandra', family: 'amphibien', clue: 'amphibien noir marque de taches jaunes', difficulty: 2 },
  { kind: 'animals', name: 'Grenouille verte', scientific: 'Pelophylax kl. esculentus', family: 'amphibien', clue: 'amphibien des mares au chant sonore', difficulty: 1 },
  { kind: 'animals', name: 'Tortue d Hermann', scientific: 'Testudo hermanni', family: 'reptile', clue: 'tortue terrestre mediterraneenne protegee', difficulty: 2 },
  { kind: 'animals', name: 'Couleuvre a collier', scientific: 'Natrix natrix', family: 'reptile', clue: 'serpent non venimeux souvent proche des zones humides', difficulty: 2 },
  { kind: 'animals', name: 'Machaon', scientific: 'Papilio machaon', family: 'insecte', clue: 'grand papillon jaune avec des queues aux ailes posterieures', difficulty: 2 },
  { kind: 'animals', name: 'Abeille domestique', scientific: 'Apis mellifera', family: 'insecte', clue: 'insecte pollinisateur eleve en ruches', difficulty: 1 },
  { kind: 'plants', name: 'Chene pedoncule', scientific: 'Quercus robur', family: 'arbre', clue: 'grand arbre europeen portant des glands sur pedoncule', difficulty: 1 },
  { kind: 'plants', name: 'Hetre commun', scientific: 'Fagus sylvatica', family: 'arbre', clue: 'arbre a ecorce grise lisse et feuilles ovales', difficulty: 1 },
  { kind: 'plants', name: 'Erable sycomore', scientific: 'Acer pseudoplatanus', family: 'arbre', clue: 'feuilles palmees et samares en helicopteres', difficulty: 2 },
  { kind: 'plants', name: 'Bouleau verruqueux', scientific: 'Betula pendula', family: 'arbre', clue: 'tronc blanc et rameaux souples pendants', difficulty: 1 },
  { kind: 'plants', name: 'Pin sylvestre', scientific: 'Pinus sylvestris', family: 'conifere', clue: 'conifere a ecorce orangee et aiguilles par deux', difficulty: 1 },
  { kind: 'plants', name: 'If commun', scientific: 'Taxus baccata', family: 'conifere', clue: 'conifere sombre aux arilles rouges toxiques hors pulpe', difficulty: 2 },
  { kind: 'plants', name: 'Lavande vraie', scientific: 'Lavandula angustifolia', family: 'fleur', clue: 'plante aromatique violette typique des milieux mediterraneens', difficulty: 1 },
  { kind: 'plants', name: 'Coquelicot', scientific: 'Papaver rhoeas', family: 'fleur', clue: 'fleur rouge frequente dans les champs et bords de route', difficulty: 1 },
  { kind: 'plants', name: 'Tournesol', scientific: 'Helianthus annuus', family: 'fleur', clue: 'grande fleur jaune cultivee pour ses graines huileuses', difficulty: 1 },
  { kind: 'plants', name: 'Iris des marais', scientific: 'Iris pseudacorus', family: 'fleur', clue: 'iris jaune des zones humides', difficulty: 2 },
  { kind: 'plants', name: 'Orchidee abeille', scientific: 'Ophrys apifera', family: 'fleur', clue: 'orchidee dont la fleur imite un insecte pollinisateur', difficulty: 3 },
  { kind: 'plants', name: 'Eglantier', scientific: 'Rosa canina', family: 'arbuste', clue: 'rosier sauvage produisant des cynorrhodons', difficulty: 2 },
  { kind: 'plants', name: 'Aubepine monogyne', scientific: 'Crataegus monogyna', family: 'arbuste', clue: 'arbuste epineux a fleurs blanches et petits fruits rouges', difficulty: 2 },
  { kind: 'plants', name: 'Sureau noir', scientific: 'Sambucus nigra', family: 'arbuste', clue: 'arbuste a ombelles blanches puis baies noires', difficulty: 2 },
  { kind: 'plants', name: 'Fougere aigle', scientific: 'Pteridium aquilinum', family: 'fougere', clue: 'grande fougere formant de vastes tapis en sous-bois', difficulty: 2 },
  { kind: 'plants', name: 'Sphaigne', scientific: 'Sphagnum', family: 'mousse', clue: 'mousse des tourbieres capable de retenir beaucoup d eau', difficulty: 3 },
];

function slug(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function selectJpegUrl(info) {
  if (info.thumburl && /\.jpe?g(?:$|\?)/i.test(info.thumburl)) return info.thumburl;
  if (info.mime === 'image/jpeg') return info.url;
  return null;
}

async function searchCommonsImage(item) {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    generator: 'search',
    gsrnamespace: '6',
    gsrlimit: '10',
    gsrsearch: `${item.scientific} ${item.name}`,
    prop: 'imageinfo',
    iiprop: 'url|mime|extmetadata',
    iiurlwidth: '1280',
    origin: '*',
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { headers: { 'User-Agent': USER_AGENT } });
  if (!response.ok) return null;
  const json = await response.json();
  const pages = Object.values(json.query?.pages ?? {});
  for (const page of pages) {
    const title = page.title ?? '';
    const lower = title.toLowerCase();
    const info = page.imageinfo?.[0];
    if (!info?.url || !String(info.mime).startsWith('image/')) continue;
    if (lower.includes('map') || lower.includes('range') || lower.includes('diagram') || lower.includes('drawing') || lower.includes('plate')) continue;
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

function rotateChoices(items, answer, kind) {
  const pool = items.filter((item) => item.kind === kind && item.name !== answer).map((item) => item.name).slice(0, 3);
  return [answer, ...pool];
}

function imageChoiceGroup(items, currentIndex) {
  const sameKind = items.filter((item) => item.kind === items[currentIndex].kind);
  const localIndex = sameKind.findIndex((item) => item.name === items[currentIndex].name);
  const start = Math.floor(localIndex / 4) * 4;
  const group = sameKind.slice(start, start + 4);
  while (group.length < 4) group.push(sameKind[group.length]);
  return group;
}

function q(id, difficulty, prompt, choices, answerIndex, explanation, tags, sourceUrl, extra = {}) {
  return {
    id,
    topicId: 'nature',
    difficulty,
    prompt,
    choices,
    answerIndex,
    explanation,
    tags,
    sourceLabel: 'Banque Kizz nature - Wikimedia Commons',
    sourceUrl,
    ...extra,
  };
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await mkdir(join(ROOT, 'src', 'generated'), { recursive: true });

  const manifest = [];
  const imageByName = new Map();
  for (const item of species) {
    const info = await searchCommonsImage(item);
    if (!info) continue;
    const asset = `nature/${slug(item.name)}`;
    try {
      await downloadImage(info.url, join(outDir, `${slug(item.name)}.jpg`));
    } catch {
      continue;
    }
    imageByName.set(item.name, { asset, sourceUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(info.title.replace(/ /g, '_'))}` });
    manifest.push({ label: item.name, scientific: item.scientific, asset, kind: item.kind, family: item.family, sourceUrl: imageByName.get(item.name).sourceUrl, license: info.license, artist: info.artist, credit: info.credit });
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  const downloaded = species.filter((item) => imageByName.has(item.name));
  const questions = [];
  downloaded.forEach((item, index) => {
    const image = imageByName.get(item.name);
    const baseTags = item.kind === 'animals'
      ? ['nature', 'animaux', 'image', 'identification-espece', `famille:${item.family}`]
      : ['nature', 'botanique', 'image', 'identification-espece', `famille:${item.family}`];
    questions.push(q(
      `nature-${item.kind}-${String(index + 1).padStart(3, '0')}-identify`,
      item.difficulty,
      'Quelle espece est visible sur cette photo ?',
      rotateChoices(downloaded, item.name, item.kind),
      0,
      `${item.name} (${item.scientific}) se reconnait notamment par ${item.clue}.`,
      [...baseTags, item.kind === 'animals' ? 'subtheme:nature:animals' : 'subtheme:nature:plants'],
      image.sourceUrl,
      { imageAsset: image.asset, imageAlt: `Photo de ${item.name}` },
    ));

    const group = imageChoiceGroup(downloaded, index);
    const answerIndex = group.findIndex((candidate) => candidate.name === item.name);
    questions.push(q(
      `nature-${item.kind}-${String(index + 1).padStart(3, '0')}-image-choice`,
      item.difficulty,
      `Selectionne l image de ${item.name}.`,
      group.map((candidate) => candidate.name),
      answerIndex,
      `${item.name} est le choix qui correspond au repere visuel : ${item.clue}.`,
      [...baseTags.filter((tag) => tag !== 'image'), 'image-choice', item.kind === 'animals' ? 'subtheme:nature:animals' : 'subtheme:nature:plants'],
      image.sourceUrl,
      {
        choiceImageAssets: group.map((candidate) => imageByName.get(candidate.name).asset),
        choiceImageAlts: group.map((candidate) => `Photo de ${candidate.name}`),
      },
    ));

    questions.push(q(
      `nature-${item.kind}-${String(index + 1).padStart(3, '0')}-clue`,
      item.difficulty,
      `Quelle espece correspond a cet indice : ${item.clue} ?`,
      rotateChoices(downloaded, item.name, item.kind),
      0,
      `La reponse attendue est ${item.name}, nom scientifique ${item.scientific}.`,
      item.kind === 'animals' ? ['nature', 'animaux', 'identification-espece', 'subtheme:nature:animals'] : ['nature', 'botanique', 'identification-espece', 'subtheme:nature:plants'],
      image.sourceUrl,
    ));
  });

  const content = `import { QuestionSeed } from '../domain';\n\nexport const natureVisualQuestions: QuestionSeed[] = ${JSON.stringify(questions, null, 2)};\n`;
  const imageMapEntries = manifest
    .map((item) => `  '${item.asset}': require('../../assets/questions/nature/${item.asset.replace('nature/', '')}.jpg'),`)
    .join('\n');
  const imageMap = `import { ImageSourcePropType } from 'react-native';\n\nexport const natureQuestionImages: Record<string, ImageSourcePropType> = {\n${imageMapEntries}\n};\n`;
  await writeFile(outFile, content, 'utf8');
  await writeFile(imageMapFile, imageMap, 'utf8');
  await writeFile(manifestFile, JSON.stringify({ generatedAt: new Date().toISOString(), imageCount: manifest.length, questionCount: questions.length, sources: manifest }, null, 2), 'utf8');
  console.log(JSON.stringify({ images: manifest.length, questions: questions.length, outFile, imageMapFile, manifestFile }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
