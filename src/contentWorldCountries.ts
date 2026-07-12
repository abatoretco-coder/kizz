import { Difficulty, QuestionSeed } from './domain';

export type CountryCapital = {
  country: string;
  capital: string;
  continent: 'afrique' | 'amerique' | 'asie' | 'europe' | 'oceanie';
  note?: string;
};

export const countryCapitalData: CountryCapital[] = [
  { country: 'Afghanistan', capital: 'Kaboul', continent: 'asie' },
  { country: 'Afrique du Sud', capital: 'Pretoria', continent: 'afrique', note: 'Pretoria est la capitale administrative; Le Cap et Bloemfontein ont aussi des rôles institutionnels.' },
  { country: 'Albanie', capital: 'Tirana', continent: 'europe' },
  { country: 'Algérie', capital: 'Alger', continent: 'afrique' },
  { country: 'Allemagne', capital: 'Berlin', continent: 'europe' },
  { country: 'Andorre', capital: 'Andorre-la-Vieille', continent: 'europe' },
  { country: 'Angola', capital: 'Luanda', continent: 'afrique' },
  { country: 'Antigua-et-Barbuda', capital: "Saint John's", continent: 'amerique' },
  { country: 'Arabie saoudite', capital: 'Riyad', continent: 'asie' },
  { country: 'Argentine', capital: 'Buenos Aires', continent: 'amerique' },
  { country: 'Arménie', capital: 'Erevan', continent: 'asie' },
  { country: 'Australie', capital: 'Canberra', continent: 'oceanie' },
  { country: 'Autriche', capital: 'Vienne', continent: 'europe' },
  { country: 'Azerbaïdjan', capital: 'Bakou', continent: 'asie' },
  { country: 'Bahamas', capital: 'Nassau', continent: 'amerique' },
  { country: 'Bahreïn', capital: 'Manama', continent: 'asie' },
  { country: 'Bangladesh', capital: 'Dacca', continent: 'asie' },
  { country: 'Barbade', capital: 'Bridgetown', continent: 'amerique' },
  { country: 'Belgique', capital: 'Bruxelles', continent: 'europe' },
  { country: 'Belize', capital: 'Belmopan', continent: 'amerique' },
  { country: 'Bénin', capital: 'Porto-Novo', continent: 'afrique', note: 'Porto-Novo est la capitale officielle; Cotonou concentre une grande partie des fonctions gouvernementales.' },
  { country: 'Bhoutan', capital: 'Thimphou', continent: 'asie' },
  { country: 'Biélorussie', capital: 'Minsk', continent: 'europe' },
  { country: 'Birmanie', capital: 'Naypyidaw', continent: 'asie' },
  { country: 'Bolivie', capital: 'Sucre', continent: 'amerique', note: 'Sucre est la capitale constitutionnelle; La Paz est le siège du gouvernement.' },
  { country: 'Bosnie-Herzégovine', capital: 'Sarajevo', continent: 'europe' },
  { country: 'Botswana', capital: 'Gaborone', continent: 'afrique' },
  { country: 'Brésil', capital: 'Brasília', continent: 'amerique' },
  { country: 'Brunei', capital: 'Bandar Seri Begawan', continent: 'asie' },
  { country: 'Bulgarie', capital: 'Sofia', continent: 'europe' },
  { country: 'Burkina Faso', capital: 'Ouagadougou', continent: 'afrique' },
  { country: 'Burundi', capital: 'Gitega', continent: 'afrique' },
  { country: 'Cambodge', capital: 'Phnom Penh', continent: 'asie' },
  { country: 'Cameroun', capital: 'Yaoundé', continent: 'afrique' },
  { country: 'Canada', capital: 'Ottawa', continent: 'amerique' },
  { country: 'Cap-Vert', capital: 'Praia', continent: 'afrique' },
  { country: 'Chili', capital: 'Santiago', continent: 'amerique' },
  { country: 'Chine', capital: 'Pékin', continent: 'asie' },
  { country: 'Chypre', capital: 'Nicosie', continent: 'europe' },
  { country: 'Colombie', capital: 'Bogota', continent: 'amerique' },
  { country: 'Comores', capital: 'Moroni', continent: 'afrique' },
  { country: 'Congo', capital: 'Brazzaville', continent: 'afrique' },
  { country: 'Corée du Nord', capital: 'Pyongyang', continent: 'asie' },
  { country: 'Corée du Sud', capital: 'Séoul', continent: 'asie' },
  { country: 'Costa Rica', capital: 'San José', continent: 'amerique' },
  { country: "Côte d'Ivoire", capital: 'Yamoussoukro', continent: 'afrique' },
  { country: 'Croatie', capital: 'Zagreb', continent: 'europe' },
  { country: 'Cuba', capital: 'La Havane', continent: 'amerique' },
  { country: 'Danemark', capital: 'Copenhague', continent: 'europe' },
  { country: 'Djibouti', capital: 'Djibouti', continent: 'afrique' },
  { country: 'Dominique', capital: 'Roseau', continent: 'amerique' },
  { country: 'Égypte', capital: 'Le Caire', continent: 'afrique' },
  { country: 'Émirats arabes unis', capital: 'Abou Dhabi', continent: 'asie' },
  { country: 'Équateur', capital: 'Quito', continent: 'amerique' },
  { country: 'Érythrée', capital: 'Asmara', continent: 'afrique' },
  { country: 'Espagne', capital: 'Madrid', continent: 'europe' },
  { country: 'Estonie', capital: 'Tallinn', continent: 'europe' },
  { country: 'Eswatini', capital: 'Mbabane', continent: 'afrique', note: 'Mbabane est la capitale administrative; Lobamba porte les fonctions royale et législative.' },
  { country: 'États-Unis', capital: 'Washington', continent: 'amerique' },
  { country: 'Éthiopie', capital: 'Addis-Abeba', continent: 'afrique' },
  { country: 'Fidji', capital: 'Suva', continent: 'oceanie' },
  { country: 'Finlande', capital: 'Helsinki', continent: 'europe' },
  { country: 'France', capital: 'Paris', continent: 'europe' },
  { country: 'Gabon', capital: 'Libreville', continent: 'afrique' },
  { country: 'Gambie', capital: 'Banjul', continent: 'afrique' },
  { country: 'Géorgie', capital: 'Tbilissi', continent: 'asie' },
  { country: 'Ghana', capital: 'Accra', continent: 'afrique' },
  { country: 'Grèce', capital: 'Athènes', continent: 'europe' },
  { country: 'Grenade', capital: 'Saint-Georges', continent: 'amerique' },
  { country: 'Guatemala', capital: 'Guatemala', continent: 'amerique' },
  { country: 'Guinée', capital: 'Conakry', continent: 'afrique' },
  { country: 'Guinée-Bissau', capital: 'Bissau', continent: 'afrique' },
  { country: 'Guinée équatoriale', capital: 'Malabo', continent: 'afrique' },
  { country: 'Guyana', capital: 'Georgetown', continent: 'amerique' },
  { country: 'Haïti', capital: 'Port-au-Prince', continent: 'amerique' },
  { country: 'Honduras', capital: 'Tegucigalpa', continent: 'amerique' },
  { country: 'Hongrie', capital: 'Budapest', continent: 'europe' },
  { country: 'Îles Marshall', capital: 'Majuro', continent: 'oceanie' },
  { country: 'Îles Salomon', capital: 'Honiara', continent: 'oceanie' },
  { country: 'Inde', capital: 'New Delhi', continent: 'asie' },
  { country: 'Indonésie', capital: 'Jakarta', continent: 'asie', note: 'Jakarta reste la capitale de fait pendant la transition vers Nusantara.' },
  { country: 'Irak', capital: 'Bagdad', continent: 'asie' },
  { country: 'Iran', capital: 'Téhéran', continent: 'asie' },
  { country: 'Irlande', capital: 'Dublin', continent: 'europe' },
  { country: 'Islande', capital: 'Reykjavik', continent: 'europe' },
  { country: 'Israël', capital: 'Jérusalem', continent: 'asie', note: 'Le statut de Jérusalem est politiquement disputé; beaucoup d’États maintiennent leurs ambassades à Tel-Aviv.' },
  { country: 'Italie', capital: 'Rome', continent: 'europe' },
  { country: 'Jamaïque', capital: 'Kingston', continent: 'amerique' },
  { country: 'Japon', capital: 'Tokyo', continent: 'asie' },
  { country: 'Jordanie', capital: 'Amman', continent: 'asie' },
  { country: 'Kazakhstan', capital: 'Astana', continent: 'asie' },
  { country: 'Kenya', capital: 'Nairobi', continent: 'afrique' },
  { country: 'Kirghizistan', capital: 'Bichkek', continent: 'asie' },
  { country: 'Kiribati', capital: 'Tarawa-Sud', continent: 'oceanie' },
  { country: 'Koweït', capital: 'Koweït', continent: 'asie' },
  { country: 'Laos', capital: 'Vientiane', continent: 'asie' },
  { country: 'Lesotho', capital: 'Maseru', continent: 'afrique' },
  { country: 'Lettonie', capital: 'Riga', continent: 'europe' },
  { country: 'Liban', capital: 'Beyrouth', continent: 'asie' },
  { country: 'Liberia', capital: 'Monrovia', continent: 'afrique' },
  { country: 'Libye', capital: 'Tripoli', continent: 'afrique' },
  { country: 'Liechtenstein', capital: 'Vaduz', continent: 'europe' },
  { country: 'Lituanie', capital: 'Vilnius', continent: 'europe' },
  { country: 'Luxembourg', capital: 'Luxembourg', continent: 'europe' },
  { country: 'Macédoine du Nord', capital: 'Skopje', continent: 'europe' },
  { country: 'Madagascar', capital: 'Antananarivo', continent: 'afrique' },
  { country: 'Malaisie', capital: 'Kuala Lumpur', continent: 'asie', note: 'Kuala Lumpur est la capitale; Putrajaya est le centre administratif fédéral.' },
  { country: 'Malawi', capital: 'Lilongwe', continent: 'afrique' },
  { country: 'Maldives', capital: 'Malé', continent: 'asie' },
  { country: 'Mali', capital: 'Bamako', continent: 'afrique' },
  { country: 'Malte', capital: 'La Valette', continent: 'europe' },
  { country: 'Maroc', capital: 'Rabat', continent: 'afrique' },
  { country: 'Maurice', capital: 'Port-Louis', continent: 'afrique' },
  { country: 'Mauritanie', capital: 'Nouakchott', continent: 'afrique' },
  { country: 'Mexique', capital: 'Mexico', continent: 'amerique' },
  { country: 'Micronésie', capital: 'Palikir', continent: 'oceanie' },
  { country: 'Moldavie', capital: 'Chișinău', continent: 'europe' },
  { country: 'Monaco', capital: 'Monaco', continent: 'europe' },
  { country: 'Mongolie', capital: 'Oulan-Bator', continent: 'asie' },
  { country: 'Monténégro', capital: 'Podgorica', continent: 'europe' },
  { country: 'Mozambique', capital: 'Maputo', continent: 'afrique' },
  { country: 'Namibie', capital: 'Windhoek', continent: 'afrique' },
  { country: 'Nauru', capital: 'Yaren', continent: 'oceanie', note: 'Nauru n’a pas de capitale officielle; Yaren accueille les principales institutions.' },
  { country: 'Népal', capital: 'Katmandou', continent: 'asie' },
  { country: 'Nicaragua', capital: 'Managua', continent: 'amerique' },
  { country: 'Niger', capital: 'Niamey', continent: 'afrique' },
  { country: 'Nigeria', capital: 'Abuja', continent: 'afrique' },
  { country: 'Norvège', capital: 'Oslo', continent: 'europe' },
  { country: 'Nouvelle-Zélande', capital: 'Wellington', continent: 'oceanie' },
  { country: 'Oman', capital: 'Mascate', continent: 'asie' },
  { country: 'Ouganda', capital: 'Kampala', continent: 'afrique' },
  { country: 'Ouzbékistan', capital: 'Tachkent', continent: 'asie' },
  { country: 'Pakistan', capital: 'Islamabad', continent: 'asie' },
  { country: 'Palaos', capital: 'Ngerulmud', continent: 'oceanie' },
  { country: 'Palestine', capital: 'Jérusalem-Est', continent: 'asie', note: 'La Palestine est État observateur à l’ONU; Ramallah accueille de nombreuses institutions administratives.' },
  { country: 'Panama', capital: 'Panama', continent: 'amerique' },
  { country: 'Papouasie-Nouvelle-Guinée', capital: 'Port Moresby', continent: 'oceanie' },
  { country: 'Paraguay', capital: 'Asuncion', continent: 'amerique' },
  { country: 'Pays-Bas', capital: 'Amsterdam', continent: 'europe', note: 'Amsterdam est la capitale; La Haye accueille le gouvernement et la monarchie.' },
  { country: 'Pérou', capital: 'Lima', continent: 'amerique' },
  { country: 'Philippines', capital: 'Manille', continent: 'asie' },
  { country: 'Pologne', capital: 'Varsovie', continent: 'europe' },
  { country: 'Portugal', capital: 'Lisbonne', continent: 'europe' },
  { country: 'Qatar', capital: 'Doha', continent: 'asie' },
  { country: 'République centrafricaine', capital: 'Bangui', continent: 'afrique' },
  { country: 'République démocratique du Congo', capital: 'Kinshasa', continent: 'afrique' },
  { country: 'République dominicaine', capital: 'Saint-Domingue', continent: 'amerique' },
  { country: 'République tchèque', capital: 'Prague', continent: 'europe' },
  { country: 'Roumanie', capital: 'Bucarest', continent: 'europe' },
  { country: 'Royaume-Uni', capital: 'Londres', continent: 'europe' },
  { country: 'Russie', capital: 'Moscou', continent: 'europe' },
  { country: 'Rwanda', capital: 'Kigali', continent: 'afrique' },
  { country: 'Saint-Christophe-et-Niévès', capital: 'Basseterre', continent: 'amerique' },
  { country: 'Sainte-Lucie', capital: 'Castries', continent: 'amerique' },
  { country: 'Saint-Marin', capital: 'Saint-Marin', continent: 'europe' },
  { country: 'Saint-Vincent-et-les-Grenadines', capital: 'Kingstown', continent: 'amerique' },
  { country: 'Salvador', capital: 'San Salvador', continent: 'amerique' },
  { country: 'Samoa', capital: 'Apia', continent: 'oceanie' },
  { country: 'São Tomé-et-Principe', capital: 'São Tomé', continent: 'afrique' },
  { country: 'Sénégal', capital: 'Dakar', continent: 'afrique' },
  { country: 'Serbie', capital: 'Belgrade', continent: 'europe' },
  { country: 'Seychelles', capital: 'Victoria', continent: 'afrique' },
  { country: 'Sierra Leone', capital: 'Freetown', continent: 'afrique' },
  { country: 'Singapour', capital: 'Singapour', continent: 'asie' },
  { country: 'Slovaquie', capital: 'Bratislava', continent: 'europe' },
  { country: 'Slovénie', capital: 'Ljubljana', continent: 'europe' },
  { country: 'Somalie', capital: 'Mogadiscio', continent: 'afrique' },
  { country: 'Soudan', capital: 'Khartoum', continent: 'afrique' },
  { country: 'Soudan du Sud', capital: 'Djouba', continent: 'afrique' },
  { country: 'Sri Lanka', capital: 'Sri Jayawardenepura Kotte', continent: 'asie' },
  { country: 'Suède', capital: 'Stockholm', continent: 'europe' },
  { country: 'Suisse', capital: 'Berne', continent: 'europe' },
  { country: 'Suriname', capital: 'Paramaribo', continent: 'amerique' },
  { country: 'Syrie', capital: 'Damas', continent: 'asie' },
  { country: 'Tadjikistan', capital: 'Douchanbé', continent: 'asie' },
  { country: 'Tanzanie', capital: 'Dodoma', continent: 'afrique' },
  { country: 'Tchad', capital: "N'Djamena", continent: 'afrique' },
  { country: 'Thaïlande', capital: 'Bangkok', continent: 'asie' },
  { country: 'Timor oriental', capital: 'Dili', continent: 'asie' },
  { country: 'Togo', capital: 'Lomé', continent: 'afrique' },
  { country: 'Tonga', capital: 'Nukuʻalofa', continent: 'oceanie' },
  { country: 'Trinité-et-Tobago', capital: "Port-d'Espagne", continent: 'amerique' },
  { country: 'Tunisie', capital: 'Tunis', continent: 'afrique' },
  { country: 'Turkménistan', capital: 'Achgabat', continent: 'asie' },
  { country: 'Turquie', capital: 'Ankara', continent: 'asie' },
  { country: 'Tuvalu', capital: 'Funafuti', continent: 'oceanie' },
  { country: 'Ukraine', capital: 'Kiev', continent: 'europe' },
  { country: 'Uruguay', capital: 'Montevideo', continent: 'amerique' },
  { country: 'Vanuatu', capital: 'Port-Vila', continent: 'oceanie' },
  { country: 'Vatican', capital: 'Cité du Vatican', continent: 'europe' },
  { country: 'Venezuela', capital: 'Caracas', continent: 'amerique' },
  { country: 'Vietnam', capital: 'Hanoï', continent: 'asie' },
  { country: 'Yémen', capital: 'Sanaa', continent: 'asie' },
  { country: 'Zambie', capital: 'Lusaka', continent: 'afrique' },
  { country: 'Zimbabwe', capital: 'Harare', continent: 'afrique' },
];

function slug(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const easyCapitalCountries = new Set([
  'allemagne', 'belgique', 'bresil', 'canada', 'chine', 'espagne', 'etats-unis', 'france', 'grece', 'italie',
  'japon', 'maroc', 'portugal', 'royaume-uni', 'russie', 'senegal', 'suisse',
]);

const mediumCapitalCountries = new Set([
  'afghanistan', 'afrique-du-sud', 'albanie', 'algerie', 'arabie-saoudite', 'argentine', 'armenie',
  'australie', 'autriche', 'azerbaidjan', 'bahrein', 'bangladesh', 'bielorussie', 'bolivie',
  'bosnie-herzegovine', 'bulgarie', 'cambodge', 'cameroun', 'chili', 'chypre', 'colombie',
  'coree-du-sud', 'costa-rica', 'croatie', 'cuba', 'danemark', 'egypte', 'emirats-arabes-unis',
  'equateur', 'estonie', 'finlande', 'georgie', 'ghana', 'hongrie', 'inde', 'indonesie', 'irak',
  'iran', 'irlande', 'islande', 'israel', 'jamaique', 'jordanie', 'kazakhstan', 'kenya',
  'lettonie', 'liban', 'lituanie', 'luxembourg', 'malaisie', 'mali', 'malte', 'mexique',
  'moldavie', 'monaco', 'montenegro', 'nepal', 'nigeria', 'norvege', 'nouvelle-zelande',
  'oman', 'pakistan', 'panama', 'paraguay', 'pays-bas', 'perou', 'philippines', 'pologne',
  'qatar', 'republique-tcheque', 'roumanie', 'serbie', 'singapour', 'slovaquie', 'slovenie',
  'suede', 'thailande', 'tunisie', 'turquie', 'ukraine', 'uruguay', 'venezuela', 'vietnam',
]);

function capitalDifficulty(row: CountryCapital): Difficulty {
  const key = slug(row.country);
  if (easyCapitalCountries.has(key)) return 1;
  if (mediumCapitalCountries.has(key)) return 2;
  return 3;
}

function choicesFrom<T extends CountryCapital>(rows: T[], index: number, selector: (row: T) => string) {
  const correct = selector(rows[index]);
  const choices = [correct];
  let offset = 7;
  while (choices.length < 4) {
    const candidate = selector(rows[(index + offset) % rows.length]);
    if (!choices.includes(candidate)) choices.push(candidate);
    offset += 11;
  }
  return choices as [string, string, string, string];
}

function explanationFor(row: CountryCapital) {
  return row.note ?? `${row.capital} est la capitale associée au pays ${row.country}; c est le repère politique principal à relier à ce pays dans les atlas usuels.`;
}

function sameNameCapital(row: CountryCapital) {
  return slug(row.capital) === slug(row.country);
}

function capitalNamePartOfCountry(row: CountryCapital) {
  return slug(row.country).includes(slug(row.capital));
}

function maskedCapital(row: CountryCapital) {
  const countryPattern = new RegExp(row.country.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  return row.capital.replace(countryPattern, '...');
}

function countryContinentLabel(continent: CountryCapital['continent']) {
  return continent === 'europe' ? 'européen' : continent === 'afrique' ? 'africain' : continent === 'amerique' ? 'américain' : continent === 'asie' ? 'asiatique' : 'océanien';
}

function capitalContinentLabel(continent: CountryCapital['continent']) {
  return continent === 'europe' ? 'européenne' : continent === 'afrique' ? 'africaine' : continent === 'amerique' ? 'américaine' : continent === 'asie' ? 'asiatique' : 'océanienne';
}

function choicesExcludingHomonyms(selector: (row: CountryCapital) => string, row: CountryCapital, index: number) {
  const choices = [selector(row)];
  let offset = 5;
  while (choices.length < 4) {
    const candidateRow = countryCapitalData[(index + offset) % countryCapitalData.length];
    const candidate = selector(candidateRow);
    if (!sameNameCapital(candidateRow) && !choices.includes(candidate)) choices.push(candidate);
    offset += 9;
  }
  return choices as [string, string, string, string];
}

const capitalQuestions: QuestionSeed[] = countryCapitalData.map((row, index) => ({
  id: `world-capital-${slug(row.country)}`,
  topicId: 'geography',
  difficulty: capitalDifficulty(row),
  prompt: sameNameCapital(row) ? `Pays du monde : quelle capitale ${capitalContinentLabel(row.continent)} porte exactement le nom de son pays ?` : capitalNamePartOfCountry(row) ? `Pays du monde : quelle capitale ${capitalContinentLabel(row.continent)} reprend une partie du nom de son pays ?` : `Pays du monde : pour ${row.country}, quelle ville est la capitale ?`,
  choices: sameNameCapital(row) || capitalNamePartOfCountry(row) ? choicesExcludingHomonyms((item) => item.capital, row, index) : choicesFrom(countryCapitalData, index, (item) => item.capital),
  answerIndex: 0,
  explanation: explanationFor(row),
  tags: ['geography', 'capitales', 'pays-du-monde', 'coverage:world-countries', `continent:${row.continent}`],
  sourceLabel: 'Compilation Kizz d’après listes ONU/ISO et atlas usuels',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`${row.country} capitale`)}`,
}));

const countryQuestions: QuestionSeed[] = countryCapitalData.map((row, index) => ({
  id: `world-country-${slug(row.country)}`,
  topicId: 'geography',
  difficulty: capitalDifficulty(row),
  prompt: sameNameCapital(row) ? `Pays du monde : quel pays ${countryContinentLabel(row.continent)} a une capitale homonyme ?` : slug(row.capital).includes(slug(row.country)) ? `Pays du monde : ${maskedCapital(row)} est la capitale de quel pays ?` : `Pays du monde : ${row.capital} est la capitale de quel pays ?`,
  choices: sameNameCapital(row) ? choicesExcludingHomonyms((item) => item.country, row, index) : choicesFrom(countryCapitalData, index, (item) => item.country),
  answerIndex: 0,
  explanation: explanationFor(row),
  tags: ['geography', 'capitales', 'pays-du-monde', 'coverage:world-countries', `continent:${row.continent}`],
  sourceLabel: 'Compilation Kizz d’après listes ONU/ISO et atlas usuels',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`${row.capital} ${row.country}`)}`,
}));

export const worldCountryQuestions: QuestionSeed[] = [...capitalQuestions, ...countryQuestions];
