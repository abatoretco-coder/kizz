import { QuestionSeed } from '../domain';

export const natureVisualQuestions: QuestionSeed[] = [
  {
    "id": "nature-animals-001-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Renard roux",
      "Loup gris",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "Renard roux (Vulpes vulpes) se reconnaît notamment par pelage roux, museau fin et queue touffue.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:mammifere",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVulpes_vulpes_laying_in_snow.jpg",
    "imageAsset": "nature/renard-roux",
    "imageAlt": "Photo de Renard roux"
  },
  {
    "id": "nature-animals-001-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Renard roux.",
    "choices": [
      "Renard roux",
      "Loup gris",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "Renard roux est le choix qui correspond au repère visuel : pelage roux, museau fin et queue touffue.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:mammifere",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVulpes_vulpes_laying_in_snow.jpg",
    "choiceImageAssets": [
      "nature/renard-roux",
      "nature/loup-gris",
      "nature/lynx-boreal",
      "nature/bouquetin-des-alpes"
    ],
    "choiceImageAlts": [
      "Photo de Renard roux",
      "Photo de Loup gris",
      "Photo de Lynx boréal",
      "Photo de Bouquetin des Alpes"
    ]
  },
  {
    "id": "nature-animals-001-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : pelage roux, museau fin et queue touffue ?",
    "choices": [
      "Renard roux",
      "Loup gris",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Renard roux, nom scientifique Vulpes vulpes.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVulpes_vulpes_laying_in_snow.jpg"
  },
  {
    "id": "nature-animals-002-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Loup gris",
      "Renard roux",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "Loup gris (Canis lupus) se reconnaît notamment par canide social vivant souvent en meute.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:mammifere",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFront_view_of_a_resting_Canis_lupus_ssp.jpg",
    "imageAsset": "nature/loup-gris",
    "imageAlt": "Photo de Loup gris"
  },
  {
    "id": "nature-animals-002-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Loup gris.",
    "choices": [
      "Renard roux",
      "Loup gris",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 1,
    "explanation": "Loup gris est le choix qui correspond au repère visuel : canide social vivant souvent en meute.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:mammifere",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFront_view_of_a_resting_Canis_lupus_ssp.jpg",
    "choiceImageAssets": [
      "nature/renard-roux",
      "nature/loup-gris",
      "nature/lynx-boreal",
      "nature/bouquetin-des-alpes"
    ],
    "choiceImageAlts": [
      "Photo de Renard roux",
      "Photo de Loup gris",
      "Photo de Lynx boréal",
      "Photo de Bouquetin des Alpes"
    ]
  },
  {
    "id": "nature-animals-002-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : canide social vivant souvent en meute ?",
    "choices": [
      "Loup gris",
      "Renard roux",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Loup gris, nom scientifique Canis lupus.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFront_view_of_a_resting_Canis_lupus_ssp.jpg"
  },
  {
    "id": "nature-animals-003-identify",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Lynx boréal",
      "Renard roux",
      "Loup gris",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "Lynx boréal (Lynx lynx) se reconnaît notamment par oreilles terminées par des pinceaux noirs.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:mammifere",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALynx_lynx_poing.jpg",
    "imageAsset": "nature/lynx-boreal",
    "imageAlt": "Photo de Lynx boréal"
  },
  {
    "id": "nature-animals-003-image-choice",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Lynx boréal.",
    "choices": [
      "Renard roux",
      "Loup gris",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 2,
    "explanation": "Lynx boréal est le choix qui correspond au repère visuel : oreilles terminées par des pinceaux noirs.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:mammifere",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALynx_lynx_poing.jpg",
    "choiceImageAssets": [
      "nature/renard-roux",
      "nature/loup-gris",
      "nature/lynx-boreal",
      "nature/bouquetin-des-alpes"
    ],
    "choiceImageAlts": [
      "Photo de Renard roux",
      "Photo de Loup gris",
      "Photo de Lynx boréal",
      "Photo de Bouquetin des Alpes"
    ]
  },
  {
    "id": "nature-animals-003-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : oreilles terminées par des pinceaux noirs ?",
    "choices": [
      "Lynx boréal",
      "Renard roux",
      "Loup gris",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Lynx boréal, nom scientifique Lynx lynx.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALynx_lynx_poing.jpg"
  },
  {
    "id": "nature-animals-004-identify",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Bouquetin des Alpes",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Bouquetin des Alpes (Capra ibex) se reconnaît notamment par grandes cornes arquées et habitat de haute montagne.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:mammifere",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlpine_Ibex_in_Gornergrat.JPG",
    "imageAsset": "nature/bouquetin-des-alpes",
    "imageAlt": "Photo de Bouquetin des Alpes"
  },
  {
    "id": "nature-animals-004-image-choice",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Bouquetin des Alpes.",
    "choices": [
      "Renard roux",
      "Loup gris",
      "Lynx boréal",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 3,
    "explanation": "Bouquetin des Alpes est le choix qui correspond au repère visuel : grandes cornes arquées et habitat de haute montagne.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:mammifere",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlpine_Ibex_in_Gornergrat.JPG",
    "choiceImageAssets": [
      "nature/renard-roux",
      "nature/loup-gris",
      "nature/lynx-boreal",
      "nature/bouquetin-des-alpes"
    ],
    "choiceImageAlts": [
      "Photo de Renard roux",
      "Photo de Loup gris",
      "Photo de Lynx boréal",
      "Photo de Bouquetin des Alpes"
    ]
  },
  {
    "id": "nature-animals-004-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : grandes cornes arquées et habitat de haute montagne ?",
    "choices": [
      "Bouquetin des Alpes",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Bouquetin des Alpes, nom scientifique Capra ibex.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlpine_Ibex_in_Gornergrat.JPG"
  },
  {
    "id": "nature-animals-005-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Cerf élaphe",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Cerf élaphe (Cervus elaphus) se reconnaît notamment par grand cervidé dont le mâle porte des bois ramifiés.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:mammifere",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARedDeerStag.jpg",
    "imageAsset": "nature/cerf-elaphe",
    "imageAlt": "Photo de Cerf élaphe"
  },
  {
    "id": "nature-animals-005-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Cerf élaphe.",
    "choices": [
      "Cerf élaphe",
      "Hérisson commun",
      "Flamant rose",
      "Martin-pêcheur d’Europe"
    ],
    "answerIndex": 0,
    "explanation": "Cerf élaphe est le choix qui correspond au repère visuel : grand cervidé dont le mâle porte des bois ramifiés.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:mammifere",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARedDeerStag.jpg",
    "choiceImageAssets": [
      "nature/cerf-elaphe",
      "nature/herisson-commun",
      "nature/flamant-rose",
      "nature/martin-pecheur-d-europe"
    ],
    "choiceImageAlts": [
      "Photo de Cerf élaphe",
      "Photo de Hérisson commun",
      "Photo de Flamant rose",
      "Photo de Martin-pêcheur d’Europe"
    ]
  },
  {
    "id": "nature-animals-005-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : grand cervidé dont le mâle porte des bois ramifiés ?",
    "choices": [
      "Cerf élaphe",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Cerf élaphe, nom scientifique Cervus elaphus.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARedDeerStag.jpg"
  },
  {
    "id": "nature-animals-006-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Hérisson commun",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Hérisson commun (Erinaceus europaeus) se reconnaît notamment par petit mammifère couvert de piquants.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:mammifere",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AErinaceus_europaeus_(Marek_Szczepanek).jpg",
    "imageAsset": "nature/herisson-commun",
    "imageAlt": "Photo de Hérisson commun"
  },
  {
    "id": "nature-animals-006-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Hérisson commun.",
    "choices": [
      "Cerf élaphe",
      "Hérisson commun",
      "Flamant rose",
      "Martin-pêcheur d’Europe"
    ],
    "answerIndex": 1,
    "explanation": "Hérisson commun est le choix qui correspond au repère visuel : petit mammifère couvert de piquants.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:mammifere",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AErinaceus_europaeus_(Marek_Szczepanek).jpg",
    "choiceImageAssets": [
      "nature/cerf-elaphe",
      "nature/herisson-commun",
      "nature/flamant-rose",
      "nature/martin-pecheur-d-europe"
    ],
    "choiceImageAlts": [
      "Photo de Cerf élaphe",
      "Photo de Hérisson commun",
      "Photo de Flamant rose",
      "Photo de Martin-pêcheur d’Europe"
    ]
  },
  {
    "id": "nature-animals-006-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : petit mammifère couvert de piquants ?",
    "choices": [
      "Hérisson commun",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Hérisson commun, nom scientifique Erinaceus europaeus.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AErinaceus_europaeus_(Marek_Szczepanek).jpg"
  },
  {
    "id": "nature-animals-007-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Flamant rose",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Flamant rose (Phoenicopterus roseus) se reconnaît notamment par oiseau rose aux longues pattes vivant dans les lagunes.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:oiseau",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABristol.zoo.greater.flamingo.arp.jpg",
    "imageAsset": "nature/flamant-rose",
    "imageAlt": "Photo de Flamant rose"
  },
  {
    "id": "nature-animals-007-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Flamant rose.",
    "choices": [
      "Cerf élaphe",
      "Hérisson commun",
      "Flamant rose",
      "Martin-pêcheur d’Europe"
    ],
    "answerIndex": 2,
    "explanation": "Flamant rose est le choix qui correspond au repère visuel : oiseau rose aux longues pattes vivant dans les lagunes.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:oiseau",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABristol.zoo.greater.flamingo.arp.jpg",
    "choiceImageAssets": [
      "nature/cerf-elaphe",
      "nature/herisson-commun",
      "nature/flamant-rose",
      "nature/martin-pecheur-d-europe"
    ],
    "choiceImageAlts": [
      "Photo de Cerf élaphe",
      "Photo de Hérisson commun",
      "Photo de Flamant rose",
      "Photo de Martin-pêcheur d’Europe"
    ]
  },
  {
    "id": "nature-animals-007-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : oiseau rose aux longues pattes vivant dans les lagunes ?",
    "choices": [
      "Flamant rose",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Flamant rose, nom scientifique Phoenicopterus roseus.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABristol.zoo.greater.flamingo.arp.jpg"
  },
  {
    "id": "nature-animals-008-identify",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Martin-pêcheur d’Europe",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Martin-pêcheur d’Europe (Alcedo atthis) se reconnaît notamment par petit oiseau bleu et orange qui plonge pour pêcher.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:oiseau",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlcedo_atthis_eating_a_tadpole.jpg",
    "imageAsset": "nature/martin-pecheur-d-europe",
    "imageAlt": "Photo de Martin-pêcheur d’Europe"
  },
  {
    "id": "nature-animals-008-image-choice",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Martin-pêcheur d’Europe.",
    "choices": [
      "Cerf élaphe",
      "Hérisson commun",
      "Flamant rose",
      "Martin-pêcheur d’Europe"
    ],
    "answerIndex": 3,
    "explanation": "Martin-pêcheur d’Europe est le choix qui correspond au repère visuel : petit oiseau bleu et orange qui plonge pour pêcher.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:oiseau",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlcedo_atthis_eating_a_tadpole.jpg",
    "choiceImageAssets": [
      "nature/cerf-elaphe",
      "nature/herisson-commun",
      "nature/flamant-rose",
      "nature/martin-pecheur-d-europe"
    ],
    "choiceImageAlts": [
      "Photo de Cerf élaphe",
      "Photo de Hérisson commun",
      "Photo de Flamant rose",
      "Photo de Martin-pêcheur d’Europe"
    ]
  },
  {
    "id": "nature-animals-008-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : petit oiseau bleu et orange qui plonge pour pêcher ?",
    "choices": [
      "Martin-pêcheur d’Europe",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Martin-pêcheur d’Europe, nom scientifique Alcedo atthis.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlcedo_atthis_eating_a_tadpole.jpg"
  },
  {
    "id": "nature-animals-009-identify",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Chouette hulotte",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Chouette hulotte (Strix aluco) se reconnaît notamment par rapace nocturne fréquent dans les forêts européennes.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:oiseau",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATawny_wiki_edit1.jpg",
    "imageAsset": "nature/chouette-hulotte",
    "imageAlt": "Photo de Chouette hulotte"
  },
  {
    "id": "nature-animals-009-image-choice",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Chouette hulotte.",
    "choices": [
      "Chouette hulotte",
      "Aigle royal",
      "Salamandre tachetée",
      "Grenouille verte"
    ],
    "answerIndex": 0,
    "explanation": "Chouette hulotte est le choix qui correspond au repère visuel : rapace nocturne fréquent dans les forêts européennes.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:oiseau",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATawny_wiki_edit1.jpg",
    "choiceImageAssets": [
      "nature/chouette-hulotte",
      "nature/aigle-royal",
      "nature/salamandre-tachetee",
      "nature/grenouille-verte"
    ],
    "choiceImageAlts": [
      "Photo de Chouette hulotte",
      "Photo de Aigle royal",
      "Photo de Salamandre tachetée",
      "Photo de Grenouille verte"
    ]
  },
  {
    "id": "nature-animals-009-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : rapace nocturne fréquent dans les forêts européennes ?",
    "choices": [
      "Chouette hulotte",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Chouette hulotte, nom scientifique Strix aluco.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATawny_wiki_edit1.jpg"
  },
  {
    "id": "nature-animals-010-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Aigle royal",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Aigle royal (Aquila chrysaetos) se reconnaît notamment par grand rapace de montagne à l’envergure imposante.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:oiseau",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASteinadler_Aquila_chrysaetos_closeup2_Richard_Bartz.jpg",
    "imageAsset": "nature/aigle-royal",
    "imageAlt": "Photo de Aigle royal"
  },
  {
    "id": "nature-animals-010-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Aigle royal.",
    "choices": [
      "Chouette hulotte",
      "Aigle royal",
      "Salamandre tachetée",
      "Grenouille verte"
    ],
    "answerIndex": 1,
    "explanation": "Aigle royal est le choix qui correspond au repère visuel : grand rapace de montagne à l’envergure imposante.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:oiseau",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASteinadler_Aquila_chrysaetos_closeup2_Richard_Bartz.jpg",
    "choiceImageAssets": [
      "nature/chouette-hulotte",
      "nature/aigle-royal",
      "nature/salamandre-tachetee",
      "nature/grenouille-verte"
    ],
    "choiceImageAlts": [
      "Photo de Chouette hulotte",
      "Photo de Aigle royal",
      "Photo de Salamandre tachetée",
      "Photo de Grenouille verte"
    ]
  },
  {
    "id": "nature-animals-010-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : grand rapace de montagne à l’envergure imposante ?",
    "choices": [
      "Aigle royal",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Aigle royal, nom scientifique Aquila chrysaetos.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASteinadler_Aquila_chrysaetos_closeup2_Richard_Bartz.jpg"
  },
  {
    "id": "nature-animals-011-identify",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Salamandre tachetée",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Salamandre tachetée (Salamandra salamandra) se reconnaît notamment par amphibien noir marqué de taches jaunes.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:amphibien",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFeuersalamander-salamandra-salamandra.jpg",
    "imageAsset": "nature/salamandre-tachetee",
    "imageAlt": "Photo de Salamandre tachetée"
  },
  {
    "id": "nature-animals-011-image-choice",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Salamandre tachetée.",
    "choices": [
      "Chouette hulotte",
      "Aigle royal",
      "Salamandre tachetée",
      "Grenouille verte"
    ],
    "answerIndex": 2,
    "explanation": "Salamandre tachetée est le choix qui correspond au repère visuel : amphibien noir marqué de taches jaunes.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:amphibien",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFeuersalamander-salamandra-salamandra.jpg",
    "choiceImageAssets": [
      "nature/chouette-hulotte",
      "nature/aigle-royal",
      "nature/salamandre-tachetee",
      "nature/grenouille-verte"
    ],
    "choiceImageAlts": [
      "Photo de Chouette hulotte",
      "Photo de Aigle royal",
      "Photo de Salamandre tachetée",
      "Photo de Grenouille verte"
    ]
  },
  {
    "id": "nature-animals-011-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : amphibien noir marqué de taches jaunes ?",
    "choices": [
      "Salamandre tachetée",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Salamandre tachetée, nom scientifique Salamandra salamandra.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFeuersalamander-salamandra-salamandra.jpg"
  },
  {
    "id": "nature-animals-012-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Grenouille verte",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Grenouille verte (Pelophylax kl. esculentus) se reconnaît notamment par amphibien des mares au chant sonore.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:amphibien",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGreen_Frog_Rana_clamitans_Facing_Left_3008px.jpg",
    "imageAsset": "nature/grenouille-verte",
    "imageAlt": "Photo de Grenouille verte"
  },
  {
    "id": "nature-animals-012-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Grenouille verte.",
    "choices": [
      "Chouette hulotte",
      "Aigle royal",
      "Salamandre tachetée",
      "Grenouille verte"
    ],
    "answerIndex": 3,
    "explanation": "Grenouille verte est le choix qui correspond au repère visuel : amphibien des mares au chant sonore.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:amphibien",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGreen_Frog_Rana_clamitans_Facing_Left_3008px.jpg",
    "choiceImageAssets": [
      "nature/chouette-hulotte",
      "nature/aigle-royal",
      "nature/salamandre-tachetee",
      "nature/grenouille-verte"
    ],
    "choiceImageAlts": [
      "Photo de Chouette hulotte",
      "Photo de Aigle royal",
      "Photo de Salamandre tachetée",
      "Photo de Grenouille verte"
    ]
  },
  {
    "id": "nature-animals-012-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : amphibien des mares au chant sonore ?",
    "choices": [
      "Grenouille verte",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Grenouille verte, nom scientifique Pelophylax kl. esculentus.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGreen_Frog_Rana_clamitans_Facing_Left_3008px.jpg"
  },
  {
    "id": "nature-animals-013-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Couleuvre à collier",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Couleuvre à collier (Natrix natrix) se reconnaît notamment par serpent non venimeux souvent proche des zones humides.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:reptile",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANatrix_natrix.jpg",
    "imageAsset": "nature/couleuvre-a-collier",
    "imageAlt": "Photo de Couleuvre à collier"
  },
  {
    "id": "nature-animals-013-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Couleuvre à collier.",
    "choices": [
      "Couleuvre à collier",
      "Machaon",
      "Abeille domestique",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 0,
    "explanation": "Couleuvre à collier est le choix qui correspond au repère visuel : serpent non venimeux souvent proche des zones humides.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:reptile",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANatrix_natrix.jpg",
    "choiceImageAssets": [
      "nature/couleuvre-a-collier",
      "nature/machaon",
      "nature/abeille-domestique",
      "nature/bouquetin-des-alpes"
    ],
    "choiceImageAlts": [
      "Photo de Couleuvre à collier",
      "Photo de Machaon",
      "Photo de Abeille domestique",
      "Photo de Bouquetin des Alpes"
    ]
  },
  {
    "id": "nature-animals-013-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : serpent non venimeux souvent proche des zones humides ?",
    "choices": [
      "Couleuvre à collier",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Couleuvre à collier, nom scientifique Natrix natrix.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANatrix_natrix.jpg"
  },
  {
    "id": "nature-animals-014-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Machaon",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Machaon (Papilio machaon) se reconnaît notamment par grand papillon jaune avec des queues aux ailes postérieures.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:insecte",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APapilio_machaon_caterpillar.jpg",
    "imageAsset": "nature/machaon",
    "imageAlt": "Photo de Machaon"
  },
  {
    "id": "nature-animals-014-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Machaon.",
    "choices": [
      "Couleuvre à collier",
      "Machaon",
      "Abeille domestique",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 1,
    "explanation": "Machaon est le choix qui correspond au repère visuel : grand papillon jaune avec des queues aux ailes postérieures.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:insecte",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APapilio_machaon_caterpillar.jpg",
    "choiceImageAssets": [
      "nature/couleuvre-a-collier",
      "nature/machaon",
      "nature/abeille-domestique",
      "nature/bouquetin-des-alpes"
    ],
    "choiceImageAlts": [
      "Photo de Couleuvre à collier",
      "Photo de Machaon",
      "Photo de Abeille domestique",
      "Photo de Bouquetin des Alpes"
    ]
  },
  {
    "id": "nature-animals-014-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : grand papillon jaune avec des queues aux ailes postérieures ?",
    "choices": [
      "Machaon",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Machaon, nom scientifique Papilio machaon.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APapilio_machaon_caterpillar.jpg"
  },
  {
    "id": "nature-animals-015-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Abeille domestique",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "Abeille domestique (Apis mellifera) se reconnaît notamment par insecte pollinisateur élevé en ruches.",
    "tags": [
      "nature",
      "animaux",
      "image",
      "identification-espece",
      "famille:insecte",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEuropean_honey_bee_extracts_nectar.jpg",
    "imageAsset": "nature/abeille-domestique",
    "imageAlt": "Photo de Abeille domestique"
  },
  {
    "id": "nature-animals-015-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Abeille domestique.",
    "choices": [
      "Couleuvre à collier",
      "Machaon",
      "Abeille domestique",
      "Bouquetin des Alpes"
    ],
    "answerIndex": 2,
    "explanation": "Abeille domestique est le choix qui correspond au repère visuel : insecte pollinisateur élevé en ruches.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "famille:insecte",
      "image-choice",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEuropean_honey_bee_extracts_nectar.jpg",
    "choiceImageAssets": [
      "nature/couleuvre-a-collier",
      "nature/machaon",
      "nature/abeille-domestique",
      "nature/bouquetin-des-alpes"
    ],
    "choiceImageAlts": [
      "Photo de Couleuvre à collier",
      "Photo de Machaon",
      "Photo de Abeille domestique",
      "Photo de Bouquetin des Alpes"
    ]
  },
  {
    "id": "nature-animals-015-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : insecte pollinisateur élevé en ruches ?",
    "choices": [
      "Abeille domestique",
      "Renard roux",
      "Loup gris",
      "Lynx boréal"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Abeille domestique, nom scientifique Apis mellifera.",
    "tags": [
      "nature",
      "animaux",
      "identification-espece",
      "subtheme:nature:animals"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEuropean_honey_bee_extracts_nectar.jpg"
  },
  {
    "id": "nature-plants-016-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 0,
    "explanation": "Chêne pédonculé (Quercus robur) se reconnaît notamment par grand arbre européen portant des glands sur pédoncule.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:arbre",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALangaa_egeskov_rimfrost.jpg",
    "imageAsset": "nature/chene-pedoncule",
    "imageAlt": "Photo de Chêne pédonculé"
  },
  {
    "id": "nature-plants-016-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Chêne pédonculé.",
    "choices": [
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 0,
    "explanation": "Chêne pédonculé est le choix qui correspond au repère visuel : grand arbre européen portant des glands sur pédoncule.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:arbre",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALangaa_egeskov_rimfrost.jpg",
    "choiceImageAssets": [
      "nature/chene-pedoncule",
      "nature/hetre-commun",
      "nature/erable-sycomore",
      "nature/bouleau-verruqueux"
    ],
    "choiceImageAlts": [
      "Photo de Chêne pédonculé",
      "Photo de Hêtre commun",
      "Photo de Érable sycomore",
      "Photo de Bouleau verruqueux"
    ]
  },
  {
    "id": "nature-plants-016-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : grand arbre européen portant des glands sur pédoncule ?",
    "choices": [
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Chêne pédonculé, nom scientifique Quercus robur.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALangaa_egeskov_rimfrost.jpg"
  },
  {
    "id": "nature-plants-017-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Hêtre commun",
      "Chêne pédonculé",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 0,
    "explanation": "Hêtre commun (Fagus sylvatica) se reconnaît notamment par arbre à écorce grise lisse et feuilles ovales.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:arbre",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACopper_Beech_Fagus_sylvatica_f._purpurea_Autumn_Leaves_Closeup_3008px.jpg",
    "imageAsset": "nature/hetre-commun",
    "imageAlt": "Photo de Hêtre commun"
  },
  {
    "id": "nature-plants-017-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Hêtre commun.",
    "choices": [
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 1,
    "explanation": "Hêtre commun est le choix qui correspond au repère visuel : arbre à écorce grise lisse et feuilles ovales.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:arbre",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACopper_Beech_Fagus_sylvatica_f._purpurea_Autumn_Leaves_Closeup_3008px.jpg",
    "choiceImageAssets": [
      "nature/chene-pedoncule",
      "nature/hetre-commun",
      "nature/erable-sycomore",
      "nature/bouleau-verruqueux"
    ],
    "choiceImageAlts": [
      "Photo de Chêne pédonculé",
      "Photo de Hêtre commun",
      "Photo de Érable sycomore",
      "Photo de Bouleau verruqueux"
    ]
  },
  {
    "id": "nature-plants-017-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : arbre à écorce grise lisse et feuilles ovales ?",
    "choices": [
      "Hêtre commun",
      "Chêne pédonculé",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Hêtre commun, nom scientifique Fagus sylvatica.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACopper_Beech_Fagus_sylvatica_f._purpurea_Autumn_Leaves_Closeup_3008px.jpg"
  },
  {
    "id": "nature-plants-018-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Érable sycomore",
      "Chêne pédonculé",
      "Hêtre commun",
      "Bouleau verruqueux"
    ],
    "answerIndex": 0,
    "explanation": "Érable sycomore (Acer pseudoplatanus) se reconnaît notamment par feuilles palmées et samares en hélicoptères.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:arbre",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AErable-sycomore_(acer_pseudoplatanus).jpg",
    "imageAsset": "nature/erable-sycomore",
    "imageAlt": "Photo de Érable sycomore"
  },
  {
    "id": "nature-plants-018-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Érable sycomore.",
    "choices": [
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 2,
    "explanation": "Érable sycomore est le choix qui correspond au repère visuel : feuilles palmées et samares en hélicoptères.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:arbre",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AErable-sycomore_(acer_pseudoplatanus).jpg",
    "choiceImageAssets": [
      "nature/chene-pedoncule",
      "nature/hetre-commun",
      "nature/erable-sycomore",
      "nature/bouleau-verruqueux"
    ],
    "choiceImageAlts": [
      "Photo de Chêne pédonculé",
      "Photo de Hêtre commun",
      "Photo de Érable sycomore",
      "Photo de Bouleau verruqueux"
    ]
  },
  {
    "id": "nature-plants-018-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : feuilles palmées et samares en hélicoptères ?",
    "choices": [
      "Érable sycomore",
      "Chêne pédonculé",
      "Hêtre commun",
      "Bouleau verruqueux"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Érable sycomore, nom scientifique Acer pseudoplatanus.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AErable-sycomore_(acer_pseudoplatanus).jpg"
  },
  {
    "id": "nature-plants-019-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Bouleau verruqueux",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Bouleau verruqueux (Betula pendula) se reconnaît notamment par tronc blanc et rameaux souples pendants.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:arbre",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AIllustration_Betula_pendula0.jpg",
    "imageAsset": "nature/bouleau-verruqueux",
    "imageAlt": "Photo de Bouleau verruqueux"
  },
  {
    "id": "nature-plants-019-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Bouleau verruqueux.",
    "choices": [
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore",
      "Bouleau verruqueux"
    ],
    "answerIndex": 3,
    "explanation": "Bouleau verruqueux est le choix qui correspond au repère visuel : tronc blanc et rameaux souples pendants.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:arbre",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AIllustration_Betula_pendula0.jpg",
    "choiceImageAssets": [
      "nature/chene-pedoncule",
      "nature/hetre-commun",
      "nature/erable-sycomore",
      "nature/bouleau-verruqueux"
    ],
    "choiceImageAlts": [
      "Photo de Chêne pédonculé",
      "Photo de Hêtre commun",
      "Photo de Érable sycomore",
      "Photo de Bouleau verruqueux"
    ]
  },
  {
    "id": "nature-plants-019-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : tronc blanc et rameaux souples pendants ?",
    "choices": [
      "Bouleau verruqueux",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Bouleau verruqueux, nom scientifique Betula pendula.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AIllustration_Betula_pendula0.jpg"
  },
  {
    "id": "nature-plants-020-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Pin sylvestre",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Pin sylvestre (Pinus sylvestris) se reconnaît notamment par conifère à écorce orangée et aiguilles par deux.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:conifere",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APinus_sylvestris_penjing_JB.jpg",
    "imageAsset": "nature/pin-sylvestre",
    "imageAlt": "Photo de Pin sylvestre"
  },
  {
    "id": "nature-plants-020-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Pin sylvestre.",
    "choices": [
      "Pin sylvestre",
      "If commun",
      "Lavande vraie",
      "Coquelicot"
    ],
    "answerIndex": 0,
    "explanation": "Pin sylvestre est le choix qui correspond au repère visuel : conifère à écorce orangée et aiguilles par deux.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:conifere",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APinus_sylvestris_penjing_JB.jpg",
    "choiceImageAssets": [
      "nature/pin-sylvestre",
      "nature/if-commun",
      "nature/lavande-vraie",
      "nature/coquelicot"
    ],
    "choiceImageAlts": [
      "Photo de Pin sylvestre",
      "Photo de If commun",
      "Photo de Lavande vraie",
      "Photo de Coquelicot"
    ]
  },
  {
    "id": "nature-plants-020-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : conifère à écorce orangée et aiguilles par deux ?",
    "choices": [
      "Pin sylvestre",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Pin sylvestre, nom scientifique Pinus sylvestris.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APinus_sylvestris_penjing_JB.jpg"
  },
  {
    "id": "nature-plants-021-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "If commun",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "If commun (Taxus baccata) se reconnaît notamment par conifère sombre aux arilles rouges toxiques hors pulpe.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:conifere",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaxus_baccata_MHNT.jpg",
    "imageAsset": "nature/if-commun",
    "imageAlt": "Photo de If commun"
  },
  {
    "id": "nature-plants-021-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de If commun.",
    "choices": [
      "Pin sylvestre",
      "If commun",
      "Lavande vraie",
      "Coquelicot"
    ],
    "answerIndex": 1,
    "explanation": "If commun est le choix qui correspond au repère visuel : conifère sombre aux arilles rouges toxiques hors pulpe.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:conifere",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaxus_baccata_MHNT.jpg",
    "choiceImageAssets": [
      "nature/pin-sylvestre",
      "nature/if-commun",
      "nature/lavande-vraie",
      "nature/coquelicot"
    ],
    "choiceImageAlts": [
      "Photo de Pin sylvestre",
      "Photo de If commun",
      "Photo de Lavande vraie",
      "Photo de Coquelicot"
    ]
  },
  {
    "id": "nature-plants-021-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : conifère sombre aux arilles rouges toxiques hors pulpe ?",
    "choices": [
      "If commun",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est If commun, nom scientifique Taxus baccata.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaxus_baccata_MHNT.jpg"
  },
  {
    "id": "nature-plants-022-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Lavande vraie",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Lavande vraie (Lavandula angustifolia) se reconnaît notamment par plante aromatique violette typique des milieux méditerranéens.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:fleur",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEnglish_Lavender_(Portelli_sculpture).jpg",
    "imageAsset": "nature/lavande-vraie",
    "imageAlt": "Photo de Lavande vraie"
  },
  {
    "id": "nature-plants-022-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Lavande vraie.",
    "choices": [
      "Pin sylvestre",
      "If commun",
      "Lavande vraie",
      "Coquelicot"
    ],
    "answerIndex": 2,
    "explanation": "Lavande vraie est le choix qui correspond au repère visuel : plante aromatique violette typique des milieux méditerranéens.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:fleur",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEnglish_Lavender_(Portelli_sculpture).jpg",
    "choiceImageAssets": [
      "nature/pin-sylvestre",
      "nature/if-commun",
      "nature/lavande-vraie",
      "nature/coquelicot"
    ],
    "choiceImageAlts": [
      "Photo de Pin sylvestre",
      "Photo de If commun",
      "Photo de Lavande vraie",
      "Photo de Coquelicot"
    ]
  },
  {
    "id": "nature-plants-022-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : plante aromatique violette typique des milieux méditerranéens ?",
    "choices": [
      "Lavande vraie",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Lavande vraie, nom scientifique Lavandula angustifolia.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEnglish_Lavender_(Portelli_sculpture).jpg"
  },
  {
    "id": "nature-plants-023-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Coquelicot",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Coquelicot (Papaver rhoeas) se reconnaît notamment par fleur rouge fréquente dans les champs et bords de route.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:fleur",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APapaver_rhoeas_LC0050.jpg",
    "imageAsset": "nature/coquelicot",
    "imageAlt": "Photo de Coquelicot"
  },
  {
    "id": "nature-plants-023-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Coquelicot.",
    "choices": [
      "Pin sylvestre",
      "If commun",
      "Lavande vraie",
      "Coquelicot"
    ],
    "answerIndex": 3,
    "explanation": "Coquelicot est le choix qui correspond au repère visuel : fleur rouge fréquente dans les champs et bords de route.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:fleur",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APapaver_rhoeas_LC0050.jpg",
    "choiceImageAssets": [
      "nature/pin-sylvestre",
      "nature/if-commun",
      "nature/lavande-vraie",
      "nature/coquelicot"
    ],
    "choiceImageAlts": [
      "Photo de Pin sylvestre",
      "Photo de If commun",
      "Photo de Lavande vraie",
      "Photo de Coquelicot"
    ]
  },
  {
    "id": "nature-plants-023-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : fleur rouge fréquente dans les champs et bords de route ?",
    "choices": [
      "Coquelicot",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Coquelicot, nom scientifique Papaver rhoeas.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APapaver_rhoeas_LC0050.jpg"
  },
  {
    "id": "nature-plants-024-identify",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Tournesol",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Tournesol (Helianthus annuus) se reconnaît notamment par grande fleur jaune cultivée pour ses graines huileuses.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:fleur",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASunflower_l.jpg",
    "imageAsset": "nature/tournesol",
    "imageAlt": "Photo de Tournesol"
  },
  {
    "id": "nature-plants-024-image-choice",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Tournesol.",
    "choices": [
      "Tournesol",
      "Iris des marais",
      "Orchidée abeille",
      "Églantier"
    ],
    "answerIndex": 0,
    "explanation": "Tournesol est le choix qui correspond au repère visuel : grande fleur jaune cultivée pour ses graines huileuses.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:fleur",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASunflower_l.jpg",
    "choiceImageAssets": [
      "nature/tournesol",
      "nature/iris-des-marais",
      "nature/orchidee-abeille",
      "nature/eglantier"
    ],
    "choiceImageAlts": [
      "Photo de Tournesol",
      "Photo de Iris des marais",
      "Photo de Orchidée abeille",
      "Photo de Églantier"
    ]
  },
  {
    "id": "nature-plants-024-clue",
    "topicId": "nature",
    "difficulty": 1,
    "prompt": "Quelle espèce correspond à cet indice : grande fleur jaune cultivée pour ses graines huileuses ?",
    "choices": [
      "Tournesol",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Tournesol, nom scientifique Helianthus annuus.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASunflower_l.jpg"
  },
  {
    "id": "nature-plants-025-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Iris des marais",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Iris des marais (Iris pseudacorus) se reconnaît notamment par iris jaune des zones humides.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:fleur",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AYellow_Iris_Iris_pseudacorus_Flower_1469px.jpg",
    "imageAsset": "nature/iris-des-marais",
    "imageAlt": "Photo de Iris des marais"
  },
  {
    "id": "nature-plants-025-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Iris des marais.",
    "choices": [
      "Tournesol",
      "Iris des marais",
      "Orchidée abeille",
      "Églantier"
    ],
    "answerIndex": 1,
    "explanation": "Iris des marais est le choix qui correspond au repère visuel : iris jaune des zones humides.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:fleur",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AYellow_Iris_Iris_pseudacorus_Flower_1469px.jpg",
    "choiceImageAssets": [
      "nature/tournesol",
      "nature/iris-des-marais",
      "nature/orchidee-abeille",
      "nature/eglantier"
    ],
    "choiceImageAlts": [
      "Photo de Tournesol",
      "Photo de Iris des marais",
      "Photo de Orchidée abeille",
      "Photo de Églantier"
    ]
  },
  {
    "id": "nature-plants-025-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : iris jaune des zones humides ?",
    "choices": [
      "Iris des marais",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Iris des marais, nom scientifique Iris pseudacorus.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AYellow_Iris_Iris_pseudacorus_Flower_1469px.jpg"
  },
  {
    "id": "nature-plants-026-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Orchidée abeille",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Orchidée abeille (Ophrys apifera) se reconnaît notamment par orchidée dont la fleur imite un insecte pollinisateur.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:fleur",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AOphrys_apifera_(pale_form).jpg",
    "imageAsset": "nature/orchidee-abeille",
    "imageAlt": "Photo de Orchidée abeille"
  },
  {
    "id": "nature-plants-026-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Orchidée abeille.",
    "choices": [
      "Tournesol",
      "Iris des marais",
      "Orchidée abeille",
      "Églantier"
    ],
    "answerIndex": 2,
    "explanation": "Orchidée abeille est le choix qui correspond au repère visuel : orchidée dont la fleur imite un insecte pollinisateur.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:fleur",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AOphrys_apifera_(pale_form).jpg",
    "choiceImageAssets": [
      "nature/tournesol",
      "nature/iris-des-marais",
      "nature/orchidee-abeille",
      "nature/eglantier"
    ],
    "choiceImageAlts": [
      "Photo de Tournesol",
      "Photo de Iris des marais",
      "Photo de Orchidée abeille",
      "Photo de Églantier"
    ]
  },
  {
    "id": "nature-plants-026-clue",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce correspond à cet indice : orchidée dont la fleur imite un insecte pollinisateur ?",
    "choices": [
      "Orchidée abeille",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Orchidée abeille, nom scientifique Ophrys apifera.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AOphrys_apifera_(pale_form).jpg"
  },
  {
    "id": "nature-plants-027-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Églantier",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Églantier (Rosa canina) se reconnaît notamment par rosier sauvage produisant des cynorrhodons.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:arbuste",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHunds-Rose_Rosa_canina_Nationalpark_Donau-Auen_Lobau_Mai_2016_03.jpg",
    "imageAsset": "nature/eglantier",
    "imageAlt": "Photo de Églantier"
  },
  {
    "id": "nature-plants-027-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Églantier.",
    "choices": [
      "Tournesol",
      "Iris des marais",
      "Orchidée abeille",
      "Églantier"
    ],
    "answerIndex": 3,
    "explanation": "Églantier est le choix qui correspond au repère visuel : rosier sauvage produisant des cynorrhodons.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:arbuste",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHunds-Rose_Rosa_canina_Nationalpark_Donau-Auen_Lobau_Mai_2016_03.jpg",
    "choiceImageAssets": [
      "nature/tournesol",
      "nature/iris-des-marais",
      "nature/orchidee-abeille",
      "nature/eglantier"
    ],
    "choiceImageAlts": [
      "Photo de Tournesol",
      "Photo de Iris des marais",
      "Photo de Orchidée abeille",
      "Photo de Églantier"
    ]
  },
  {
    "id": "nature-plants-027-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : rosier sauvage produisant des cynorrhodons ?",
    "choices": [
      "Églantier",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Églantier, nom scientifique Rosa canina.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHunds-Rose_Rosa_canina_Nationalpark_Donau-Auen_Lobau_Mai_2016_03.jpg"
  },
  {
    "id": "nature-plants-028-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Aubépine monogyne",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Aubépine monogyne (Crataegus monogyna) se reconnaît notamment par arbuste épineux à fleurs blanches et petits fruits rouges.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:arbuste",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACrataegus_monogyna_2.jpg",
    "imageAsset": "nature/aubepine-monogyne",
    "imageAlt": "Photo de Aubépine monogyne"
  },
  {
    "id": "nature-plants-028-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Aubépine monogyne.",
    "choices": [
      "Aubépine monogyne",
      "Sureau noir",
      "Fougère aigle",
      "Sphaigne"
    ],
    "answerIndex": 0,
    "explanation": "Aubépine monogyne est le choix qui correspond au repère visuel : arbuste épineux à fleurs blanches et petits fruits rouges.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:arbuste",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACrataegus_monogyna_2.jpg",
    "choiceImageAssets": [
      "nature/aubepine-monogyne",
      "nature/sureau-noir",
      "nature/fougere-aigle",
      "nature/sphaigne"
    ],
    "choiceImageAlts": [
      "Photo de Aubépine monogyne",
      "Photo de Sureau noir",
      "Photo de Fougère aigle",
      "Photo de Sphaigne"
    ]
  },
  {
    "id": "nature-plants-028-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : arbuste épineux à fleurs blanches et petits fruits rouges ?",
    "choices": [
      "Aubépine monogyne",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Aubépine monogyne, nom scientifique Crataegus monogyna.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACrataegus_monogyna_2.jpg"
  },
  {
    "id": "nature-plants-029-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Sureau noir",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Sureau noir (Sambucus nigra) se reconnaît notamment par arbuste à ombelles blanches puis baies noires.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:arbuste",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASambucus_nigra_004.jpg",
    "imageAsset": "nature/sureau-noir",
    "imageAlt": "Photo de Sureau noir"
  },
  {
    "id": "nature-plants-029-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Sureau noir.",
    "choices": [
      "Aubépine monogyne",
      "Sureau noir",
      "Fougère aigle",
      "Sphaigne"
    ],
    "answerIndex": 1,
    "explanation": "Sureau noir est le choix qui correspond au repère visuel : arbuste à ombelles blanches puis baies noires.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:arbuste",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASambucus_nigra_004.jpg",
    "choiceImageAssets": [
      "nature/aubepine-monogyne",
      "nature/sureau-noir",
      "nature/fougere-aigle",
      "nature/sphaigne"
    ],
    "choiceImageAlts": [
      "Photo de Aubépine monogyne",
      "Photo de Sureau noir",
      "Photo de Fougère aigle",
      "Photo de Sphaigne"
    ]
  },
  {
    "id": "nature-plants-029-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : arbuste à ombelles blanches puis baies noires ?",
    "choices": [
      "Sureau noir",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Sureau noir, nom scientifique Sambucus nigra.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASambucus_nigra_004.jpg"
  },
  {
    "id": "nature-plants-030-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Fougère aigle",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Fougère aigle (Pteridium aquilinum) se reconnaît notamment par grande fougère formant de vastes tapis en sous-bois.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:fougere",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A%D0%9F%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D1%8F%D1%89%D0%B8%D0%B9_%D0%BF%D1%83%D1%87%D0%BE%D0%BA_Pteridium_aquilinum.JPG",
    "imageAsset": "nature/fougere-aigle",
    "imageAlt": "Photo de Fougère aigle"
  },
  {
    "id": "nature-plants-030-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Fougère aigle.",
    "choices": [
      "Aubépine monogyne",
      "Sureau noir",
      "Fougère aigle",
      "Sphaigne"
    ],
    "answerIndex": 2,
    "explanation": "Fougère aigle est le choix qui correspond au repère visuel : grande fougère formant de vastes tapis en sous-bois.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:fougere",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A%D0%9F%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D1%8F%D1%89%D0%B8%D0%B9_%D0%BF%D1%83%D1%87%D0%BE%D0%BA_Pteridium_aquilinum.JPG",
    "choiceImageAssets": [
      "nature/aubepine-monogyne",
      "nature/sureau-noir",
      "nature/fougere-aigle",
      "nature/sphaigne"
    ],
    "choiceImageAlts": [
      "Photo de Aubépine monogyne",
      "Photo de Sureau noir",
      "Photo de Fougère aigle",
      "Photo de Sphaigne"
    ]
  },
  {
    "id": "nature-plants-030-clue",
    "topicId": "nature",
    "difficulty": 2,
    "prompt": "Quelle espèce correspond à cet indice : grande fougère formant de vastes tapis en sous-bois ?",
    "choices": [
      "Fougère aigle",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Fougère aigle, nom scientifique Pteridium aquilinum.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A%D0%9F%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D1%8F%D1%89%D0%B8%D0%B9_%D0%BF%D1%83%D1%87%D0%BE%D0%BA_Pteridium_aquilinum.JPG"
  },
  {
    "id": "nature-plants-031-identify",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce est visible sur cette photo ?",
    "choices": [
      "Sphaigne",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "Sphaigne (Sphagnum) se reconnaît notamment par mousse des tourbières capable de retenir beaucoup d’eau.",
    "tags": [
      "nature",
      "botanique",
      "image",
      "identification-espece",
      "famille:mousse",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASphagnumFallax.jpg",
    "imageAsset": "nature/sphaigne",
    "imageAlt": "Photo de Sphaigne"
  },
  {
    "id": "nature-plants-031-image-choice",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Sphaigne.",
    "choices": [
      "Aubépine monogyne",
      "Sureau noir",
      "Fougère aigle",
      "Sphaigne"
    ],
    "answerIndex": 3,
    "explanation": "Sphaigne est le choix qui correspond au repère visuel : mousse des tourbières capable de retenir beaucoup d’eau.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "famille:mousse",
      "image-choice",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASphagnumFallax.jpg",
    "choiceImageAssets": [
      "nature/aubepine-monogyne",
      "nature/sureau-noir",
      "nature/fougere-aigle",
      "nature/sphaigne"
    ],
    "choiceImageAlts": [
      "Photo de Aubépine monogyne",
      "Photo de Sureau noir",
      "Photo de Fougère aigle",
      "Photo de Sphaigne"
    ]
  },
  {
    "id": "nature-plants-031-clue",
    "topicId": "nature",
    "difficulty": 3,
    "prompt": "Quelle espèce correspond à cet indice : mousse des tourbières capable de retenir beaucoup d’eau ?",
    "choices": [
      "Sphaigne",
      "Chêne pédonculé",
      "Hêtre commun",
      "Érable sycomore"
    ],
    "answerIndex": 0,
    "explanation": "La réponse attendue est Sphaigne, nom scientifique Sphagnum.",
    "tags": [
      "nature",
      "botanique",
      "identification-espece",
      "subtheme:nature:plants"
    ],
    "sourceLabel": "Banque Kizz nature - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASphagnumFallax.jpg"
  }
];
