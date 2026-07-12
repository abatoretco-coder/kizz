import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const ROOT = process.cwd();
const outDir = join(ROOT, 'assets', 'questions', 'generated');
const outFile = join(ROOT, 'src', 'generated', 'contentVisualHistory.ts');
const imageMapFile = join(ROOT, 'src', 'generated', 'questionImages.ts');
const manifestFile = join(outDir, 'visual-history-manifest.json');
const USER_AGENT = 'Kizz offline quiz content builder/1.0 (https://github.com/abatoretco-coder/kizz)';
const MAX_IMAGES = 180;

const fallbackImageAssets = ['mona-lisa', 'starry-night', 'girl-pearl-earring', 'birth-venus', 'liberty-leading', 'great-wave'];

const paintings = [
  ['La Joconde', 'Léonard de Vinci', 'Renaissance', 'Italie', 'portrait'],
  ['La Nuit étoilée', 'Vincent van Gogh', 'postimpressionnisme', 'Pays-Bas', 'paysage'],
  ['La Jeune Fille à la perle', 'Johannes Vermeer', 'baroque', 'Pays-Bas', 'portrait'],
  ['La Naissance de Vénus', 'Sandro Botticelli', 'Renaissance', 'Italie', 'mythologie'],
  ['La Liberté guidant le peuple', 'Eugène Delacroix', 'romantisme', 'France', 'histoire'],
  ['La Grande Vague de Kanagawa', 'Hokusai', 'ukiyo-e', 'Japon', 'estampe'],
  ['Les Ménines', 'Diego Vélasquez', 'baroque', 'Espagne', 'portrait'],
  ['Guernica', 'Pablo Picasso', 'cubisme', 'Espagne', 'histoire'],
  ['Le Cri', 'Edvard Munch', 'expressionnisme', 'Norvège', 'angoisse'],
  ['Impression, soleil levant', 'Claude Monet', 'impressionnisme', 'France', 'paysage'],
  ['La Cène', 'Léonard de Vinci', 'Renaissance', 'Italie', 'religion'],
  ['La Création d’Adam', 'Michel-Ange', 'Renaissance', 'Italie', 'religion'],
  ['Le Radeau de La Méduse', 'Théodore Géricault', 'romantisme', 'France', 'histoire'],
  ['Olympia', 'Édouard Manet', 'réalisme', 'France', 'portrait'],
  ['Un dimanche après-midi à l’île de la Grande Jatte', 'Georges Seurat', 'pointillisme', 'France', 'scène'],
  ['Les Tournesols', 'Vincent van Gogh', 'postimpressionnisme', 'Pays-Bas', 'nature morte'],
  ['American Gothic', 'Grant Wood', 'réalisme régional', 'États-Unis', 'portrait'],
  ['La Persistance de la mémoire', 'Salvador Dalí', 'surréalisme', 'Espagne', 'rêve'],
  ['Nighthawks', 'Edward Hopper', 'réalisme américain', 'États-Unis', 'ville'],
  ['Le Baiser', 'Gustav Klimt', 'symbolisme', 'Autriche', 'amour'],
  ['Les Demoiselles d’Avignon', 'Pablo Picasso', 'cubisme', 'Espagne', 'modernité'],
  ['La Vénus d’Urbino', 'Titien', 'Renaissance', 'Italie', 'portrait'],
  ['La Tempête', 'Giorgione', 'Renaissance', 'Italie', 'paysage'],
  ['Le Printemps', 'Sandro Botticelli', 'Renaissance', 'Italie', 'mythologie'],
  ['La Laitière', 'Johannes Vermeer', 'baroque', 'Pays-Bas', 'scène'],
  ['Le Jardin des délices', 'Jérôme Bosch', 'Renaissance nordique', 'Pays-Bas', 'allégorie'],
  ['Les Ambassadeurs', 'Hans Holbein le Jeune', 'Renaissance nordique', 'Allemagne', 'portrait'],
  ['La Ronde de nuit', 'Rembrandt', 'baroque', 'Pays-Bas', 'groupe'],
  ['Saturne dévorant un de ses fils', 'Francisco de Goya', 'romantisme noir', 'Espagne', 'mythologie'],
  ['Le Déjeuner sur l’herbe', 'Édouard Manet', 'réalisme', 'France', 'scène'],
  ['Bal du moulin de la Galette', 'Auguste Renoir', 'impressionnisme', 'France', 'scène'],
  ['La Classe de danse', 'Edgar Degas', 'impressionnisme', 'France', 'scène'],
  ['Les Joueurs de cartes', 'Paul Cézanne', 'postimpressionnisme', 'France', 'scène'],
  ['Mont Sainte-Victoire', 'Paul Cézanne', 'postimpressionnisme', 'France', 'paysage'],
  ['Le Douanier Rousseau, Le Rêve', 'Henri Rousseau', 'naïf', 'France', 'jungle'],
  ['Composition VIII', 'Vassily Kandinsky', 'abstraction', 'Russie', 'abstrait'],
  ['Carré noir', 'Kasimir Malevitch', 'suprématisme', 'Russie', 'abstrait'],
  ['Broadway Boogie-Woogie', 'Piet Mondrian', 'néoplasticisme', 'Pays-Bas', 'abstrait'],
  ['Les Époux Arnolfini', 'Jan van Eyck', 'Renaissance flamande', 'Pays-Bas', 'portrait'],
  ['La Bataille de San Romano', 'Paolo Uccello', 'Renaissance', 'Italie', 'histoire'],
  ['La Flagellation du Christ', 'Piero della Francesca', 'Renaissance', 'Italie', 'religion'],
  ['La Madone Sixtine', 'Raphaël', 'Renaissance', 'Italie', 'religion'],
  ['La Mort de Marat', 'Jacques-Louis David', 'néoclassicisme', 'France', 'histoire'],
  ['Le Serment des Horaces', 'Jacques-Louis David', 'néoclassicisme', 'France', 'histoire'],
  ['La Grande Odalisque', 'Jean-Auguste-Dominique Ingres', 'néoclassicisme', 'France', 'portrait'],
  ['La Liberté ou la Mort', 'Jean-Baptiste Regnault', 'néoclassicisme', 'France', 'allégorie'],
  ['Le Voyageur contemplant une mer de nuages', 'Caspar David Friedrich', 'romantisme', 'Allemagne', 'paysage'],
  ['Pluie, Vapeur et Vitesse', 'William Turner', 'romantisme', 'Royaume-Uni', 'paysage'],
  ['Le Monde de Christina', 'Andrew Wyeth', 'réalisme américain', 'États-Unis', 'paysage'],
  ['Autoportrait au collier d’épines', 'Frida Kahlo', 'surréalisme', 'Mexique', 'portrait'],
];

const figures = [
  ['Cléopâtre VII', 'Égypte antique', 'reine', 'Antiquité', 'règne sur l’Égypte ptolémaïque avant la conquête romaine'],
  ['Jules César', 'Rome antique', 'chef politique et militaire', 'Antiquité', 'joue un rôle décisif dans la fin de la République romaine'],
  ['Auguste', 'Rome antique', 'empereur', 'Antiquité', 'devient le premier empereur romain'],
  ['Périclès', 'Athènes', 'homme d’État', 'Antiquité', 'marque l’âge d’or d’Athènes'],
  ['Hannibal Barca', 'Carthage', 'général', 'Antiquité', 'franchit les Alpes pendant la deuxième guerre punique'],
  ['Alexandre le Grand', 'Macédoine', 'conquérant', 'Antiquité', 'fonde un vaste empire de la Grèce à l’Indus'],
  ['Socrate', 'Grèce', 'philosophe', 'Antiquité', 'influence durablement la philosophie occidentale'],
  ['Platon', 'Grèce', 'philosophe', 'Antiquité', 'fonde l’Académie à Athènes'],
  ['Aristote', 'Grèce', 'philosophe', 'Antiquité', 'travaille sur logique, sciences et politique'],
  ['Charlemagne', 'Empire carolingien', 'empereur', 'Moyen Âge', 'est couronné empereur en 800'],
  ['Aliénor d’Aquitaine', 'France et Angleterre', 'reine', 'Moyen Âge', 'joue un rôle majeur dans la politique européenne'],
  ['Jeanne d’Arc', 'France', 'figure militaire', 'Moyen Âge', 'participe à la guerre de Cent Ans'],
  ['Saladin', 'monde musulman', 'sultan', 'Moyen Âge', 'reprend Jérusalem aux croisés en 1187'],
  ['Gengis Khan', 'Mongolie', 'conquérant', 'Moyen Âge', 'fonde l’Empire mongol'],
  ['Marco Polo', 'Venise', 'voyageur', 'Moyen Âge', 'raconte son voyage en Asie'],
  ['Mehmed II', 'Empire ottoman', 'sultan', 'Moyen Âge', 'prend Constantinople en 1453'],
  ['Léonard de Vinci', 'Italie', 'artiste et savant', 'Renaissance', 'incarne l’esprit polymathe de la Renaissance'],
  ['Michel-Ange', 'Italie', 'artiste', 'Renaissance', 'sculpte le David et peint la chapelle Sixtine'],
  ['Raphaël', 'Italie', 'peintre', 'Renaissance', 'devient une référence de l’harmonie classique'],
  ['Nicolas Copernic', 'Pologne', 'astronome', 'Renaissance', 'défend le modèle héliocentrique'],
  ['Galilée', 'Italie', 'savant', 'époque moderne', 'observe le ciel avec la lunette astronomique'],
  ['Isaac Newton', 'Angleterre', 'scientifique', 'époque moderne', 'formalise la gravitation universelle'],
  ['René Descartes', 'France', 'philosophe', 'époque moderne', 'marque le rationalisme moderne'],
  ['Élisabeth Ire', 'Angleterre', 'reine', 'époque moderne', 'donne son nom à l’époque élisabéthaine'],
  ['Louis XIV', 'France', 'roi', 'époque moderne', 'symbolise la monarchie absolue française'],
  ['Pierre le Grand', 'Russie', 'tsar', 'époque moderne', 'modernise l’État russe'],
  ['Catherine II', 'Russie', 'impératrice', 'époque moderne', 'fait de la Russie une grande puissance européenne'],
  ['Voltaire', 'France', 'philosophe', 'Lumières', 'défend la tolérance et critique le fanatisme'],
  ['Montesquieu', 'France', 'philosophe', 'Lumières', 'analyse la séparation des pouvoirs'],
  ['Jean-Jacques Rousseau', 'Genève', 'philosophe', 'Lumières', 'écrit Du contrat social'],
  ['George Washington', 'États-Unis', 'président', 'époque contemporaine', 'devient le premier président des États-Unis'],
  ['Napoléon Bonaparte', 'France', 'empereur', 'époque contemporaine', 'transforme la France et l’Europe après la Révolution'],
  ['Simón Bolívar', 'Amérique du Sud', 'indépendantiste', 'époque contemporaine', 'contribue aux indépendances sud-américaines'],
  ['Abraham Lincoln', 'États-Unis', 'président', 'époque contemporaine', 'dirige l’Union pendant la guerre de Sécession'],
  ['Giuseppe Garibaldi', 'Italie', 'révolutionnaire', 'époque contemporaine', 'participe à l’unification italienne'],
  ['Otto von Bismarck', 'Allemagne', 'chancelier', 'époque contemporaine', 'joue un rôle central dans l’unité allemande'],
  ['Marie Curie', 'France et Pologne', 'scientifique', 'époque contemporaine', 'reçoit deux prix Nobel pour ses travaux sur la radioactivité'],
  ['Albert Einstein', 'Allemagne et États-Unis', 'scientifique', 'époque contemporaine', 'formule la relativité restreinte puis générale'],
  ['Ada Lovelace', 'Royaume-Uni', 'mathématicienne', 'époque contemporaine', 'écrit un algorithme pour la machine analytique'],
  ['Charles Darwin', 'Royaume-Uni', 'naturaliste', 'époque contemporaine', 'propose la théorie de l’évolution par sélection naturelle'],
  ['Florence Nightingale', 'Royaume-Uni', 'réformatrice sanitaire', 'époque contemporaine', 'transforme les soins infirmiers modernes'],
  ['Mahatma Gandhi', 'Inde', 'leader politique', 'époque contemporaine', 'défend la désobéissance civile non violente'],
  ['Nelson Mandela', 'Afrique du Sud', 'président', 'époque contemporaine', 'combat l’apartheid et devient président sud-africain'],
  ['Martin Luther King Jr.', 'États-Unis', 'militant', 'époque contemporaine', 'porte le mouvement américain des droits civiques'],
  ['Rosa Parks', 'États-Unis', 'militante', 'époque contemporaine', 'son refus de céder sa place devient un symbole des droits civiques'],
  ['Winston Churchill', 'Royaume-Uni', 'premier ministre', 'époque contemporaine', 'dirige le Royaume-Uni pendant la Seconde Guerre mondiale'],
  ['Charles de Gaulle', 'France', 'chef d’État', 'époque contemporaine', 'incarne la France libre puis fonde la Ve République'],
  ['Simone Veil', 'France', 'femme politique', 'époque contemporaine', 'porte la loi légalisant l’IVG en France'],
  ['Frida Kahlo', 'Mexique', 'artiste', 'époque contemporaine', 'développe une œuvre autobiographique et symbolique'],
  ['Pablo Picasso', 'Espagne et France', 'artiste', 'époque contemporaine', 'cofonde le cubisme'],
];

function slug(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function selectJpegUrl(info) {
  if (info.thumburl && /\.jpe?g(?:$|\?)/i.test(info.thumburl)) return info.thumburl;
  if (info.mime === 'image/jpeg') return info.url;
  return null;
}

function rotateChoices(values, answer) {
  const pool = [...new Set(values.filter((value) => value && value !== answer))].slice(0, 3);
  const choices = [answer, ...pool];
  while (choices.length < 4) choices.push(values[choices.length % values.length]);
  return choices;
}

function q(id, topicId, difficulty, prompt, choices, answerIndex, explanation, tags, sourceUrl, extra = {}) {
  return { id, topicId, difficulty, prompt, choices, answerIndex, explanation, tags, sourceLabel: 'Banque Kizz enrichie - Wikidata/Wikimedia', sourceUrl, ...extra };
}

async function sparql(query) {
  const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(query)}`;
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT, Accept: 'application/sparql-results+json' } });
  if (!response.ok) throw new Error(`SPARQL ${response.status}`);
  return response.json();
}

async function getCommonsImage(title) {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    prop: 'imageinfo',
    iiprop: 'url|mime|extmetadata',
    iiurlwidth: '1280',
    titles: title.startsWith('File:') ? title : `File:${title}`,
    origin: '*',
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`, { headers: { 'User-Agent': USER_AGENT } });
  if (!response.ok) return null;
  const json = await response.json();
  const page = Object.values(json.query?.pages ?? {})[0];
  const info = page?.imageinfo?.[0];
  if (!info?.url || !String(info.mime).startsWith('image/')) return null;
  const url = selectJpegUrl(info);
  if (!url) return null;
  return {
    url,
    license: info.extmetadata?.LicenseShortName?.value ?? '',
    artist: info.extmetadata?.Artist?.value?.replace(/<[^>]+>/g, '') ?? '',
    credit: info.extmetadata?.Credit?.value?.replace(/<[^>]+>/g, '') ?? '',
  };
}

async function searchCommonsImage(query) {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    generator: 'search',
    gsrnamespace: '6',
    gsrlimit: '6',
    gsrsearch: query,
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
    const info = page.imageinfo?.[0];
    const lower = title.toLowerCase();
    if (!info?.url || !String(info.mime).startsWith('image/')) continue;
    if (lower.includes('map') || lower.includes('signature') || lower.includes('grave') || lower.includes('statue')) continue;
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

async function fetchImageSeeds() {
  const query = `
SELECT ?item ?itemLabel ?image WHERE {
  VALUES ?item { wd:Q762 wd:Q1048 wd:Q8003 wd:Q8023 wd:Q692 wd:Q937 wd:Q909 wd:Q868 wd:Q7186 wd:Q9439 wd:Q935 wd:Q9916 wd:Q5582 wd:Q859 wd:Q7259 wd:Q9378 wd:Q142 wd:Q8016 wd:Q7186 wd:Q9089 wd:Q9912 wd:Q567 wd:Q255 wd:Q5673 wd:Q9049 wd:Q1155 wd:Q1868 wd:Q9379 wd:Q301 wd:Q4459 wd:Q1043 wd:Q9915 wd:Q8027 wd:Q1422 wd:Q2514 wd:Q9374 wd:Q4724 wd:Q9371 wd:Q9081 wd:Q9370 wd:Q4616 wd:Q9324 wd:Q4636 wd:Q1001 wd:Q9372 wd:Q9215 wd:Q1716 wd:Q7717 wd:Q5582 wd:Q692 }
  ?item wdt:P18 ?image.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". }
}
LIMIT 60`;
  const data = await sparql(query);
  return data.results.bindings.map((row) => ({
    label: row.itemLabel.value,
    commonsTitle: decodeURIComponent(basename(row.image.value)),
    wikidata: row.item.value,
  }));
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await mkdir(join(ROOT, 'src', 'generated'), { recursive: true });
  for (const file of await readdir(outDir)) {
    if (file.endsWith('.jpg')) await rm(join(outDir, file));
  }

  const manifest = [];
  const imageAssetByLabel = new Map();
  const imageAssetByWork = new Map();
  const expectedFigureNames = new Set(figures.map(([name]) => name.toLowerCase()));
  try {
    for (const [title, artist] of paintings) {
      if (manifest.length >= MAX_IMAGES) break;
      const info = await searchCommonsImage(`${title} ${artist}`);
      if (!info) continue;
      const asset = `generated/art-${slug(title)}`;
      const filename = join(outDir, `${asset.replace('generated/', '')}.jpg`);
      try {
        await downloadImage(info.url, filename);
      } catch {
        continue;
      }
      imageAssetByWork.set(title.toLowerCase(), asset);
      manifest.push({ label: title, asset, wikidata: null, sourceUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(info.title.replace(/ /g, '_'))}`, license: info.license, artist: info.artist, credit: info.credit, kind: 'artwork' });
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    const seeds = await fetchImageSeeds();
    for (const seed of seeds.filter((seed) => expectedFigureNames.has(seed.label.toLowerCase())).slice(0, MAX_IMAGES)) {
      const info = await getCommonsImage(seed.commonsTitle);
      if (!info) continue;
      const asset = `generated/${slug(seed.label)}`;
      const filename = join(outDir, `${slug(seed.label)}.jpg`);
      try {
        await downloadImage(info.url, filename);
      } catch {
        continue;
      }
      imageAssetByLabel.set(seed.label.toLowerCase(), asset);
      manifest.push({ label: seed.label, asset, wikidata: seed.wikidata, sourceUrl: `https://commons.wikimedia.org/wiki/File:${seed.commonsTitle}`, license: info.license, artist: info.artist, credit: info.credit, kind: 'historical-figure' });
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    for (const [name] of figures) {
      if (imageAssetByLabel.has(name.toLowerCase()) || manifest.length >= MAX_IMAGES) continue;
      const info = await searchCommonsImage(`${name} portrait`);
      if (!info) continue;
      const asset = `generated/${slug(name)}`;
      const filename = join(outDir, `${slug(name)}.jpg`);
      try {
        await downloadImage(info.url, filename);
      } catch {
        continue;
      }
      imageAssetByLabel.set(name.toLowerCase(), asset);
      manifest.push({ label: name, asset, wikidata: null, sourceUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(info.title.replace(/ /g, '_'))}`, license: info.license, artist: info.artist, credit: info.credit, kind: 'historical-figure' });
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  } catch (error) {
    console.warn(`Image fetch skipped: ${error.message}`);
  }

  const questions = [];
  const artists = paintings.map((row) => row[1]);
  const titles = paintings.map((row) => row[0]);
  const movements = paintings.map((row) => row[2]);
  const countries = paintings.map((row) => row[3]);
  paintings.forEach(([title, artist, movement, country, subject], index) => {
    const id = `paint-bank-${String(index + 1).padStart(3, '0')}`;
    const asset = imageAssetByWork.get(title.toLowerCase()) ?? fallbackImageAssets[index % fallbackImageAssets.length];
    questions.push(q(`${id}-artist`, 'arts', 1 + (index % 3), `Qui a peint ${title} ?`, rotateChoices(artists, artist), 0, `${title} est associée à ${artist}; l image sert de repère visuel pour relier œuvre et auteur.`, ['arts', 'peinture', 'banque-visuelle', `mouvement:${slug(movement)}`], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(title)}`, { imageAsset: asset, imageAlt: title }));
    questions.push(q(`${id}-work`, 'arts', 1 + ((index + 1) % 3), `Quelle œuvre est associée à ${artist} ?`, rotateChoices(titles, title), 0, `${artist} est notamment associé à ${title}.`, ['arts', 'peinture', 'artiste', 'banque-visuelle'], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(artist)}`));
    questions.push(q(`${id}-movement`, 'arts', 2, `À quel mouvement rattache-t-on surtout ${title} ?`, rotateChoices(movements, movement), 0, `${title} est rangé ici dans le repère ${movement}.`, ['arts', 'peinture', 'mouvement', 'banque-visuelle'], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`${title} ${movement}`)}`));
    questions.push(q(`${id}-country`, 'arts', 1 + ((index + 2) % 3), `Quel pays sert de repère culturel principal pour ${artist} ?`, rotateChoices(countries, country), 0, `${artist} est ici rattaché au repère ${country}.`, ['arts', 'peinture', 'pays', 'banque-visuelle'], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(artist)}`));
    if (index < 25) questions.push(q(`${id}-subject`, 'arts', 1, `Quel type de sujet décrit le mieux ${title} ?`, rotateChoices(['portrait', 'paysage', 'histoire', 'religion', 'mythologie', 'scène', 'abstrait', 'estampe', 'ville'], subject), 0, `${title} est utile à reconnaître comme repère de ${subject}.`, ['arts', 'peinture', 'observation', 'banque-visuelle'], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(title)}`));
  });

  const names = figures.map((row) => row[0]);
  const regions = figures.map((row) => row[1]);
  const roles = figures.map((row) => row[2]);
  const eras = figures.map((row) => row[3]);
  figures.forEach(([name, region, role, era, clue], index) => {
    const id = `hist-figure-${String(index + 1).padStart(3, '0')}`;
    const asset = imageAssetByLabel.get(name.toLowerCase());
    const extra = asset ? { imageAsset: asset, imageAlt: `Portrait ou représentation de ${name}` } : {};
    questions.push(q(`${id}-identity`, 'history', 1 + (index % 3), `Quel personnage correspond à cet indice : ${clue} ?`, rotateChoices(names, name), 0, `${name} est retenu ici pour ce repère : ${clue}.`, ['histoire', 'personnage-historique', 'banque-personnages', `periode:${slug(era)}`], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`, extra));
    questions.push(q(`${id}-role`, 'history', 1 + ((index + 1) % 3), `Quel rôle décrit le mieux ${name} ?`, rotateChoices(roles, role), 0, `${name} est principalement présenté ici comme ${role}.`, ['histoire', 'personnage-historique', 'role', 'banque-personnages'], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`));
    questions.push(q(`${id}-region`, 'history', 1 + ((index + 2) % 3), `À quel espace historique rattache-t-on ${name} ?`, rotateChoices(regions, region), 0, `${name} est rattaché ici à ${region}; ce cadre géographique aide à replacer le personnage dans son histoire.`, ['histoire', 'personnage-historique', 'geographie', 'banque-personnages'], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`));
    questions.push(q(`${id}-era`, 'history', 2, `Dans quelle période place-t-on surtout ${name} ?`, rotateChoices(eras, era), 0, `${name} appartient au repère ${era}.`, ['histoire', 'personnage-historique', 'periode', 'banque-personnages'], `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`));
  });

  const uniqueManifest = [];
  const seenManifestAssets = new Set();
  for (const item of manifest) {
    if (seenManifestAssets.has(item.asset)) continue;
    seenManifestAssets.add(item.asset);
    uniqueManifest.push(item);
  }

  await writeFile(manifestFile, JSON.stringify({ generatedAt: new Date().toISOString(), imageCount: uniqueManifest.length, sources: uniqueManifest }, null, 2), 'utf8');
  const file = `import { QuestionSeed } from '../domain';\n\nexport const visualHistoryQuestions: QuestionSeed[] = ${JSON.stringify(questions, null, 2)};\n`;
  const imageMapEntries = uniqueManifest
    .map((item) => `  '${item.asset}': require('../../assets/questions/generated/${item.asset.replace('generated/', '')}.jpg'),`)
    .join('\n');
  const imageMap = `import { ImageSourcePropType } from 'react-native';\n\nexport const generatedQuestionImages: Record<string, ImageSourcePropType> = {\n${imageMapEntries}\n};\n`;
  await writeFile(outFile, file, 'utf8');
  await writeFile(imageMapFile, imageMap, 'utf8');
  console.log(JSON.stringify({ questions: questions.length, images: uniqueManifest.length, outFile, imageMapFile, manifestFile }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
