import { QuestionSeed } from './domain';

type FlagCountry = { country: string; code: string; flag: string };

const flagCountries: FlagCountry[] = [
  {
    "country": "Afghanistan",
    "code": "AF",
    "flag": "🇦🇫"
  },
  {
    "country": "Afrique du Sud",
    "code": "ZA",
    "flag": "🇿🇦"
  },
  {
    "country": "Albanie",
    "code": "AL",
    "flag": "🇦🇱"
  },
  {
    "country": "Algérie",
    "code": "DZ",
    "flag": "🇩🇿"
  },
  {
    "country": "Allemagne",
    "code": "DE",
    "flag": "🇩🇪"
  },
  {
    "country": "Andorre",
    "code": "AD",
    "flag": "🇦🇩"
  },
  {
    "country": "Angola",
    "code": "AO",
    "flag": "🇦🇴"
  },
  {
    "country": "Antigua-et-Barbuda",
    "code": "AG",
    "flag": "🇦🇬"
  },
  {
    "country": "Arabie saoudite",
    "code": "SA",
    "flag": "🇸🇦"
  },
  {
    "country": "Argentine",
    "code": "AR",
    "flag": "🇦🇷"
  },
  {
    "country": "Arménie",
    "code": "AM",
    "flag": "🇦🇲"
  },
  {
    "country": "Australie",
    "code": "AU",
    "flag": "🇦🇺"
  },
  {
    "country": "Autriche",
    "code": "AT",
    "flag": "🇦🇹"
  },
  {
    "country": "Azerbaïdjan",
    "code": "AZ",
    "flag": "🇦🇿"
  },
  {
    "country": "Bahamas",
    "code": "BS",
    "flag": "🇧🇸"
  },
  {
    "country": "Bahreïn",
    "code": "BH",
    "flag": "🇧🇭"
  },
  {
    "country": "Bangladesh",
    "code": "BD",
    "flag": "🇧🇩"
  },
  {
    "country": "Barbade",
    "code": "BB",
    "flag": "🇧🇧"
  },
  {
    "country": "Belgique",
    "code": "BE",
    "flag": "🇧🇪"
  },
  {
    "country": "Belize",
    "code": "BZ",
    "flag": "🇧🇿"
  },
  {
    "country": "Bénin",
    "code": "BJ",
    "flag": "🇧🇯"
  },
  {
    "country": "Bhoutan",
    "code": "BT",
    "flag": "🇧🇹"
  },
  {
    "country": "Biélorussie",
    "code": "BY",
    "flag": "🇧🇾"
  },
  {
    "country": "Birmanie",
    "code": "MM",
    "flag": "🇲🇲"
  },
  {
    "country": "Bolivie",
    "code": "BO",
    "flag": "🇧🇴"
  },
  {
    "country": "Bosnie-Herzégovine",
    "code": "BA",
    "flag": "🇧🇦"
  },
  {
    "country": "Botswana",
    "code": "BW",
    "flag": "🇧🇼"
  },
  {
    "country": "Brésil",
    "code": "BR",
    "flag": "🇧🇷"
  },
  {
    "country": "Brunei",
    "code": "BN",
    "flag": "🇧🇳"
  },
  {
    "country": "Bulgarie",
    "code": "BG",
    "flag": "🇧🇬"
  },
  {
    "country": "Burkina Faso",
    "code": "BF",
    "flag": "🇧🇫"
  },
  {
    "country": "Burundi",
    "code": "BI",
    "flag": "🇧🇮"
  },
  {
    "country": "Cambodge",
    "code": "KH",
    "flag": "🇰🇭"
  },
  {
    "country": "Cameroun",
    "code": "CM",
    "flag": "🇨🇲"
  },
  {
    "country": "Canada",
    "code": "CA",
    "flag": "🇨🇦"
  },
  {
    "country": "Cap-Vert",
    "code": "CV",
    "flag": "🇨🇻"
  },
  {
    "country": "Chili",
    "code": "CL",
    "flag": "🇨🇱"
  },
  {
    "country": "Chine",
    "code": "CN",
    "flag": "🇨🇳"
  },
  {
    "country": "Chypre",
    "code": "CY",
    "flag": "🇨🇾"
  },
  {
    "country": "Colombie",
    "code": "CO",
    "flag": "🇨🇴"
  },
  {
    "country": "Comores",
    "code": "KM",
    "flag": "🇰🇲"
  },
  {
    "country": "Congo",
    "code": "CG",
    "flag": "🇨🇬"
  },
  {
    "country": "Corée du Nord",
    "code": "KP",
    "flag": "🇰🇵"
  },
  {
    "country": "Corée du Sud",
    "code": "KR",
    "flag": "🇰🇷"
  },
  {
    "country": "Costa Rica",
    "code": "CR",
    "flag": "🇨🇷"
  },
  {
    "country": "Côte d'Ivoire",
    "code": "CI",
    "flag": "🇨🇮"
  },
  {
    "country": "Croatie",
    "code": "HR",
    "flag": "🇭🇷"
  },
  {
    "country": "Cuba",
    "code": "CU",
    "flag": "🇨🇺"
  },
  {
    "country": "Danemark",
    "code": "DK",
    "flag": "🇩🇰"
  },
  {
    "country": "Djibouti",
    "code": "DJ",
    "flag": "🇩🇯"
  },
  {
    "country": "Dominique",
    "code": "DM",
    "flag": "🇩🇲"
  },
  {
    "country": "Égypte",
    "code": "EG",
    "flag": "🇪🇬"
  },
  {
    "country": "Émirats arabes unis",
    "code": "AE",
    "flag": "🇦🇪"
  },
  {
    "country": "Équateur",
    "code": "EC",
    "flag": "🇪🇨"
  },
  {
    "country": "Érythrée",
    "code": "ER",
    "flag": "🇪🇷"
  },
  {
    "country": "Espagne",
    "code": "ES",
    "flag": "🇪🇸"
  },
  {
    "country": "Estonie",
    "code": "EE",
    "flag": "🇪🇪"
  },
  {
    "country": "Eswatini",
    "code": "SZ",
    "flag": "🇸🇿"
  },
  {
    "country": "États-Unis",
    "code": "US",
    "flag": "🇺🇸"
  },
  {
    "country": "Éthiopie",
    "code": "ET",
    "flag": "🇪🇹"
  },
  {
    "country": "Fidji",
    "code": "FJ",
    "flag": "🇫🇯"
  },
  {
    "country": "Finlande",
    "code": "FI",
    "flag": "🇫🇮"
  },
  {
    "country": "France",
    "code": "FR",
    "flag": "🇫🇷"
  },
  {
    "country": "Gabon",
    "code": "GA",
    "flag": "🇬🇦"
  },
  {
    "country": "Gambie",
    "code": "GM",
    "flag": "🇬🇲"
  },
  {
    "country": "Géorgie",
    "code": "GE",
    "flag": "🇬🇪"
  },
  {
    "country": "Ghana",
    "code": "GH",
    "flag": "🇬🇭"
  },
  {
    "country": "Grèce",
    "code": "GR",
    "flag": "🇬🇷"
  },
  {
    "country": "Grenade",
    "code": "GD",
    "flag": "🇬🇩"
  },
  {
    "country": "Guatemala",
    "code": "GT",
    "flag": "🇬🇹"
  },
  {
    "country": "Guinée",
    "code": "GN",
    "flag": "🇬🇳"
  },
  {
    "country": "Guinée-Bissau",
    "code": "GW",
    "flag": "🇬🇼"
  },
  {
    "country": "Guinée équatoriale",
    "code": "GQ",
    "flag": "🇬🇶"
  },
  {
    "country": "Guyana",
    "code": "GY",
    "flag": "🇬🇾"
  },
  {
    "country": "Haïti",
    "code": "HT",
    "flag": "🇭🇹"
  },
  {
    "country": "Honduras",
    "code": "HN",
    "flag": "🇭🇳"
  },
  {
    "country": "Hongrie",
    "code": "HU",
    "flag": "🇭🇺"
  },
  {
    "country": "Îles Marshall",
    "code": "MH",
    "flag": "🇲🇭"
  },
  {
    "country": "Îles Salomon",
    "code": "SB",
    "flag": "🇸🇧"
  },
  {
    "country": "Inde",
    "code": "IN",
    "flag": "🇮🇳"
  },
  {
    "country": "Indonésie",
    "code": "ID",
    "flag": "🇮🇩"
  },
  {
    "country": "Irak",
    "code": "IQ",
    "flag": "🇮🇶"
  },
  {
    "country": "Iran",
    "code": "IR",
    "flag": "🇮🇷"
  },
  {
    "country": "Irlande",
    "code": "IE",
    "flag": "🇮🇪"
  },
  {
    "country": "Islande",
    "code": "IS",
    "flag": "🇮🇸"
  },
  {
    "country": "Israël",
    "code": "IL",
    "flag": "🇮🇱"
  },
  {
    "country": "Italie",
    "code": "IT",
    "flag": "🇮🇹"
  },
  {
    "country": "Jamaïque",
    "code": "JM",
    "flag": "🇯🇲"
  },
  {
    "country": "Japon",
    "code": "JP",
    "flag": "🇯🇵"
  },
  {
    "country": "Jordanie",
    "code": "JO",
    "flag": "🇯🇴"
  },
  {
    "country": "Kazakhstan",
    "code": "KZ",
    "flag": "🇰🇿"
  },
  {
    "country": "Kenya",
    "code": "KE",
    "flag": "🇰🇪"
  },
  {
    "country": "Kirghizistan",
    "code": "KG",
    "flag": "🇰🇬"
  },
  {
    "country": "Kiribati",
    "code": "KI",
    "flag": "🇰🇮"
  },
  {
    "country": "Koweït",
    "code": "KW",
    "flag": "🇰🇼"
  },
  {
    "country": "Laos",
    "code": "LA",
    "flag": "🇱🇦"
  },
  {
    "country": "Lesotho",
    "code": "LS",
    "flag": "🇱🇸"
  },
  {
    "country": "Lettonie",
    "code": "LV",
    "flag": "🇱🇻"
  },
  {
    "country": "Liban",
    "code": "LB",
    "flag": "🇱🇧"
  },
  {
    "country": "Liberia",
    "code": "LR",
    "flag": "🇱🇷"
  },
  {
    "country": "Libye",
    "code": "LY",
    "flag": "🇱🇾"
  },
  {
    "country": "Liechtenstein",
    "code": "LI",
    "flag": "🇱🇮"
  },
  {
    "country": "Lituanie",
    "code": "LT",
    "flag": "🇱🇹"
  },
  {
    "country": "Luxembourg",
    "code": "LU",
    "flag": "🇱🇺"
  },
  {
    "country": "Macédoine du Nord",
    "code": "MK",
    "flag": "🇲🇰"
  },
  {
    "country": "Madagascar",
    "code": "MG",
    "flag": "🇲🇬"
  },
  {
    "country": "Malaisie",
    "code": "MY",
    "flag": "🇲🇾"
  },
  {
    "country": "Malawi",
    "code": "MW",
    "flag": "🇲🇼"
  },
  {
    "country": "Maldives",
    "code": "MV",
    "flag": "🇲🇻"
  },
  {
    "country": "Mali",
    "code": "ML",
    "flag": "🇲🇱"
  },
  {
    "country": "Malte",
    "code": "MT",
    "flag": "🇲🇹"
  },
  {
    "country": "Maroc",
    "code": "MA",
    "flag": "🇲🇦"
  },
  {
    "country": "Maurice",
    "code": "MU",
    "flag": "🇲🇺"
  },
  {
    "country": "Mauritanie",
    "code": "MR",
    "flag": "🇲🇷"
  },
  {
    "country": "Mexique",
    "code": "MX",
    "flag": "🇲🇽"
  },
  {
    "country": "Micronésie",
    "code": "FM",
    "flag": "🇫🇲"
  },
  {
    "country": "Moldavie",
    "code": "MD",
    "flag": "🇲🇩"
  },
  {
    "country": "Monaco",
    "code": "MC",
    "flag": "🇲🇨"
  },
  {
    "country": "Mongolie",
    "code": "MN",
    "flag": "🇲🇳"
  },
  {
    "country": "Monténégro",
    "code": "ME",
    "flag": "🇲🇪"
  },
  {
    "country": "Mozambique",
    "code": "MZ",
    "flag": "🇲🇿"
  },
  {
    "country": "Namibie",
    "code": "NA",
    "flag": "🇳🇦"
  },
  {
    "country": "Nauru",
    "code": "NR",
    "flag": "🇳🇷"
  },
  {
    "country": "Népal",
    "code": "NP",
    "flag": "🇳🇵"
  },
  {
    "country": "Nicaragua",
    "code": "NI",
    "flag": "🇳🇮"
  },
  {
    "country": "Niger",
    "code": "NE",
    "flag": "🇳🇪"
  },
  {
    "country": "Nigeria",
    "code": "NG",
    "flag": "🇳🇬"
  },
  {
    "country": "Norvège",
    "code": "NO",
    "flag": "🇳🇴"
  },
  {
    "country": "Nouvelle-Zélande",
    "code": "NZ",
    "flag": "🇳🇿"
  },
  {
    "country": "Oman",
    "code": "OM",
    "flag": "🇴🇲"
  },
  {
    "country": "Ouganda",
    "code": "UG",
    "flag": "🇺🇬"
  },
  {
    "country": "Ouzbékistan",
    "code": "UZ",
    "flag": "🇺🇿"
  },
  {
    "country": "Pakistan",
    "code": "PK",
    "flag": "🇵🇰"
  },
  {
    "country": "Palaos",
    "code": "PW",
    "flag": "🇵🇼"
  },
  {
    "country": "Palestine",
    "code": "PS",
    "flag": "🇵🇸"
  },
  {
    "country": "Panama",
    "code": "PA",
    "flag": "🇵🇦"
  },
  {
    "country": "Papouasie-Nouvelle-Guinée",
    "code": "PG",
    "flag": "🇵🇬"
  },
  {
    "country": "Paraguay",
    "code": "PY",
    "flag": "🇵🇾"
  },
  {
    "country": "Pays-Bas",
    "code": "NL",
    "flag": "🇳🇱"
  },
  {
    "country": "Pérou",
    "code": "PE",
    "flag": "🇵🇪"
  },
  {
    "country": "Philippines",
    "code": "PH",
    "flag": "🇵🇭"
  },
  {
    "country": "Pologne",
    "code": "PL",
    "flag": "🇵🇱"
  },
  {
    "country": "Portugal",
    "code": "PT",
    "flag": "🇵🇹"
  },
  {
    "country": "Qatar",
    "code": "QA",
    "flag": "🇶🇦"
  },
  {
    "country": "République centrafricaine",
    "code": "CF",
    "flag": "🇨🇫"
  },
  {
    "country": "République démocratique du Congo",
    "code": "CD",
    "flag": "🇨🇩"
  },
  {
    "country": "République dominicaine",
    "code": "DO",
    "flag": "🇩🇴"
  },
  {
    "country": "République tchèque",
    "code": "CZ",
    "flag": "🇨🇿"
  },
  {
    "country": "Roumanie",
    "code": "RO",
    "flag": "🇷🇴"
  },
  {
    "country": "Royaume-Uni",
    "code": "GB",
    "flag": "🇬🇧"
  },
  {
    "country": "Russie",
    "code": "RU",
    "flag": "🇷🇺"
  },
  {
    "country": "Rwanda",
    "code": "RW",
    "flag": "🇷🇼"
  },
  {
    "country": "Saint-Christophe-et-Niévès",
    "code": "KN",
    "flag": "🇰🇳"
  },
  {
    "country": "Sainte-Lucie",
    "code": "LC",
    "flag": "🇱🇨"
  },
  {
    "country": "Saint-Marin",
    "code": "SM",
    "flag": "🇸🇲"
  },
  {
    "country": "Saint-Vincent-et-les-Grenadines",
    "code": "VC",
    "flag": "🇻🇨"
  },
  {
    "country": "Salvador",
    "code": "SV",
    "flag": "🇸🇻"
  },
  {
    "country": "Samoa",
    "code": "WS",
    "flag": "🇼🇸"
  },
  {
    "country": "São Tomé-et-Principe",
    "code": "ST",
    "flag": "🇸🇹"
  },
  {
    "country": "Sénégal",
    "code": "SN",
    "flag": "🇸🇳"
  },
  {
    "country": "Serbie",
    "code": "RS",
    "flag": "🇷🇸"
  },
  {
    "country": "Seychelles",
    "code": "SC",
    "flag": "🇸🇨"
  },
  {
    "country": "Sierra Leone",
    "code": "SL",
    "flag": "🇸🇱"
  },
  {
    "country": "Singapour",
    "code": "SG",
    "flag": "🇸🇬"
  },
  {
    "country": "Slovaquie",
    "code": "SK",
    "flag": "🇸🇰"
  },
  {
    "country": "Slovénie",
    "code": "SI",
    "flag": "🇸🇮"
  },
  {
    "country": "Somalie",
    "code": "SO",
    "flag": "🇸🇴"
  },
  {
    "country": "Soudan",
    "code": "SD",
    "flag": "🇸🇩"
  },
  {
    "country": "Soudan du Sud",
    "code": "SS",
    "flag": "🇸🇸"
  },
  {
    "country": "Sri Lanka",
    "code": "LK",
    "flag": "🇱🇰"
  },
  {
    "country": "Suède",
    "code": "SE",
    "flag": "🇸🇪"
  },
  {
    "country": "Suisse",
    "code": "CH",
    "flag": "🇨🇭"
  },
  {
    "country": "Suriname",
    "code": "SR",
    "flag": "🇸🇷"
  },
  {
    "country": "Syrie",
    "code": "SY",
    "flag": "🇸🇾"
  },
  {
    "country": "Tadjikistan",
    "code": "TJ",
    "flag": "🇹🇯"
  },
  {
    "country": "Tanzanie",
    "code": "TZ",
    "flag": "🇹🇿"
  },
  {
    "country": "Tchad",
    "code": "TD",
    "flag": "🇹🇩"
  },
  {
    "country": "Thaïlande",
    "code": "TH",
    "flag": "🇹🇭"
  },
  {
    "country": "Timor oriental",
    "code": "TL",
    "flag": "🇹🇱"
  },
  {
    "country": "Togo",
    "code": "TG",
    "flag": "🇹🇬"
  },
  {
    "country": "Tonga",
    "code": "TO",
    "flag": "🇹🇴"
  },
  {
    "country": "Trinité-et-Tobago",
    "code": "TT",
    "flag": "🇹🇹"
  },
  {
    "country": "Tunisie",
    "code": "TN",
    "flag": "🇹🇳"
  },
  {
    "country": "Turkménistan",
    "code": "TM",
    "flag": "🇹🇲"
  },
  {
    "country": "Turquie",
    "code": "TR",
    "flag": "🇹🇷"
  },
  {
    "country": "Tuvalu",
    "code": "TV",
    "flag": "🇹🇻"
  },
  {
    "country": "Ukraine",
    "code": "UA",
    "flag": "🇺🇦"
  },
  {
    "country": "Uruguay",
    "code": "UY",
    "flag": "🇺🇾"
  },
  {
    "country": "Vanuatu",
    "code": "VU",
    "flag": "🇻🇺"
  },
  {
    "country": "Vatican",
    "code": "VA",
    "flag": "🇻🇦"
  },
  {
    "country": "Venezuela",
    "code": "VE",
    "flag": "🇻🇪"
  },
  {
    "country": "Vietnam",
    "code": "VN",
    "flag": "🇻🇳"
  },
  {
    "country": "Yémen",
    "code": "YE",
    "flag": "🇾🇪"
  },
  {
    "country": "Zambie",
    "code": "ZM",
    "flag": "🇿🇲"
  },
  {
    "country": "Zimbabwe",
    "code": "ZW",
    "flag": "🇿🇼"
  }
];

function slug(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function acceptedCountryNames(country: string) {
  const plain = country.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[?]/g, "'").toLowerCase();
  const withoutArticles = plain.replace(/^le /, '').replace(/^la /, '').replace(/^les /, '');
  return [...new Set([
    country.toLowerCase(),
    plain,
    withoutArticles,
    withoutArticles.replace(/-/g, ' '),
    withoutArticles.replace(/\s+et\s+/g, ' '),
    withoutArticles.replace(/\s+d[' ]/g, ' '),
    withoutArticles.replace(/\s+du\s+/g, ' '),
    withoutArticles.replace(/\s+de\s+/g, ' '),
  ].filter((value) => value.trim().length > 1))];
}

function choicesFrom<T>(rows: T[], index: number, selector: (row: T) => string): [string, string, string, string] {
  const choices = [selector(rows[index])];
  let offset = 5;
  while (choices.length < 4) {
    const candidate = selector(rows[(index + offset) % rows.length]);
    if (!choices.includes(candidate)) choices.push(candidate);
    offset += 17;
  }
  return choices as [string, string, string, string];
}

const easyFlagCountries = new Set([
  'Afrique du Sud', 'Allemagne', 'Argentine', 'Australie', 'Autriche', 'Belgique', 'Bresil', 'Canada', 'Chine',
  'Coree du Sud', 'Danemark', 'Espagne', 'Etats-Unis', 'Finlande', 'France', 'Grece', 'Inde', 'Irlande', 'Italie',
  'Japon', 'Maroc', 'Mexique', 'Norvege', 'Pays-Bas', 'Pologne', 'Portugal', 'Royaume-Uni', 'Russie', 'Suede',
  'Suisse', 'Turquie',
]);

const mediumFlagCountries = new Set([
  'Albanie', 'Algerie', 'Arabie saoudite', 'Armenie', 'Bahrein', 'Bangladesh', 'Benin', 'Bielorussie', 'Bolivie',
  'Bosnie-Herzegovine', 'Bulgarie', 'Cameroun', 'Chili', 'Colombie', 'Cote d\'Ivoire', 'Croatie', 'Cuba',
  'Egypte', 'Emirats arabes unis', 'Estonie', 'Ghana', 'Hongrie', 'Indonesie', 'Iran', 'Islande', 'Israel',
  'Jamaique', 'Jordanie', 'Kazakhstan', 'Kenya', 'Liban', 'Lituanie', 'Luxembourg', 'Malaisie', 'Malte',
  'Nigeria', 'Nouvelle-Zelande', 'Pakistan', 'Panama', 'Perou', 'Philippines', 'Qatar', 'Republique tcheque',
  'Roumanie', 'Senegal', 'Serbie', 'Singapour', 'Slovaquie', 'Slovenie', 'Thailande', 'Tunisie', 'Ukraine',
  'Uruguay', 'Venezuela', 'Vietnam',
]);

function normalizeCountry(country: string) {
  return country.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[?]/g, "'").replace(/Ã©/g, 'e').replace(/Ã´/g, 'o');
}

function flagDifficulty(country: string): 1 | 2 | 3 {
  const normalized = normalizeCountry(country);
  if (easyFlagCountries.has(normalized)) return 1;
  if (mediumFlagCountries.has(normalized)) return 2;
  return 3;
}

function flagExplanation(row: FlagCountry) {
  return `${row.flag} est le drapeau de ${row.country}; le code ${row.code} sert aussi de repere ISO/Unicode pour ce pays.`;
}

const flagToCountryTextQuestions: QuestionSeed[] = flagCountries.map((row, index) => ({
  id: `world-flag-text-${slug(row.country)}`,
  topicId: 'geography',
  difficulty: flagDifficulty(row.country),
  type: 'free-text',
  prompt: `Quel pays correspond a ce drapeau ? ${row.flag}`,
  acceptedAnswers: acceptedCountryNames(row.country),
  explanation: flagExplanation(row),
  tags: ['geography', 'drapeaux', 'pays-du-monde', 'coverage:world-flags', 'subtheme:geo:flags'],
  sourceLabel: 'Codes ISO 3166-1 / Unicode Regional Indicator Symbols',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`drapeau ${row.country}`)}`,
}));

const flagToCountryChoiceQuestions: QuestionSeed[] = flagCountries.map((row, index) => ({
  id: `world-flag-choice-${slug(row.country)}`,
  topicId: 'geography',
  difficulty: flagDifficulty(row.country),
  prompt: `A quel pays appartient ce drapeau ? ${row.flag}`,
  choices: choicesFrom(flagCountries, index, (item) => item.country),
  answerIndex: 0,
  explanation: flagExplanation(row),
  tags: ['geography', 'drapeaux', 'pays-du-monde', 'coverage:world-flags', 'subtheme:geo:flags'],
  sourceLabel: 'Codes ISO 3166-1 / Unicode Regional Indicator Symbols',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`drapeau ${row.country}`)}`,
}));

const countryToFlagChoiceQuestions: QuestionSeed[] = flagCountries.map((row, index) => ({
  id: `world-country-flag-${slug(row.country)}`,
  topicId: 'geography',
  difficulty: flagDifficulty(row.country),
  prompt: `Selectionne le drapeau de ${row.country}.`,
  choices: choicesFrom(flagCountries, index, (item) => item.flag),
  answerIndex: 0,
  explanation: flagExplanation(row),
  tags: ['geography', 'drapeaux', 'pays-du-monde', 'coverage:world-flags', 'subtheme:geo:flags'],
  sourceLabel: 'Codes ISO 3166-1 / Unicode Regional Indicator Symbols',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`drapeau ${row.country}`)}`,
}));

export const worldFlagQuestions: QuestionSeed[] = [
  ...flagToCountryTextQuestions,
  ...flagToCountryChoiceQuestions,
  ...countryToFlagChoiceQuestions,
];
