import { QuestionSeed } from '../domain';

export const landmarkVisualQuestions: QuestionSeed[] = [
  {
    "id": "landmark-001-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Taj Mahal",
      "Angkor Vat",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Le Taj Mahal se reconnaît notamment à son mausolée de marbre blanc.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaj_Mahal_in_March_2004.jpg",
    "imageAsset": "landmarks/taj-mahal",
    "imageAlt": "Photo de Taj Mahal"
  },
  {
    "id": "landmark-001-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Taj Mahal ?",
    "choices": [
      "Agra",
      "Siem Reap",
      "Wadi Musa",
      "Cusco"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal est rattaché ici à Agra ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaj_Mahal_in_March_2004.jpg"
  },
  {
    "id": "landmark-001-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Taj Mahal ?",
    "choices": [
      "Inde",
      "Cambodge",
      "Jordanie",
      "Pérou"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal se trouve en Inde ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaj_Mahal_in_March_2004.jpg"
  },
  {
    "id": "landmark-001-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Taj Mahal ?",
    "choices": [
      "moghol",
      "khmer",
      "nabateen",
      "inca"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal est classé ici dans le repère moghol ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaj_Mahal_in_March_2004.jpg"
  },
  {
    "id": "landmark-001-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Taj Mahal.",
    "choices": [
      "Taj Mahal",
      "Angkor Vat",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal correspond au repère visuel : mausolée de marbre blanc.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ATaj_Mahal_in_March_2004.jpg",
    "choiceImageAssets": [
      "landmarks/taj-mahal",
      "landmarks/angkor-vat",
      "landmarks/petra",
      "landmarks/machu-picchu"
    ],
    "choiceImageAlts": [
      "Photo de Taj Mahal",
      "Photo de Angkor Vat",
      "Photo de Petra",
      "Photo de Machu Picchu"
    ]
  },
  {
    "id": "landmark-002-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Angkor Vat",
      "Taj Mahal",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Angkor Vat se reconnaît notamment à son temple monumental khmer.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACambodgeAngkorNaga.JPG",
    "imageAsset": "landmarks/angkor-vat",
    "imageAlt": "Photo de Angkor Vat"
  },
  {
    "id": "landmark-002-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Angkor Vat ?",
    "choices": [
      "Siem Reap",
      "Agra",
      "Wadi Musa",
      "Cusco"
    ],
    "answerIndex": 0,
    "explanation": "Angkor Vat est rattaché ici à Siem Reap ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACambodgeAngkorNaga.JPG"
  },
  {
    "id": "landmark-002-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Angkor Vat ?",
    "choices": [
      "Cambodge",
      "Inde",
      "Jordanie",
      "Pérou"
    ],
    "answerIndex": 0,
    "explanation": "Angkor Vat se trouve au Cambodge ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACambodgeAngkorNaga.JPG"
  },
  {
    "id": "landmark-002-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Angkor Vat ?",
    "choices": [
      "khmer",
      "moghol",
      "nabateen",
      "inca"
    ],
    "answerIndex": 0,
    "explanation": "Angkor Vat est classé ici dans le repère khmer ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACambodgeAngkorNaga.JPG"
  },
  {
    "id": "landmark-003-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Petra",
      "Taj Mahal",
      "Angkor Vat",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Petra se reconnaît notamment à ses façades taillées dans la roche.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AWadi_Musa%2C_Jordan.jpg",
    "imageAsset": "landmarks/petra",
    "imageAlt": "Photo de Petra"
  },
  {
    "id": "landmark-003-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Petra ?",
    "choices": [
      "Wadi Musa",
      "Agra",
      "Siem Reap",
      "Cusco"
    ],
    "answerIndex": 0,
    "explanation": "Petra est rattaché ici à Wadi Musa ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AWadi_Musa%2C_Jordan.jpg"
  },
  {
    "id": "landmark-003-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Petra ?",
    "choices": [
      "Jordanie",
      "Inde",
      "Cambodge",
      "Pérou"
    ],
    "answerIndex": 0,
    "explanation": "Petra se trouve en Jordanie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AWadi_Musa%2C_Jordan.jpg"
  },
  {
    "id": "landmark-003-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Petra ?",
    "choices": [
      "nabateen",
      "moghol",
      "khmer",
      "inca"
    ],
    "answerIndex": 0,
    "explanation": "Petra est classé ici dans le repère nabateen ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AWadi_Musa%2C_Jordan.jpg"
  },
  {
    "id": "landmark-003-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Petra.",
    "choices": [
      "Taj Mahal",
      "Angkor Vat",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 2,
    "explanation": "Petra correspond au repère visuel : façades taillées dans la roche.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AWadi_Musa%2C_Jordan.jpg",
    "choiceImageAssets": [
      "landmarks/taj-mahal",
      "landmarks/angkor-vat",
      "landmarks/petra",
      "landmarks/machu-picchu"
    ],
    "choiceImageAlts": [
      "Photo de Taj Mahal",
      "Photo de Angkor Vat",
      "Photo de Petra",
      "Photo de Machu Picchu"
    ]
  },
  {
    "id": "landmark-004-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Machu Picchu",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Machu Picchu se reconnaît notamment à sa cité andine en terrasses.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMachu_picchu_grande.jpg",
    "imageAsset": "landmarks/machu-picchu",
    "imageAlt": "Photo de Machu Picchu"
  },
  {
    "id": "landmark-004-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Machu Picchu ?",
    "choices": [
      "Cusco",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Machu Picchu est rattaché ici à Cusco ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMachu_picchu_grande.jpg"
  },
  {
    "id": "landmark-004-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Machu Picchu ?",
    "choices": [
      "Pérou",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Machu Picchu se trouve en Pérou ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMachu_picchu_grande.jpg"
  },
  {
    "id": "landmark-004-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Machu Picchu ?",
    "choices": [
      "inca",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Machu Picchu est classé ici dans le repère inca ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMachu_picchu_grande.jpg"
  },
  {
    "id": "landmark-005-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Chichen Itza",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza se reconnaît notamment à sa pyramide à degrés mésoaméricaine.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChichen_Itza-El_Castillo.jpg",
    "imageAsset": "landmarks/chichen-itza",
    "imageAlt": "Photo de Chichen Itza"
  },
  {
    "id": "landmark-005-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Chichen Itza ?",
    "choices": [
      "Yucatán",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza est rattaché ici à Yucatán ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChichen_Itza-El_Castillo.jpg"
  },
  {
    "id": "landmark-005-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Chichen Itza ?",
    "choices": [
      "Mexique",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza se trouve en Mexique ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChichen_Itza-El_Castillo.jpg"
  },
  {
    "id": "landmark-005-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Chichen Itza ?",
    "choices": [
      "maya",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza est classé ici dans le repère maya ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChichen_Itza-El_Castillo.jpg"
  },
  {
    "id": "landmark-005-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Chichen Itza.",
    "choices": [
      "Chichen Itza",
      "Christ Rédempteur",
      "Opéra de Sydney",
      "Burj Khalifa"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza correspond au repère visuel : pyramide a degrés mésoaméricaine.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChichen_Itza-El_Castillo.jpg",
    "choiceImageAssets": [
      "landmarks/chichen-itza",
      "landmarks/christ-redempteur",
      "landmarks/opera-de-sydney",
      "landmarks/burj-khalifa"
    ],
    "choiceImageAlts": [
      "Photo de Chichen Itza",
      "Photo de Christ Rédempteur",
      "Photo de Opéra de Sydney",
      "Photo de Burj Khalifa"
    ]
  },
  {
    "id": "landmark-006-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Christ Rédempteur",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Christ Rédempteur se reconnaît notamment à sa statue dominant la baie de Rio.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AObama_family_in_mist_in_Rio_de_Janeiro.jpg",
    "imageAsset": "landmarks/christ-redempteur",
    "imageAlt": "Photo de Christ Rédempteur"
  },
  {
    "id": "landmark-006-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Christ Rédempteur ?",
    "choices": [
      "Rio de Janeiro",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Christ Rédempteur est rattaché ici à Rio de Janeiro ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AObama_family_in_mist_in_Rio_de_Janeiro.jpg"
  },
  {
    "id": "landmark-006-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Christ Rédempteur ?",
    "choices": [
      "Bresil",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Christ Rédempteur se trouve en Bresil ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AObama_family_in_mist_in_Rio_de_Janeiro.jpg"
  },
  {
    "id": "landmark-006-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Christ Rédempteur ?",
    "choices": [
      "art deco",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Christ Rédempteur est classé ici dans le repère art deco ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AObama_family_in_mist_in_Rio_de_Janeiro.jpg"
  },
  {
    "id": "landmark-007-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Opéra de Sydney",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "L’Opéra de Sydney se reconnaît notamment à ses toitures en coques blanches.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASydney_Harbour_Bridge_night.jpg",
    "imageAsset": "landmarks/opera-de-sydney",
    "imageAlt": "Photo de Opéra de Sydney"
  },
  {
    "id": "landmark-007-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : toitures en coques blanches ?",
    "choices": [
      "Sydney",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Opéra de Sydney est rattaché ici à Sydney ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASydney_Harbour_Bridge_night.jpg"
  },
  {
    "id": "landmark-007-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Opéra de Sydney ?",
    "choices": [
      "Australie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Opéra de Sydney se trouve en Australie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASydney_Harbour_Bridge_night.jpg"
  },
  {
    "id": "landmark-007-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Opéra de Sydney ?",
    "choices": [
      "expressionniste",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Opéra de Sydney est classé ici dans le repère expressionniste ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASydney_Harbour_Bridge_night.jpg"
  },
  {
    "id": "landmark-007-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Opéra de Sydney.",
    "choices": [
      "Chichen Itza",
      "Christ Rédempteur",
      "Opéra de Sydney",
      "Burj Khalifa"
    ],
    "answerIndex": 2,
    "explanation": "Opéra de Sydney correspond au repère visuel : toitures en coques blanches.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASydney_Harbour_Bridge_night.jpg",
    "choiceImageAssets": [
      "landmarks/chichen-itza",
      "landmarks/christ-redempteur",
      "landmarks/opera-de-sydney",
      "landmarks/burj-khalifa"
    ],
    "choiceImageAlts": [
      "Photo de Chichen Itza",
      "Photo de Christ Rédempteur",
      "Photo de Opéra de Sydney",
      "Photo de Burj Khalifa"
    ]
  },
  {
    "id": "landmark-008-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Burj Khalifa",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa se reconnaît notamment à sa silhouette de très haute tour.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABurj_dubai_3.11.08.jpg",
    "imageAsset": "landmarks/burj-khalifa",
    "imageAlt": "Photo de Burj Khalifa"
  },
  {
    "id": "landmark-008-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Burj Khalifa ?",
    "choices": [
      "Dubaï",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa est rattaché ici à Dubaï ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABurj_dubai_3.11.08.jpg"
  },
  {
    "id": "landmark-008-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Burj Khalifa ?",
    "choices": [
      "Émirats arabes unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa se trouve en Émirats arabes unis ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABurj_dubai_3.11.08.jpg"
  },
  {
    "id": "landmark-008-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Burj Khalifa ?",
    "choices": [
      "gratte-ciel contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa est classé ici dans le repère gratte-ciel contemporain ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABurj_dubai_3.11.08.jpg"
  },
  {
    "id": "landmark-009-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Empire State Building",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "L’Empire State Building se reconnaît notamment à son profil de gratte-ciel new-yorkais des années 1930.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEdificio_Fuller_(Flatiron)_en_2010_desde_el_Empire_State_crop.jpg",
    "imageAsset": "landmarks/empire-state-building",
    "imageAlt": "Photo de Empire State Building"
  },
  {
    "id": "landmark-009-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Empire State Building ?",
    "choices": [
      "New York",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building est rattaché ici à New York ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEdificio_Fuller_(Flatiron)_en_2010_desde_el_Empire_State_crop.jpg"
  },
  {
    "id": "landmark-009-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Empire State Building ?",
    "choices": [
      "États-Unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building se trouve aux États-Unis ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEdificio_Fuller_(Flatiron)_en_2010_desde_el_Empire_State_crop.jpg"
  },
  {
    "id": "landmark-009-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Empire State Building ?",
    "choices": [
      "art deco",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building est classé ici dans le repère art deco ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEdificio_Fuller_(Flatiron)_en_2010_desde_el_Empire_State_crop.jpg"
  },
  {
    "id": "landmark-009-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Empire State Building.",
    "choices": [
      "Empire State Building",
      "Golden Gate Bridge",
      "Tower Bridge",
      "Big Ben"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building correspond au repère visuel : gratte-ciel new-yorkais des années 1930.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AEdificio_Fuller_(Flatiron)_en_2010_desde_el_Empire_State_crop.jpg",
    "choiceImageAssets": [
      "landmarks/empire-state-building",
      "landmarks/golden-gate-bridge",
      "landmarks/tower-bridge",
      "landmarks/big-ben"
    ],
    "choiceImageAlts": [
      "Photo de Empire State Building",
      "Photo de Golden Gate Bridge",
      "Photo de Tower Bridge",
      "Photo de Big Ben"
    ]
  },
  {
    "id": "landmark-010-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Golden Gate Bridge",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Golden Gate Bridge se reconnaît notamment à son pont orange sur le détroit.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGoldenGateBridge_BakerBeach_MC.jpg",
    "imageAsset": "landmarks/golden-gate-bridge",
    "imageAlt": "Photo de Golden Gate Bridge"
  },
  {
    "id": "landmark-010-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Golden Gate Bridge ?",
    "choices": [
      "San Francisco",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Golden Gate Bridge est rattaché ici à San Francisco ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGoldenGateBridge_BakerBeach_MC.jpg"
  },
  {
    "id": "landmark-010-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Golden Gate Bridge ?",
    "choices": [
      "États-Unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Golden Gate Bridge se trouve aux États-Unis ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGoldenGateBridge_BakerBeach_MC.jpg"
  },
  {
    "id": "landmark-010-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Golden Gate Bridge ?",
    "choices": [
      "pont suspendu",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Golden Gate Bridge est classé ici dans le repère pont suspendu ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGoldenGateBridge_BakerBeach_MC.jpg"
  },
  {
    "id": "landmark-011-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Tower Bridge",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Tower Bridge se reconnaît notamment à son pont basculant à deux tours.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASt_Katharine_pier_1.jpg",
    "imageAsset": "landmarks/tower-bridge",
    "imageAlt": "Photo de Tower Bridge"
  },
  {
    "id": "landmark-011-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Tower Bridge ?",
    "choices": [
      "Londres",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Tower Bridge est rattaché ici à Londres ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASt_Katharine_pier_1.jpg"
  },
  {
    "id": "landmark-011-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Tower Bridge ?",
    "choices": [
      "Royaume-Uni",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Tower Bridge se trouve en Royaume-Uni ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASt_Katharine_pier_1.jpg"
  },
  {
    "id": "landmark-011-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Tower Bridge ?",
    "choices": [
      "néogothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Tower Bridge est classé ici dans le repère néogothique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASt_Katharine_pier_1.jpg"
  },
  {
    "id": "landmark-011-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Tower Bridge.",
    "choices": [
      "Empire State Building",
      "Golden Gate Bridge",
      "Tower Bridge",
      "Big Ben"
    ],
    "answerIndex": 2,
    "explanation": "Tower Bridge correspond au repère visuel : pont basculant a deux tours.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASt_Katharine_pier_1.jpg",
    "choiceImageAssets": [
      "landmarks/empire-state-building",
      "landmarks/golden-gate-bridge",
      "landmarks/tower-bridge",
      "landmarks/big-ben"
    ],
    "choiceImageAlts": [
      "Photo de Empire State Building",
      "Photo de Golden Gate Bridge",
      "Photo de Tower Bridge",
      "Photo de Big Ben"
    ]
  },
  {
    "id": "landmark-012-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Big Ben",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Big Ben se reconnaît notamment à sa tour horloge du palais de Westminster.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALondres.-_Big_Ben_clocks_(2013).jpg",
    "imageAsset": "landmarks/big-ben",
    "imageAlt": "Photo de Big Ben"
  },
  {
    "id": "landmark-012-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Big Ben ?",
    "choices": [
      "Londres",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Big Ben est rattaché ici à Londres ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALondres.-_Big_Ben_clocks_(2013).jpg"
  },
  {
    "id": "landmark-012-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Big Ben ?",
    "choices": [
      "Royaume-Uni",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Big Ben se trouve en Royaume-Uni ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALondres.-_Big_Ben_clocks_(2013).jpg"
  },
  {
    "id": "landmark-012-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Big Ben ?",
    "choices": [
      "néogothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Big Ben est classé ici dans le repère néogothique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALondres.-_Big_Ben_clocks_(2013).jpg"
  },
  {
    "id": "landmark-013-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Stonehenge",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge se reconnaît notamment à son cercle de pierres préhistoriques.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AStonehenge_back_wide.jpg",
    "imageAsset": "landmarks/stonehenge",
    "imageAlt": "Photo de Stonehenge"
  },
  {
    "id": "landmark-013-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Stonehenge ?",
    "choices": [
      "Wiltshire",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge est rattaché ici à Wiltshire ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AStonehenge_back_wide.jpg"
  },
  {
    "id": "landmark-013-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Stonehenge ?",
    "choices": [
      "Royaume-Uni",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge se trouve en Royaume-Uni ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AStonehenge_back_wide.jpg"
  },
  {
    "id": "landmark-013-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Stonehenge ?",
    "choices": [
      "megalithique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge est classé ici dans le repère megalithique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AStonehenge_back_wide.jpg"
  },
  {
    "id": "landmark-013-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Stonehenge.",
    "choices": [
      "Stonehenge",
      "Mont-Saint-Michel",
      "Château de Chambord",
      "Pont du Gard"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge correspond au repère visuel : cercle de pierres préhistoriques.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AStonehenge_back_wide.jpg",
    "choiceImageAssets": [
      "landmarks/stonehenge",
      "landmarks/mont-saint-michel",
      "landmarks/chateau-de-chambord",
      "landmarks/pont-du-gard"
    ],
    "choiceImageAlts": [
      "Photo de Stonehenge",
      "Photo de Mont-Saint-Michel",
      "Photo de Château de Chambord",
      "Photo de Pont du Gard"
    ]
  },
  {
    "id": "landmark-014-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Mont-Saint-Michel",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Mont-Saint-Michel se reconnaît notamment à son abbaye sur îlot rocheux.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMSM_sunset_02.JPG",
    "imageAsset": "landmarks/mont-saint-michel",
    "imageAlt": "Photo de Mont-Saint-Michel"
  },
  {
    "id": "landmark-014-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Mont-Saint-Michel ?",
    "choices": [
      "Normandie",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Mont-Saint-Michel est rattaché ici à Normandie ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMSM_sunset_02.JPG"
  },
  {
    "id": "landmark-014-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Mont-Saint-Michel ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Mont-Saint-Michel se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMSM_sunset_02.JPG"
  },
  {
    "id": "landmark-014-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Mont-Saint-Michel ?",
    "choices": [
      "médiéval",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Mont-Saint-Michel est classé ici dans le repère médiéval ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMSM_sunset_02.JPG"
  },
  {
    "id": "landmark-015-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Château de Chambord",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le château de Chambord se reconnaît notamment à ses toits complexes de résidence royale.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChambord_-_monogramme_d'Henri_II.jpg",
    "imageAsset": "landmarks/chateau-de-chambord",
    "imageAlt": "Photo de Château de Chambord"
  },
  {
    "id": "landmark-015-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Château de Chambord ?",
    "choices": [
      "Loir-et-Cher",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Château de Chambord est rattaché ici à Loir-et-Cher ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChambord_-_monogramme_d'Henri_II.jpg"
  },
  {
    "id": "landmark-015-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Château de Chambord ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Château de Chambord se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChambord_-_monogramme_d'Henri_II.jpg"
  },
  {
    "id": "landmark-015-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Château de Chambord ?",
    "choices": [
      "Renaissance",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Château de Chambord est classé ici dans le repère Renaissance ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChambord_-_monogramme_d'Henri_II.jpg"
  },
  {
    "id": "landmark-015-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Château de Chambord.",
    "choices": [
      "Stonehenge",
      "Mont-Saint-Michel",
      "Château de Chambord",
      "Pont du Gard"
    ],
    "answerIndex": 2,
    "explanation": "Château de Chambord correspond au repère visuel : château royal aux toits complexes.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChambord_-_monogramme_d'Henri_II.jpg",
    "choiceImageAssets": [
      "landmarks/stonehenge",
      "landmarks/mont-saint-michel",
      "landmarks/chateau-de-chambord",
      "landmarks/pont-du-gard"
    ],
    "choiceImageAlts": [
      "Photo de Stonehenge",
      "Photo de Mont-Saint-Michel",
      "Photo de Château de Chambord",
      "Photo de Pont du Gard"
    ]
  },
  {
    "id": "landmark-016-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Pont du Gard",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Pont du Gard se reconnaît notamment à son aqueduc antique à trois niveaux.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APont_du_Gard_(10).jpg",
    "imageAsset": "landmarks/pont-du-gard",
    "imageAlt": "Photo de Pont du Gard"
  },
  {
    "id": "landmark-016-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Pont du Gard ?",
    "choices": [
      "Occitanie",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Pont du Gard est rattaché ici à Occitanie ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APont_du_Gard_(10).jpg"
  },
  {
    "id": "landmark-016-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Pont du Gard ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Pont du Gard se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APont_du_Gard_(10).jpg"
  },
  {
    "id": "landmark-016-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Pont du Gard ?",
    "choices": [
      "romain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Pont du Gard est classé ici dans le repère romain ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APont_du_Gard_(10).jpg"
  },
  {
    "id": "landmark-017-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Cathédrale de Chartres",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La cathédrale de Chartres se reconnaît notamment à ses vitraux célèbres.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChartres_-_cath%C3%A9drale_-_rosace_nord.jpg",
    "imageAsset": "landmarks/cathedrale-de-chartres",
    "imageAlt": "Photo de Cathédrale de Chartres"
  },
  {
    "id": "landmark-017-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : cathédrale aux vitraux célèbres ?",
    "choices": [
      "Chartres",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale de Chartres est rattaché ici à Chartres ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChartres_-_cath%C3%A9drale_-_rosace_nord.jpg"
  },
  {
    "id": "landmark-017-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Cathédrale de Chartres ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale de Chartres se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChartres_-_cath%C3%A9drale_-_rosace_nord.jpg"
  },
  {
    "id": "landmark-017-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Cathédrale de Chartres ?",
    "choices": [
      "gothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale de Chartres est classé ici dans le repère gothique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChartres_-_cath%C3%A9drale_-_rosace_nord.jpg"
  },
  {
    "id": "landmark-017-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Cathédrale de Chartres.",
    "choices": [
      "Cathédrale de Chartres",
      "Basilique du Sacré-Cœur",
      "Arc de triomphe",
      "Musée du Louvre"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale de Chartres correspond au repère visuel : cathédrale aux vitraux célèbres.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AChartres_-_cath%C3%A9drale_-_rosace_nord.jpg",
    "choiceImageAssets": [
      "landmarks/cathedrale-de-chartres",
      "landmarks/basilique-du-sacre-coeur",
      "landmarks/arc-de-triomphe",
      "landmarks/musee-du-louvre"
    ],
    "choiceImageAlts": [
      "Photo de Cathédrale de Chartres",
      "Photo de Basilique du Sacré-Cœur",
      "Photo de Arc de triomphe",
      "Photo de Musée du Louvre"
    ]
  },
  {
    "id": "landmark-018-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Basilique du Sacré-Cœur",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La basilique du Sacré-Cœur se reconnaît notamment à sa silhouette blanche sur Montmartre.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis_75018_Basilique_du_Sacr%C3%A9-C%C5%93ur_south_facade_stairs_20041107_(1).jpg",
    "imageAsset": "landmarks/basilique-du-sacre-coeur",
    "imageAlt": "Photo de Basilique du Sacré-Cœur"
  },
  {
    "id": "landmark-018-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Basilique du Sacré-Cœur ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Basilique du Sacré-Cœur est rattaché ici à Paris ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis_75018_Basilique_du_Sacr%C3%A9-C%C5%93ur_south_facade_stairs_20041107_(1).jpg"
  },
  {
    "id": "landmark-018-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Basilique du Sacré-Cœur ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Basilique du Sacré-Cœur se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis_75018_Basilique_du_Sacr%C3%A9-C%C5%93ur_south_facade_stairs_20041107_(1).jpg"
  },
  {
    "id": "landmark-018-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Basilique du Sacré-Cœur ?",
    "choices": [
      "romano-byzantin",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Basilique du Sacré-Cœur est classé ici dans le repère romano-byzantin ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis_75018_Basilique_du_Sacr%C3%A9-C%C5%93ur_south_facade_stairs_20041107_(1).jpg"
  },
  {
    "id": "landmark-019-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Arc de triomphe",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "L’Arc de triomphe se reconnaît notamment à son monument au centre de l’Étoile.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AArc_Triomphe.jpg",
    "imageAsset": "landmarks/arc-de-triomphe",
    "imageAlt": "Photo de Arc de triomphe"
  },
  {
    "id": "landmark-019-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Arc de triomphe ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Arc de triomphe est rattaché ici à Paris ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AArc_Triomphe.jpg"
  },
  {
    "id": "landmark-019-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Arc de triomphe ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Arc de triomphe se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AArc_Triomphe.jpg"
  },
  {
    "id": "landmark-019-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Arc de triomphe ?",
    "choices": [
      "néoclassique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Arc de triomphe est classé ici dans le repère néoclassique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AArc_Triomphe.jpg"
  },
  {
    "id": "landmark-019-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Arc de triomphe.",
    "choices": [
      "Cathédrale de Chartres",
      "Basilique du Sacré-Cœur",
      "Arc de triomphe",
      "Musée du Louvre"
    ],
    "answerIndex": 2,
    "explanation": "Arc de triomphe correspond au repère visuel : monument au centre de l Etoile.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AArc_Triomphe.jpg",
    "choiceImageAssets": [
      "landmarks/cathedrale-de-chartres",
      "landmarks/basilique-du-sacre-coeur",
      "landmarks/arc-de-triomphe",
      "landmarks/musee-du-louvre"
    ],
    "choiceImageAlts": [
      "Photo de Cathédrale de Chartres",
      "Photo de Basilique du Sacré-Cœur",
      "Photo de Arc de triomphe",
      "Photo de Musée du Louvre"
    ]
  },
  {
    "id": "landmark-020-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Musée du Louvre",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le musée du Louvre se reconnaît notamment à son ancien palais royal devenu musée.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALe_Louvre_-_Aile_Richelieu.jpg",
    "imageAsset": "landmarks/musee-du-louvre",
    "imageAlt": "Photo de Musée du Louvre"
  },
  {
    "id": "landmark-020-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Musée du Louvre ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Musée du Louvre est rattaché ici à Paris ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALe_Louvre_-_Aile_Richelieu.jpg"
  },
  {
    "id": "landmark-020-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Musée du Louvre ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Musée du Louvre se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALe_Louvre_-_Aile_Richelieu.jpg"
  },
  {
    "id": "landmark-020-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Musée du Louvre ?",
    "choices": [
      "palais classique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Musée du Louvre est classé ici dans le repère palais classique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALe_Louvre_-_Aile_Richelieu.jpg"
  },
  {
    "id": "landmark-021-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Palais de Versailles",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le palais de Versailles se reconnaît notamment à son rôle de résidence royale de Louis XIV.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AA_sculpture_at_the_entrance_to_the_palace_of_Versailles.jpg",
    "imageAsset": "landmarks/palais-de-versailles",
    "imageAlt": "Photo de Palais de Versailles"
  },
  {
    "id": "landmark-021-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : résidence royale de Louis XIV ?",
    "choices": [
      "Versailles",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles est rattaché ici à Versailles ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AA_sculpture_at_the_entrance_to_the_palace_of_Versailles.jpg"
  },
  {
    "id": "landmark-021-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Palais de Versailles ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AA_sculpture_at_the_entrance_to_the_palace_of_Versailles.jpg"
  },
  {
    "id": "landmark-021-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Palais de Versailles ?",
    "choices": [
      "classique français",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles est classé ici dans le repère classique français ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AA_sculpture_at_the_entrance_to_the_palace_of_Versailles.jpg"
  },
  {
    "id": "landmark-021-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Palais de Versailles.",
    "choices": [
      "Palais de Versailles",
      "Alhambra",
      "Guggenheim Bilbao",
      "Duomo de Milan"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles correspond au repère visuel : résidence royale de Louis XIV.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AA_sculpture_at_the_entrance_to_the_palace_of_Versailles.jpg",
    "choiceImageAssets": [
      "landmarks/palais-de-versailles",
      "landmarks/alhambra",
      "landmarks/guggenheim-bilbao",
      "landmarks/duomo-de-milan"
    ],
    "choiceImageAlts": [
      "Photo de Palais de Versailles",
      "Photo de Alhambra",
      "Photo de Guggenheim Bilbao",
      "Photo de Duomo de Milan"
    ]
  },
  {
    "id": "landmark-022-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Alhambra",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "L’Alhambra se reconnaît notamment à son palais fortifié andalou.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlhambra_in_the_evening.jpg",
    "imageAsset": "landmarks/alhambra",
    "imageAlt": "Photo de Alhambra"
  },
  {
    "id": "landmark-022-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Alhambra ?",
    "choices": [
      "Grenade",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Alhambra est rattaché ici à Grenade ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlhambra_in_the_evening.jpg"
  },
  {
    "id": "landmark-022-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Alhambra ?",
    "choices": [
      "Espagne",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Alhambra se trouve en Espagne ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlhambra_in_the_evening.jpg"
  },
  {
    "id": "landmark-022-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Alhambra ?",
    "choices": [
      "nasride",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Alhambra est classé ici dans le repère nasride ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAlhambra_in_the_evening.jpg"
  },
  {
    "id": "landmark-023-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Guggenheim Bilbao",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Guggenheim Bilbao se reconnaît notamment à ses volumes de titane.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMaman_de_Louise_Bourgeois_-_Bilbao.jpg",
    "imageAsset": "landmarks/guggenheim-bilbao",
    "imageAlt": "Photo de Guggenheim Bilbao"
  },
  {
    "id": "landmark-023-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : musée aux volumes de titane ?",
    "choices": [
      "Bilbao",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Guggenheim Bilbao est rattaché ici à Bilbao ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMaman_de_Louise_Bourgeois_-_Bilbao.jpg"
  },
  {
    "id": "landmark-023-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Guggenheim Bilbao ?",
    "choices": [
      "Espagne",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Guggenheim Bilbao se trouve en Espagne ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMaman_de_Louise_Bourgeois_-_Bilbao.jpg"
  },
  {
    "id": "landmark-023-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Guggenheim Bilbao ?",
    "choices": [
      "déconstructivisme",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Guggenheim Bilbao est classé ici dans le repère déconstructivisme ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMaman_de_Louise_Bourgeois_-_Bilbao.jpg"
  },
  {
    "id": "landmark-023-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Guggenheim Bilbao.",
    "choices": [
      "Palais de Versailles",
      "Alhambra",
      "Guggenheim Bilbao",
      "Duomo de Milan"
    ],
    "answerIndex": 2,
    "explanation": "Guggenheim Bilbao correspond au repère visuel : musée aux volumes de titane.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMaman_de_Louise_Bourgeois_-_Bilbao.jpg",
    "choiceImageAssets": [
      "landmarks/palais-de-versailles",
      "landmarks/alhambra",
      "landmarks/guggenheim-bilbao",
      "landmarks/duomo-de-milan"
    ],
    "choiceImageAlts": [
      "Photo de Palais de Versailles",
      "Photo de Alhambra",
      "Photo de Guggenheim Bilbao",
      "Photo de Duomo de Milan"
    ]
  },
  {
    "id": "landmark-024-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Duomo de Milan",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Duomo de Milan se reconnaît notamment à ses nombreuses flèches.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20110724_Milan_Cathedral_5260.jpg",
    "imageAsset": "landmarks/duomo-de-milan",
    "imageAlt": "Photo de Duomo de Milan"
  },
  {
    "id": "landmark-024-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : cathédrale aux nombreuses flèches ?",
    "choices": [
      "Milan",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Duomo de Milan est rattaché ici à Milan ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20110724_Milan_Cathedral_5260.jpg"
  },
  {
    "id": "landmark-024-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Duomo de Milan ?",
    "choices": [
      "Italie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Duomo de Milan se trouve en Italie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20110724_Milan_Cathedral_5260.jpg"
  },
  {
    "id": "landmark-024-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Duomo de Milan ?",
    "choices": [
      "gothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Duomo de Milan est classé ici dans le repère gothique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20110724_Milan_Cathedral_5260.jpg"
  },
  {
    "id": "landmark-025-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Basilique Saint-Pierre",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La basilique Saint-Pierre se reconnaît notamment à sa grande nef de la cité du Vatican.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVatican_StPaul_Statue.jpg",
    "imageAsset": "landmarks/basilique-saint-pierre",
    "imageAlt": "Photo de Basilique Saint-Pierre"
  },
  {
    "id": "landmark-025-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Basilique Saint-Pierre ?",
    "choices": [
      "Vatican",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Basilique Saint-Pierre est rattaché ici à Vatican ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVatican_StPaul_Statue.jpg"
  },
  {
    "id": "landmark-025-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Basilique Saint-Pierre ?",
    "choices": [
      "Vatican",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Basilique Saint-Pierre se trouve au Vatican ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVatican_StPaul_Statue.jpg"
  },
  {
    "id": "landmark-025-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Basilique Saint-Pierre ?",
    "choices": [
      "Renaissance",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Basilique Saint-Pierre est classé ici dans le repère Renaissance ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVatican_StPaul_Statue.jpg"
  },
  {
    "id": "landmark-025-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Basilique Saint-Pierre.",
    "choices": [
      "Basilique Saint-Pierre",
      "Tour de Pise",
      "Panthéon de Rome",
      "Hagia Sophia"
    ],
    "answerIndex": 0,
    "explanation": "Basilique Saint-Pierre correspond au repère visuel : grande basilique de la cité du Vatican.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVatican_StPaul_Statue.jpg",
    "choiceImageAssets": [
      "landmarks/basilique-saint-pierre",
      "landmarks/tour-de-pise",
      "landmarks/pantheon-de-rome",
      "landmarks/hagia-sophia"
    ],
    "choiceImageAlts": [
      "Photo de Basilique Saint-Pierre",
      "Photo de Tour de Pise",
      "Photo de Panthéon de Rome",
      "Photo de Hagia Sophia"
    ]
  },
  {
    "id": "landmark-026-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Tour de Pise",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La tour de Pise se reconnaît notamment à son campanile penché.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APisa_Tower_-_Pisa%2C_Italy_-_panoramio.jpg",
    "imageAsset": "landmarks/tour-de-pise",
    "imageAlt": "Photo de Tour de Pise"
  },
  {
    "id": "landmark-026-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Tour de Pise ?",
    "choices": [
      "Pise",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Tour de Pise est rattaché ici à Pise ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APisa_Tower_-_Pisa%2C_Italy_-_panoramio.jpg"
  },
  {
    "id": "landmark-026-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Tour de Pise ?",
    "choices": [
      "Italie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Tour de Pise se trouve en Italie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APisa_Tower_-_Pisa%2C_Italy_-_panoramio.jpg"
  },
  {
    "id": "landmark-026-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Tour de Pise ?",
    "choices": [
      "roman",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Tour de Pise est classé ici dans le repère roman ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APisa_Tower_-_Pisa%2C_Italy_-_panoramio.jpg"
  },
  {
    "id": "landmark-027-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Panthéon de Rome",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Panthéon de Rome se reconnaît notamment à sa coupole antique à oculus.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APantheon_wider_centered.jpg",
    "imageAsset": "landmarks/pantheon-de-rome",
    "imageAlt": "Photo de Panthéon de Rome"
  },
  {
    "id": "landmark-027-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Panthéon de Rome ?",
    "choices": [
      "Rome",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Panthéon de Rome est rattaché ici à Rome ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APantheon_wider_centered.jpg"
  },
  {
    "id": "landmark-027-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Panthéon de Rome ?",
    "choices": [
      "Italie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Panthéon de Rome se trouve en Italie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APantheon_wider_centered.jpg"
  },
  {
    "id": "landmark-027-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Panthéon de Rome ?",
    "choices": [
      "romain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Panthéon de Rome est classé ici dans le repère romain ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APantheon_wider_centered.jpg"
  },
  {
    "id": "landmark-027-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Panthéon de Rome.",
    "choices": [
      "Basilique Saint-Pierre",
      "Tour de Pise",
      "Panthéon de Rome",
      "Hagia Sophia"
    ],
    "answerIndex": 2,
    "explanation": "Panthéon de Rome correspond au repère visuel : coupole antique à oculus.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APantheon_wider_centered.jpg",
    "choiceImageAssets": [
      "landmarks/basilique-saint-pierre",
      "landmarks/tour-de-pise",
      "landmarks/pantheon-de-rome",
      "landmarks/hagia-sophia"
    ],
    "choiceImageAlts": [
      "Photo de Basilique Saint-Pierre",
      "Photo de Tour de Pise",
      "Photo de Panthéon de Rome",
      "Photo de Hagia Sophia"
    ]
  },
  {
    "id": "landmark-028-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Hagia Sophia",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Hagia Sophia se reconnaît notamment à son ancienne basilique à grande coupole.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHagia-Sophia-Laengsschnitt.jpg",
    "imageAsset": "landmarks/hagia-sophia",
    "imageAlt": "Photo de Hagia Sophia"
  },
  {
    "id": "landmark-028-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Hagia Sophia ?",
    "choices": [
      "Istanbul",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Hagia Sophia est rattaché ici à Istanbul ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHagia-Sophia-Laengsschnitt.jpg"
  },
  {
    "id": "landmark-028-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Hagia Sophia ?",
    "choices": [
      "Turquie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Hagia Sophia se trouve en Turquie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHagia-Sophia-Laengsschnitt.jpg"
  },
  {
    "id": "landmark-028-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Hagia Sophia ?",
    "choices": [
      "byzantin",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Hagia Sophia est classé ici dans le repère byzantin ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHagia-Sophia-Laengsschnitt.jpg"
  },
  {
    "id": "landmark-029-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Mosquée bleue",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La Mosquée bleue se reconnaît notamment à ses six minarets.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMosqu%C3%A9e_Bleue_Istanbul_1.jpg",
    "imageAsset": "landmarks/mosquee-bleue",
    "imageAlt": "Photo de Mosquée bleue"
  },
  {
    "id": "landmark-029-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Mosquée bleue ?",
    "choices": [
      "Istanbul",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Mosquée bleue est rattaché ici à Istanbul ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMosqu%C3%A9e_Bleue_Istanbul_1.jpg"
  },
  {
    "id": "landmark-029-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Mosquée bleue ?",
    "choices": [
      "Turquie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Mosquée bleue se trouve en Turquie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMosqu%C3%A9e_Bleue_Istanbul_1.jpg"
  },
  {
    "id": "landmark-029-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Mosquée bleue ?",
    "choices": [
      "ottoman",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Mosquée bleue est classé ici dans le repère ottoman ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMosqu%C3%A9e_Bleue_Istanbul_1.jpg"
  },
  {
    "id": "landmark-029-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Mosquée bleue.",
    "choices": [
      "Mosquée bleue",
      "Acropole d’Athènes",
      "Météores",
      "Kremlin de Moscou"
    ],
    "answerIndex": 0,
    "explanation": "Mosquée bleue correspond au repère visuel : mosquée aux six minarets.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMosqu%C3%A9e_Bleue_Istanbul_1.jpg",
    "choiceImageAssets": [
      "landmarks/mosquee-bleue",
      "landmarks/acropole-d-athenes",
      "landmarks/meteores",
      "landmarks/kremlin-de-moscou"
    ],
    "choiceImageAlts": [
      "Photo de Mosquée bleue",
      "Photo de Acropole d’Athènes",
      "Photo de Météores",
      "Photo de Kremlin de Moscou"
    ]
  },
  {
    "id": "landmark-030-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Acropole d’Athènes",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "L’Acropole d’Athènes se reconnaît notamment à son plateau monumental dominant Athènes.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20101024_Acropolis_panoramic_view_from_Areopagus_hill_Athens_Greece.jpg",
    "imageAsset": "landmarks/acropole-d-athenes",
    "imageAlt": "Photo de Acropole d’Athènes"
  },
  {
    "id": "landmark-030-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quelle ville ou zone de Grèce est associée à ce repère architectural ?",
    "choices": [
      "Athènes",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Acropole d’Athènes est rattaché ici à Athènes ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20101024_Acropolis_panoramic_view_from_Areopagus_hill_Athens_Greece.jpg"
  },
  {
    "id": "landmark-030-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Acropole d’Athènes ?",
    "choices": [
      "Grèce",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Acropole d’Athènes se trouve en Grèce ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20101024_Acropolis_panoramic_view_from_Areopagus_hill_Athens_Greece.jpg"
  },
  {
    "id": "landmark-030-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Acropole d’Athènes ?",
    "choices": [
      "antique grec",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Acropole d’Athènes est classé ici dans le repère antique grec ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A20101024_Acropolis_panoramic_view_from_Areopagus_hill_Athens_Greece.jpg"
  },
  {
    "id": "landmark-031-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Météores",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Les Météores se reconnaissent notamment à leurs monastères posés sur des pitons rocheux.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMeteora_Agios_Triadas_IMG_7632.jpg",
    "imageAsset": "landmarks/meteores",
    "imageAlt": "Photo de Météores"
  },
  {
    "id": "landmark-031-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Météores ?",
    "choices": [
      "Thessalie",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Météores est rattaché ici à Thessalie ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMeteora_Agios_Triadas_IMG_7632.jpg"
  },
  {
    "id": "landmark-031-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Météores ?",
    "choices": [
      "Grèce",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Météores se trouve en Grèce ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMeteora_Agios_Triadas_IMG_7632.jpg"
  },
  {
    "id": "landmark-031-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Météores ?",
    "choices": [
      "monastere",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Météores est classé ici dans le repère monastere ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMeteora_Agios_Triadas_IMG_7632.jpg"
  },
  {
    "id": "landmark-031-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Météores.",
    "choices": [
      "Mosquée bleue",
      "Acropole d’Athènes",
      "Météores",
      "Kremlin de Moscou"
    ],
    "answerIndex": 2,
    "explanation": "Météores correspond au repère visuel : monastères posés sur des pitons rocheux.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMeteora_Agios_Triadas_IMG_7632.jpg",
    "choiceImageAssets": [
      "landmarks/mosquee-bleue",
      "landmarks/acropole-d-athenes",
      "landmarks/meteores",
      "landmarks/kremlin-de-moscou"
    ],
    "choiceImageAlts": [
      "Photo de Mosquée bleue",
      "Photo de Acropole d’Athènes",
      "Photo de Météores",
      "Photo de Kremlin de Moscou"
    ]
  },
  {
    "id": "landmark-032-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Kremlin de Moscou",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Kremlin de Moscou se reconnaît notamment à son enceinte historique au cœur de Moscou.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMoscow_05-2012_Kremlin_22.jpg",
    "imageAsset": "landmarks/kremlin-de-moscou",
    "imageAlt": "Photo de Kremlin de Moscou"
  },
  {
    "id": "landmark-032-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone de Russie est associée à ce repère architectural ?",
    "choices": [
      "Moscou",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Kremlin de Moscou est rattaché ici à Moscou ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMoscow_05-2012_Kremlin_22.jpg"
  },
  {
    "id": "landmark-032-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Kremlin de Moscou ?",
    "choices": [
      "Russie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Kremlin de Moscou se trouve en Russie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMoscow_05-2012_Kremlin_22.jpg"
  },
  {
    "id": "landmark-032-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Kremlin de Moscou ?",
    "choices": [
      "forteresse",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Kremlin de Moscou est classé ici dans le repère forteresse ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMoscow_05-2012_Kremlin_22.jpg"
  },
  {
    "id": "landmark-033-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Cathédrale Saint-Basile",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La cathédrale Saint-Basile se reconnaît notamment à ses coupoles colorées sur la place Rouge.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARussie_-_Moscou_-_place_rouge_saint_basile.jpg",
    "imageAsset": "landmarks/cathedrale-saint-basile",
    "imageAlt": "Photo de Cathédrale Saint-Basile"
  },
  {
    "id": "landmark-033-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Cathédrale Saint-Basile ?",
    "choices": [
      "Moscou",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale Saint-Basile est rattaché ici à Moscou ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARussie_-_Moscou_-_place_rouge_saint_basile.jpg"
  },
  {
    "id": "landmark-033-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Cathédrale Saint-Basile ?",
    "choices": [
      "Russie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale Saint-Basile se trouve en Russie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARussie_-_Moscou_-_place_rouge_saint_basile.jpg"
  },
  {
    "id": "landmark-033-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Cathédrale Saint-Basile ?",
    "choices": [
      "russe",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale Saint-Basile est classé ici dans le repère russe ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARussie_-_Moscou_-_place_rouge_saint_basile.jpg"
  },
  {
    "id": "landmark-033-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Cathédrale Saint-Basile.",
    "choices": [
      "Cathédrale Saint-Basile",
      "Neuschwanstein",
      "Porte de Brandebourg",
      "Atomium"
    ],
    "answerIndex": 0,
    "explanation": "Cathédrale Saint-Basile correspond au repère visuel : coupoles colorées sur la place Rouge.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ARussie_-_Moscou_-_place_rouge_saint_basile.jpg",
    "choiceImageAssets": [
      "landmarks/cathedrale-saint-basile",
      "landmarks/neuschwanstein",
      "landmarks/porte-de-brandebourg",
      "landmarks/atomium"
    ],
    "choiceImageAlts": [
      "Photo de Cathédrale Saint-Basile",
      "Photo de Neuschwanstein",
      "Photo de Porte de Brandebourg",
      "Photo de Atomium"
    ]
  },
  {
    "id": "landmark-034-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Neuschwanstein",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Neuschwanstein se reconnaît notamment à son château romantique bavarois.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANeuschwanstein_Castle_LOC_print_rotated.jpg",
    "imageAsset": "landmarks/neuschwanstein",
    "imageAlt": "Photo de Neuschwanstein"
  },
  {
    "id": "landmark-034-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Neuschwanstein ?",
    "choices": [
      "Baviere",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Neuschwanstein est rattaché ici à Baviere ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANeuschwanstein_Castle_LOC_print_rotated.jpg"
  },
  {
    "id": "landmark-034-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Neuschwanstein ?",
    "choices": [
      "Allemagne",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Neuschwanstein se trouve en Allemagne ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANeuschwanstein_Castle_LOC_print_rotated.jpg"
  },
  {
    "id": "landmark-034-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Neuschwanstein ?",
    "choices": [
      "historicisme",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Neuschwanstein est classé ici dans le repère historicisme ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANeuschwanstein_Castle_LOC_print_rotated.jpg"
  },
  {
    "id": "landmark-035-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Porte de Brandebourg",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La porte de Brandebourg se reconnaît notamment à sa porte monumentale berlinoise.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABrandenburg_Gate_Quadriga_at_Night.jpg",
    "imageAsset": "landmarks/porte-de-brandebourg",
    "imageAlt": "Photo de Porte de Brandebourg"
  },
  {
    "id": "landmark-035-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Porte de Brandebourg ?",
    "choices": [
      "Berlin",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Porte de Brandebourg est rattaché ici à Berlin ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABrandenburg_Gate_Quadriga_at_Night.jpg"
  },
  {
    "id": "landmark-035-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Porte de Brandebourg ?",
    "choices": [
      "Allemagne",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Porte de Brandebourg se trouve en Allemagne ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABrandenburg_Gate_Quadriga_at_Night.jpg"
  },
  {
    "id": "landmark-035-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Porte de Brandebourg ?",
    "choices": [
      "néoclassique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Porte de Brandebourg est classé ici dans le repère néoclassique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABrandenburg_Gate_Quadriga_at_Night.jpg"
  },
  {
    "id": "landmark-035-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Porte de Brandebourg.",
    "choices": [
      "Cathédrale Saint-Basile",
      "Neuschwanstein",
      "Porte de Brandebourg",
      "Atomium"
    ],
    "answerIndex": 2,
    "explanation": "Porte de Brandebourg correspond au repère visuel : porte monumentale berlinoise.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABrandenburg_Gate_Quadriga_at_Night.jpg",
    "choiceImageAssets": [
      "landmarks/cathedrale-saint-basile",
      "landmarks/neuschwanstein",
      "landmarks/porte-de-brandebourg",
      "landmarks/atomium"
    ],
    "choiceImageAlts": [
      "Photo de Cathédrale Saint-Basile",
      "Photo de Neuschwanstein",
      "Photo de Porte de Brandebourg",
      "Photo de Atomium"
    ]
  },
  {
    "id": "landmark-036-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Atomium",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "L’Atomium se reconnaît notamment à sa structure métallique en forme de maille cristalline.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAtomium-Bruxelles_03.jpg",
    "imageAsset": "landmarks/atomium",
    "imageAlt": "Photo de Atomium"
  },
  {
    "id": "landmark-036-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Atomium ?",
    "choices": [
      "Bruxelles",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Atomium est rattaché ici à Bruxelles ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAtomium-Bruxelles_03.jpg"
  },
  {
    "id": "landmark-036-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Atomium ?",
    "choices": [
      "Belgique",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Atomium se trouve en Belgique ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAtomium-Bruxelles_03.jpg"
  },
  {
    "id": "landmark-036-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Atomium ?",
    "choices": [
      "modernisme",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Atomium est classé ici dans le repère modernisme ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AAtomium-Bruxelles_03.jpg"
  },
  {
    "id": "landmark-037-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Parlement de Budapest",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Parlement de Budapest se reconnaît notamment à son grand bâtiment au bord du Danube.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABudapest_Parliament_4604.JPG",
    "imageAsset": "landmarks/parlement-de-budapest",
    "imageAlt": "Photo de Parlement de Budapest"
  },
  {
    "id": "landmark-037-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : grand bâtiment au bord du Danube ?",
    "choices": [
      "Budapest",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest est rattaché ici à Budapest ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABudapest_Parliament_4604.JPG"
  },
  {
    "id": "landmark-037-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Parlement de Budapest ?",
    "choices": [
      "Hongrie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest se trouve en Hongrie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABudapest_Parliament_4604.JPG"
  },
  {
    "id": "landmark-037-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Parlement de Budapest ?",
    "choices": [
      "néogothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest est classé ici dans le repère néogothique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABudapest_Parliament_4604.JPG"
  },
  {
    "id": "landmark-037-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Parlement de Budapest.",
    "choices": [
      "Parlement de Budapest",
      "Sainte-Sophie de Kiev",
      "Sagrada Familia",
      "Fallingwater"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest correspond au repère visuel : grand bâtiment au bord du Danube.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABudapest_Parliament_4604.JPG",
    "choiceImageAssets": [
      "landmarks/parlement-de-budapest",
      "landmarks/sainte-sophie-de-kiev",
      "landmarks/sagrada-familia",
      "landmarks/fallingwater"
    ],
    "choiceImageAlts": [
      "Photo de Parlement de Budapest",
      "Photo de Sainte-Sophie de Kiev",
      "Photo de Sagrada Familia",
      "Photo de Fallingwater"
    ]
  },
  {
    "id": "landmark-038-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Sainte-Sophie de Kiev",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Sainte-Sophie de Kiev se reconnaît notamment à sa cathédrale historique à coupoles.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKiev_Sofiakathedraal.jpg",
    "imageAsset": "landmarks/sainte-sophie-de-kiev",
    "imageAlt": "Photo de Sainte-Sophie de Kiev"
  },
  {
    "id": "landmark-038-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Sainte-Sophie de Kiev ?",
    "choices": [
      "Kiev",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Sainte-Sophie de Kiev est rattaché ici à Kiev ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKiev_Sofiakathedraal.jpg"
  },
  {
    "id": "landmark-038-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Sainte-Sophie de Kiev ?",
    "choices": [
      "Ukraine",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Sainte-Sophie de Kiev se trouve en Ukraine ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKiev_Sofiakathedraal.jpg"
  },
  {
    "id": "landmark-038-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Sainte-Sophie de Kiev ?",
    "choices": [
      "byzantin ukrainien",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Sainte-Sophie de Kiev est classé ici dans le repère byzantin ukrainien ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKiev_Sofiakathedraal.jpg"
  },
  {
    "id": "landmark-039-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Sagrada Familia",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La Sagrada Família se reconnaît notamment à ses tours organiques de Gaudí.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASagrada_Familia_01.jpg",
    "imageAsset": "landmarks/sagrada-familia",
    "imageAlt": "Photo de Sagrada Familia"
  },
  {
    "id": "landmark-039-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Sagrada Familia ?",
    "choices": [
      "Barcelone",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Sagrada Familia est rattaché ici à Barcelone ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASagrada_Familia_01.jpg"
  },
  {
    "id": "landmark-039-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Sagrada Familia ?",
    "choices": [
      "Espagne",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Sagrada Familia se trouve en Espagne ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASagrada_Familia_01.jpg"
  },
  {
    "id": "landmark-039-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Sagrada Familia ?",
    "choices": [
      "modernisme catalan",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Sagrada Familia est classé ici dans le repère modernisme catalan ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASagrada_Familia_01.jpg"
  },
  {
    "id": "landmark-039-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Sagrada Familia.",
    "choices": [
      "Parlement de Budapest",
      "Sainte-Sophie de Kiev",
      "Sagrada Familia",
      "Fallingwater"
    ],
    "answerIndex": 2,
    "explanation": "Sagrada Familia correspond au repère visuel : basilique aux tours organiques de Gaudi.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASagrada_Familia_01.jpg",
    "choiceImageAssets": [
      "landmarks/parlement-de-budapest",
      "landmarks/sainte-sophie-de-kiev",
      "landmarks/sagrada-familia",
      "landmarks/fallingwater"
    ],
    "choiceImageAlts": [
      "Photo de Parlement de Budapest",
      "Photo de Sainte-Sophie de Kiev",
      "Photo de Sagrada Familia",
      "Photo de Fallingwater"
    ]
  },
  {
    "id": "landmark-040-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Fallingwater",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Fallingwater se reconnaît notamment à sa maison construite au-dessus d’une cascade.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFallingwater_2007.jpg",
    "imageAsset": "landmarks/fallingwater",
    "imageAlt": "Photo de Fallingwater"
  },
  {
    "id": "landmark-040-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Fallingwater ?",
    "choices": [
      "Pennsylvanie",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Fallingwater est rattaché ici à Pennsylvanie ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFallingwater_2007.jpg"
  },
  {
    "id": "landmark-040-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Fallingwater ?",
    "choices": [
      "États-Unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Fallingwater se trouve aux États-Unis ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFallingwater_2007.jpg"
  },
  {
    "id": "landmark-040-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Fallingwater ?",
    "choices": [
      "organique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Fallingwater est classé ici dans le repère organique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AFallingwater_2007.jpg"
  },
  {
    "id": "landmark-041-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Villa Rotonda",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La Villa Rotonda se reconnaît notamment à son plan central palladien.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVillaPalladioVersVeniseItalie021028.jpg",
    "imageAsset": "landmarks/villa-rotonda",
    "imageAlt": "Photo de Villa Rotonda"
  },
  {
    "id": "landmark-041-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Villa Rotonda ?",
    "choices": [
      "Vicence",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Villa Rotonda est rattaché ici à Vicence ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVillaPalladioVersVeniseItalie021028.jpg"
  },
  {
    "id": "landmark-041-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Villa Rotonda ?",
    "choices": [
      "Italie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Villa Rotonda se trouve en Italie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVillaPalladioVersVeniseItalie021028.jpg"
  },
  {
    "id": "landmark-041-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Villa Rotonda ?",
    "choices": [
      "Renaissance",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Villa Rotonda est classé ici dans le repère Renaissance ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVillaPalladioVersVeniseItalie021028.jpg"
  },
  {
    "id": "landmark-041-image-choice",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Villa Rotonda.",
    "choices": [
      "Villa Rotonda",
      "Bauhaus Dessau",
      "Centre Pompidou",
      "Bibliothèque Sainte-Geneviève"
    ],
    "answerIndex": 0,
    "explanation": "Villa Rotonda correspond au repère visuel : villa palladienne à plan central.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AVillaPalladioVersVeniseItalie021028.jpg",
    "choiceImageAssets": [
      "landmarks/villa-rotonda",
      "landmarks/bauhaus-dessau",
      "landmarks/centre-pompidou",
      "landmarks/bibliotheque-sainte-genevieve"
    ],
    "choiceImageAlts": [
      "Photo de Villa Rotonda",
      "Photo de Bauhaus Dessau",
      "Photo de Centre Pompidou",
      "Photo de Bibliothèque Sainte-Geneviève"
    ]
  },
  {
    "id": "landmark-042-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Bauhaus Dessau",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Bauhaus Dessau se reconnaît notamment à son école moderniste aux façades vitrées.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABauhaus-Dessau_Werkst%C3%A4tten.jpg",
    "imageAsset": "landmarks/bauhaus-dessau",
    "imageAlt": "Photo de Bauhaus Dessau"
  },
  {
    "id": "landmark-042-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : école moderniste aux façades vitrées ?",
    "choices": [
      "Dessau",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Bauhaus Dessau est rattaché ici à Dessau ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABauhaus-Dessau_Werkst%C3%A4tten.jpg"
  },
  {
    "id": "landmark-042-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Bauhaus Dessau ?",
    "choices": [
      "Allemagne",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Bauhaus Dessau se trouve en Allemagne ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABauhaus-Dessau_Werkst%C3%A4tten.jpg"
  },
  {
    "id": "landmark-042-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique correspond à cet indice : école moderniste aux façades vitrées ?",
    "choices": [
      "Bauhaus",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Bauhaus Dessau est classé ici dans le repère Bauhaus ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABauhaus-Dessau_Werkst%C3%A4tten.jpg"
  },
  {
    "id": "landmark-043-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Centre Pompidou",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Centre Pompidou se reconnaît notamment à ses tuyaux et structures apparents.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis%2C_Sacr%C3%A9-C%C5%93ur_de_Montmartre_--_2014_--_1197.jpg",
    "imageAsset": "landmarks/centre-pompidou",
    "imageAlt": "Photo de Centre Pompidou"
  },
  {
    "id": "landmark-043-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Centre Pompidou ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Centre Pompidou est rattaché ici à Paris ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis%2C_Sacr%C3%A9-C%C5%93ur_de_Montmartre_--_2014_--_1197.jpg"
  },
  {
    "id": "landmark-043-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Centre Pompidou ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Centre Pompidou se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis%2C_Sacr%C3%A9-C%C5%93ur_de_Montmartre_--_2014_--_1197.jpg"
  },
  {
    "id": "landmark-043-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Centre Pompidou ?",
    "choices": [
      "high-tech",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Centre Pompidou est classé ici dans le repère high-tech ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis%2C_Sacr%C3%A9-C%C5%93ur_de_Montmartre_--_2014_--_1197.jpg"
  },
  {
    "id": "landmark-043-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Centre Pompidou.",
    "choices": [
      "Villa Rotonda",
      "Bauhaus Dessau",
      "Centre Pompidou",
      "Bibliothèque Sainte-Geneviève"
    ],
    "answerIndex": 2,
    "explanation": "Centre Pompidou correspond au repère visuel : bâtiment aux tuyaux et structures apparents.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AParis%2C_Sacr%C3%A9-C%C5%93ur_de_Montmartre_--_2014_--_1197.jpg",
    "choiceImageAssets": [
      "landmarks/villa-rotonda",
      "landmarks/bauhaus-dessau",
      "landmarks/centre-pompidou",
      "landmarks/bibliotheque-sainte-genevieve"
    ],
    "choiceImageAlts": [
      "Photo de Villa Rotonda",
      "Photo de Bauhaus Dessau",
      "Photo de Centre Pompidou",
      "Photo de Bibliothèque Sainte-Geneviève"
    ]
  },
  {
    "id": "landmark-044-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Bibliothèque Sainte-Geneviève",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La bibliothèque Sainte-Geneviève se reconnaît notamment à sa grande salle de lecture parisienne.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiblioth%C3%A8que_Sainte_Genevi%C3%A8ve_Paris.jpg",
    "imageAsset": "landmarks/bibliotheque-sainte-genevieve",
    "imageAlt": "Photo de Bibliothèque Sainte-Geneviève"
  },
  {
    "id": "landmark-044-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Bibliothèque Sainte-Geneviève ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Bibliothèque Sainte-Geneviève est rattaché ici à Paris ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiblioth%C3%A8que_Sainte_Genevi%C3%A8ve_Paris.jpg"
  },
  {
    "id": "landmark-044-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Bibliothèque Sainte-Geneviève ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Bibliothèque Sainte-Geneviève se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiblioth%C3%A8que_Sainte_Genevi%C3%A8ve_Paris.jpg"
  },
  {
    "id": "landmark-044-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Bibliothèque Sainte-Geneviève ?",
    "choices": [
      "éclectique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Bibliothèque Sainte-Geneviève est classé ici dans le repère éclectique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiblioth%C3%A8que_Sainte_Genevi%C3%A8ve_Paris.jpg"
  },
  {
    "id": "landmark-045-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Musée d’Orsay",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le musée d’Orsay se reconnaît notamment à son ancienne gare transformée en musée.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMuseeOrsay_20070324.jpg",
    "imageAsset": "landmarks/musee-d-orsay",
    "imageAlt": "Photo de Musée d’Orsay"
  },
  {
    "id": "landmark-045-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Musée d’Orsay ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Musée d’Orsay est rattaché ici à Paris ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMuseeOrsay_20070324.jpg"
  },
  {
    "id": "landmark-045-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Musée d’Orsay ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Musée d’Orsay se trouve en France ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMuseeOrsay_20070324.jpg"
  },
  {
    "id": "landmark-045-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Musée d’Orsay ?",
    "choices": [
      "beaux-arts",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Musée d’Orsay est classé ici dans le repère beaux-arts ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMuseeOrsay_20070324.jpg"
  },
  {
    "id": "landmark-045-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Musée d’Orsay.",
    "choices": [
      "Musée d’Orsay",
      "Louvre Abu Dhabi",
      "Marina Bay Sands",
      "Gardens by the Bay"
    ],
    "answerIndex": 0,
    "explanation": "Musée d’Orsay correspond au repère visuel : ancienne gare transformée en musée.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AMuseeOrsay_20070324.jpg",
    "choiceImageAssets": [
      "landmarks/musee-d-orsay",
      "landmarks/louvre-abu-dhabi",
      "landmarks/marina-bay-sands",
      "landmarks/gardens-by-the-bay"
    ],
    "choiceImageAlts": [
      "Photo de Musée d’Orsay",
      "Photo de Louvre Abu Dhabi",
      "Photo de Marina Bay Sands",
      "Photo de Gardens by the Bay"
    ]
  },
  {
    "id": "landmark-046-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Louvre Abu Dhabi",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Louvre Abu Dhabi se reconnaît notamment à son dôme ajouré.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALouvre_Abu_Dhabi_entrance.jpg",
    "imageAsset": "landmarks/louvre-abu-dhabi",
    "imageAlt": "Photo de Louvre Abu Dhabi"
  },
  {
    "id": "landmark-046-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : musée sous un dôme ajouré ?",
    "choices": [
      "Abu Dhabi",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Louvre Abu Dhabi est rattaché ici à Abu Dhabi ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALouvre_Abu_Dhabi_entrance.jpg"
  },
  {
    "id": "landmark-046-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Louvre Abu Dhabi ?",
    "choices": [
      "Émirats arabes unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Louvre Abu Dhabi se trouve aux Émirats arabes unis ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALouvre_Abu_Dhabi_entrance.jpg"
  },
  {
    "id": "landmark-046-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Louvre Abu Dhabi ?",
    "choices": [
      "contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Louvre Abu Dhabi est classé ici dans le repère contemporain ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ALouvre_Abu_Dhabi_entrance.jpg"
  },
  {
    "id": "landmark-047-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Marina Bay Sands",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Marina Bay Sands se reconnaît notamment à ses trois tours reliées par une terrasse.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A2016_Singapur%2C_Downtown_Core%2C_Marina_Bay_Sands_(02).jpg",
    "imageAsset": "landmarks/marina-bay-sands",
    "imageAlt": "Photo de Marina Bay Sands"
  },
  {
    "id": "landmark-047-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Marina Bay Sands ?",
    "choices": [
      "Singapour",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Marina Bay Sands est rattaché ici à Singapour ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A2016_Singapur%2C_Downtown_Core%2C_Marina_Bay_Sands_(02).jpg"
  },
  {
    "id": "landmark-047-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Marina Bay Sands ?",
    "choices": [
      "Singapour",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Marina Bay Sands se trouve en Singapour ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A2016_Singapur%2C_Downtown_Core%2C_Marina_Bay_Sands_(02).jpg"
  },
  {
    "id": "landmark-047-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Marina Bay Sands ?",
    "choices": [
      "contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Marina Bay Sands est classé ici dans le repère contemporain ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A2016_Singapur%2C_Downtown_Core%2C_Marina_Bay_Sands_(02).jpg"
  },
  {
    "id": "landmark-047-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Marina Bay Sands.",
    "choices": [
      "Musée d’Orsay",
      "Louvre Abu Dhabi",
      "Marina Bay Sands",
      "Gardens by the Bay"
    ],
    "answerIndex": 2,
    "explanation": "Marina Bay Sands correspond au repère visuel : trois tours reliées par une terrasse.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3A2016_Singapur%2C_Downtown_Core%2C_Marina_Bay_Sands_(02).jpg",
    "choiceImageAssets": [
      "landmarks/musee-d-orsay",
      "landmarks/louvre-abu-dhabi",
      "landmarks/marina-bay-sands",
      "landmarks/gardens-by-the-bay"
    ],
    "choiceImageAlts": [
      "Photo de Musée d’Orsay",
      "Photo de Louvre Abu Dhabi",
      "Photo de Marina Bay Sands",
      "Photo de Gardens by the Bay"
    ]
  },
  {
    "id": "landmark-048-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Gardens by the Bay",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Gardens by the Bay se reconnaît notamment à ses supertrees lumineux et ses serres géantes.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACloud_Forest%2C_Gardens_by_the_Bay%2C_Singapore.jpg",
    "imageAsset": "landmarks/gardens-by-the-bay",
    "imageAlt": "Photo de Gardens by the Bay"
  },
  {
    "id": "landmark-048-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Gardens by the Bay ?",
    "choices": [
      "Singapour",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Gardens by the Bay est rattaché ici à Singapour ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACloud_Forest%2C_Gardens_by_the_Bay%2C_Singapore.jpg"
  },
  {
    "id": "landmark-048-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Gardens by the Bay ?",
    "choices": [
      "Singapour",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Gardens by the Bay se trouve en Singapour ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACloud_Forest%2C_Gardens_by_the_Bay%2C_Singapore.jpg"
  },
  {
    "id": "landmark-048-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Gardens by the Bay ?",
    "choices": [
      "paysage contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Gardens by the Bay est classé ici dans le repère paysage contemporain ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ACloud_Forest%2C_Gardens_by_the_Bay%2C_Singapore.jpg"
  },
  {
    "id": "landmark-049-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Tour CN",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La tour CN se reconnaît notamment à sa silhouette fine dominant Toronto.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AToronto_-_ON_-_CN_Tower_Turmkorb.jpg",
    "imageAsset": "landmarks/tour-cn",
    "imageAlt": "Photo de Tour CN"
  },
  {
    "id": "landmark-049-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Tour CN ?",
    "choices": [
      "Toronto",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Tour CN est rattaché ici à Toronto ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AToronto_-_ON_-_CN_Tower_Turmkorb.jpg"
  },
  {
    "id": "landmark-049-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve Tour CN ?",
    "choices": [
      "Canada",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Tour CN se trouve en Canada ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AToronto_-_ON_-_CN_Tower_Turmkorb.jpg"
  },
  {
    "id": "landmark-049-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Tour CN ?",
    "choices": [
      "tour de communication",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Tour CN est classé ici dans le repère tour de communication ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AToronto_-_ON_-_CN_Tower_Turmkorb.jpg"
  },
  {
    "id": "landmark-049-image-choice",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Sélectionne l’image de Tour CN.",
    "choices": [
      "Tour CN",
      "Biosphère de Montréal",
      "Lotus Temple",
      "Temple d’Or"
    ],
    "answerIndex": 0,
    "explanation": "Tour CN correspond au repère visuel : tour fine dominant Toronto.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AToronto_-_ON_-_CN_Tower_Turmkorb.jpg",
    "choiceImageAssets": [
      "landmarks/tour-cn",
      "landmarks/biosphere-de-montreal",
      "landmarks/lotus-temple",
      "landmarks/temple-d-or"
    ],
    "choiceImageAlts": [
      "Photo de Tour CN",
      "Photo de Biosphère de Montréal",
      "Photo de Lotus Temple",
      "Photo de Temple d’Or"
    ]
  },
  {
    "id": "landmark-050-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Biosphère de Montréal",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La Biosphère de Montréal se reconnaît notamment à son dôme géodésique de Buckminster Fuller.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiosph%C3%A8re_Montr%C3%A9al_CA.jpg",
    "imageAsset": "landmarks/biosphere-de-montreal",
    "imageAlt": "Photo de Biosphère de Montréal"
  },
  {
    "id": "landmark-050-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : dôme géodésique de Buckminster Fuller ?",
    "choices": [
      "Montréal",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Biosphère de Montréal est rattaché ici à Montréal ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiosph%C3%A8re_Montr%C3%A9al_CA.jpg"
  },
  {
    "id": "landmark-050-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Biosphère de Montréal ?",
    "choices": [
      "Canada",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Biosphère de Montréal se trouve en Canada ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiosph%C3%A8re_Montr%C3%A9al_CA.jpg"
  },
  {
    "id": "landmark-050-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Biosphère de Montréal ?",
    "choices": [
      "géodésique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Biosphère de Montréal est classé ici dans le repère géodésique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABiosph%C3%A8re_Montr%C3%A9al_CA.jpg"
  },
  {
    "id": "landmark-051-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Lotus Temple",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Lotus Temple se reconnaît notamment à sa forme de fleur de lotus.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANew_Delhi_Lotus.jpg",
    "imageAsset": "landmarks/lotus-temple",
    "imageAlt": "Photo de Lotus Temple"
  },
  {
    "id": "landmark-051-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Lotus Temple ?",
    "choices": [
      "New Delhi",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Lotus Temple est rattaché ici à New Delhi ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANew_Delhi_Lotus.jpg"
  },
  {
    "id": "landmark-051-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Lotus Temple ?",
    "choices": [
      "Inde",
      "Cambodge",
      "Jordanie",
      "Pérou"
    ],
    "answerIndex": 0,
    "explanation": "Lotus Temple se trouve en Inde ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANew_Delhi_Lotus.jpg"
  },
  {
    "id": "landmark-051-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Lotus Temple ?",
    "choices": [
      "expressionniste",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Lotus Temple est classé ici dans le repère expressionniste ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANew_Delhi_Lotus.jpg"
  },
  {
    "id": "landmark-051-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Lotus Temple.",
    "choices": [
      "Tour CN",
      "Biosphère de Montréal",
      "Lotus Temple",
      "Temple d’Or"
    ],
    "answerIndex": 2,
    "explanation": "Lotus Temple correspond au repère visuel : temple en forme de fleur de lotus.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ANew_Delhi_Lotus.jpg",
    "choiceImageAssets": [
      "landmarks/tour-cn",
      "landmarks/biosphere-de-montreal",
      "landmarks/lotus-temple",
      "landmarks/temple-d-or"
    ],
    "choiceImageAlts": [
      "Photo de Tour CN",
      "Photo de Biosphère de Montréal",
      "Photo de Lotus Temple",
      "Photo de Temple d’Or"
    ]
  },
  {
    "id": "landmark-052-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Temple d’Or",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Temple d’Or se reconnaît notamment à son sanctuaire doré entouré d’eau.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASikh_pilgrim_at_the_Golden_Temple_(Harmandir_Sahib)_in_Amritsar%2C_India.jpg",
    "imageAsset": "landmarks/temple-d-or",
    "imageAlt": "Photo de Temple d’Or"
  },
  {
    "id": "landmark-052-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Temple d’Or ?",
    "choices": [
      "Amritsar",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Temple d’Or est rattaché ici à Amritsar ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASikh_pilgrim_at_the_Golden_Temple_(Harmandir_Sahib)_in_Amritsar%2C_India.jpg"
  },
  {
    "id": "landmark-052-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Temple d’Or ?",
    "choices": [
      "Inde",
      "Cambodge",
      "Jordanie",
      "Pérou"
    ],
    "answerIndex": 0,
    "explanation": "Temple d’Or se trouve en Inde ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASikh_pilgrim_at_the_Golden_Temple_(Harmandir_Sahib)_in_Amritsar%2C_India.jpg"
  },
  {
    "id": "landmark-052-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Temple d’Or ?",
    "choices": [
      "sikh",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Temple d’Or est classé ici dans le repère sikh ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ASikh_pilgrim_at_the_Golden_Temple_(Harmandir_Sahib)_in_Amritsar%2C_India.jpg"
  },
  {
    "id": "landmark-053-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Borobudur",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur se reconnaît notamment à son temple en terrasses avec stupas.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABorobudur-Nothwest-view.jpg",
    "imageAsset": "landmarks/borobudur",
    "imageAlt": "Photo de Borobudur"
  },
  {
    "id": "landmark-053-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Borobudur ?",
    "choices": [
      "Java central",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur est rattaché ici à Java central ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABorobudur-Nothwest-view.jpg"
  },
  {
    "id": "landmark-053-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Borobudur ?",
    "choices": [
      "Indonesie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur se trouve en Indonesie ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABorobudur-Nothwest-view.jpg"
  },
  {
    "id": "landmark-053-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Borobudur ?",
    "choices": [
      "bouddhique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur est classé ici dans le repère bouddhique ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABorobudur-Nothwest-view.jpg"
  },
  {
    "id": "landmark-053-image-choice",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Borobudur.",
    "choices": [
      "Borobudur",
      "Kinkaku-ji",
      "Château de Himeji",
      "Gyeongbokgung"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur correspond au repère visuel : temple en terrasses avec stupas.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ABorobudur-Nothwest-view.jpg",
    "choiceImageAssets": [
      "landmarks/borobudur",
      "landmarks/kinkaku-ji",
      "landmarks/chateau-de-himeji",
      "landmarks/gyeongbokgung"
    ],
    "choiceImageAlts": [
      "Photo de Borobudur",
      "Photo de Kinkaku-ji",
      "Photo de Château de Himeji",
      "Photo de Gyeongbokgung"
    ]
  },
  {
    "id": "landmark-054-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Kinkaku-ji",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Kinkaku-ji se reconnaît notamment à son pavillon doré au bord d’un étang.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG",
    "imageAsset": "landmarks/kinkaku-ji",
    "imageAlt": "Photo de Kinkaku-ji"
  },
  {
    "id": "landmark-054-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Kinkaku-ji ?",
    "choices": [
      "Kyoto",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Kinkaku-ji est rattaché ici à Kyoto ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG"
  },
  {
    "id": "landmark-054-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Kinkaku-ji ?",
    "choices": [
      "Japon",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Kinkaku-ji se trouve en Japon ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG"
  },
  {
    "id": "landmark-054-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Kinkaku-ji ?",
    "choices": [
      "japonais",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Kinkaku-ji est classé ici dans le repère japonais ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AKinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG"
  },
  {
    "id": "landmark-055-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Château de Himeji",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le château de Himeji se reconnaît notamment à son château blanc surnommé héron blanc.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHimeji_Castle_0804_1.jpg",
    "imageAsset": "landmarks/chateau-de-himeji",
    "imageAlt": "Photo de Château de Himeji"
  },
  {
    "id": "landmark-055-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone correspond à ce repère architectural : château blanc surnommé héron blanc ?",
    "choices": [
      "Himeji",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Château de Himeji est rattaché ici à Himeji ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHimeji_Castle_0804_1.jpg"
  },
  {
    "id": "landmark-055-country",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quel pays se trouve Château de Himeji ?",
    "choices": [
      "Japon",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Château de Himeji se trouve au Japon ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHimeji_Castle_0804_1.jpg"
  },
  {
    "id": "landmark-055-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Château de Himeji ?",
    "choices": [
      "japonais",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Château de Himeji est classé ici dans le repère japonais ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHimeji_Castle_0804_1.jpg"
  },
  {
    "id": "landmark-055-image-choice",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Sélectionne l’image de Château de Himeji.",
    "choices": [
      "Borobudur",
      "Kinkaku-ji",
      "Château de Himeji",
      "Gyeongbokgung"
    ],
    "answerIndex": 2,
    "explanation": "Château de Himeji correspond au repère visuel : château blanc surnommé héron blanc.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AHimeji_Castle_0804_1.jpg",
    "choiceImageAssets": [
      "landmarks/borobudur",
      "landmarks/kinkaku-ji",
      "landmarks/chateau-de-himeji",
      "landmarks/gyeongbokgung"
    ],
    "choiceImageAlts": [
      "Photo de Borobudur",
      "Photo de Kinkaku-ji",
      "Photo de Château de Himeji",
      "Photo de Gyeongbokgung"
    ]
  },
  {
    "id": "landmark-056-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Gyeongbokgung",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung se reconnaît notamment à son palais royal de la dynastie Joseon.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGyeongbokgung-S.JPG",
    "imageAsset": "landmarks/gyeongbokgung",
    "imageAlt": "Photo de Gyeongbokgung"
  },
  {
    "id": "landmark-056-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Gyeongbokgung ?",
    "choices": [
      "Séoul",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung est rattaché ici à Séoul ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGyeongbokgung-S.JPG"
  },
  {
    "id": "landmark-056-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Gyeongbokgung ?",
    "choices": [
      "Corée du Sud",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung se trouve en Corée du Sud ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGyeongbokgung-S.JPG"
  },
  {
    "id": "landmark-056-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Gyeongbokgung ?",
    "choices": [
      "coréen",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung est classé ici dans le repère coréen ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3AGyeongbokgung-S.JPG"
  },
  {
    "id": "landmark-057-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Palais Potala",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le palais du Potala se reconnaît notamment à son palais monumental sur colline.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APotala.jpg",
    "imageAsset": "landmarks/palais-potala",
    "imageAlt": "Photo de Palais Potala"
  },
  {
    "id": "landmark-057-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Palais Potala ?",
    "choices": [
      "Lhassa",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Palais Potala est rattaché ici à Lhassa ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APotala.jpg"
  },
  {
    "id": "landmark-057-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Palais Potala ?",
    "choices": [
      "Chine",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Palais Potala se trouve en Chine ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APotala.jpg"
  },
  {
    "id": "landmark-057-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Palais Potala ?",
    "choices": [
      "tibétain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Palais Potala est classé ici dans le repère tibétain ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APotala.jpg"
  },
  {
    "id": "landmark-057-image-choice",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Palais Potala.",
    "choices": [
      "Palais Potala",
      "Grande Muraille de Chine",
      "Temple du Ciel",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Palais Potala correspond au repère visuel : palais monumental sur colline.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APotala.jpg",
    "choiceImageAssets": [
      "landmarks/palais-potala",
      "landmarks/grande-muraille-de-chine",
      "landmarks/temple-du-ciel",
      "landmarks/machu-picchu"
    ],
    "choiceImageAlts": [
      "Photo de Palais Potala",
      "Photo de Grande Muraille de Chine",
      "Photo de Temple du Ciel",
      "Photo de Machu Picchu"
    ]
  },
  {
    "id": "landmark-058-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Grande Muraille de Chine",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "La Grande Muraille de Chine se reconnaît notamment à sa longue muraille défensive.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ADu_halde_description_de_la_chine_volume_1.djvu",
    "imageAsset": "landmarks/grande-muraille-de-chine",
    "imageAlt": "Photo de Grande Muraille de Chine"
  },
  {
    "id": "landmark-058-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Grande Muraille de Chine ?",
    "choices": [
      "Chine du Nord",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Grande Muraille de Chine est rattaché ici à Chine du Nord ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ADu_halde_description_de_la_chine_volume_1.djvu"
  },
  {
    "id": "landmark-058-country",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quel pays se trouve ce repère architectural : longue muraille défensive ?",
    "choices": [
      "Chine",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Grande Muraille de Chine se trouve en Chine ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ADu_halde_description_de_la_chine_volume_1.djvu"
  },
  {
    "id": "landmark-058-style",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel repère stylistique associer à Grande Muraille de Chine ?",
    "choices": [
      "fortification",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Grande Muraille de Chine est classé ici dans le repère fortification ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3ADu_halde_description_de_la_chine_volume_1.djvu"
  },
  {
    "id": "landmark-059-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou bâtiment est visible sur cette photo ?",
    "choices": [
      "Temple du Ciel",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Le Temple du Ciel se reconnaît notamment à son complexe rituel impérial circulaire.",
    "tags": [
      "architecture",
      "image",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APekin_Le_temple_du_Ciel_(2).jpg",
    "imageAsset": "landmarks/temple-du-ciel",
    "imageAlt": "Photo de Temple du Ciel"
  },
  {
    "id": "landmark-059-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Temple du Ciel ?",
    "choices": [
      "Pékin",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Temple du Ciel est rattaché ici à Pékin ; ce repère aide à situer le monument avant de le reconnaître sur carte.",
    "tags": [
      "architecture",
      "geographie",
      "ville",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APekin_Le_temple_du_Ciel_(2).jpg"
  },
  {
    "id": "landmark-059-country",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quel pays se trouve Temple du Ciel ?",
    "choices": [
      "Chine",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Temple du Ciel se trouve en Chine ; ce pays relie architecture et géographie culturelle.",
    "tags": [
      "architecture",
      "geographie",
      "pays",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APekin_Le_temple_du_Ciel_(2).jpg"
  },
  {
    "id": "landmark-059-style",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel repère stylistique associer à Temple du Ciel ?",
    "choices": [
      "chinois",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Temple du Ciel est classé ici dans le repère chinois ; ce style sert d’indice pour comparer les formes architecturales.",
    "tags": [
      "architecture",
      "style",
      "banque-visuelle-monuments",
      "subtheme:architecture:styles"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APekin_Le_temple_du_Ciel_(2).jpg"
  },
  {
    "id": "landmark-059-image-choice",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Sélectionne l’image de Temple du Ciel.",
    "choices": [
      "Palais Potala",
      "Grande Muraille de Chine",
      "Temple du Ciel",
      "Machu Picchu"
    ],
    "answerIndex": 2,
    "explanation": "Temple du Ciel correspond au repère visuel : complexe rituel impérial circulaire.",
    "tags": [
      "architecture",
      "image-choice",
      "monument",
      "banque-visuelle-monuments",
      "subtheme:architecture:buildings"
    ],
    "sourceLabel": "Banque Kizz monuments - Wikimedia Commons",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File%3APekin_Le_temple_du_Ciel_(2).jpg",
    "choiceImageAssets": [
      "landmarks/palais-potala",
      "landmarks/grande-muraille-de-chine",
      "landmarks/temple-du-ciel",
      "landmarks/machu-picchu"
    ],
    "choiceImageAlts": [
      "Photo de Palais Potala",
      "Photo de Grande Muraille de Chine",
      "Photo de Temple du Ciel",
      "Photo de Machu Picchu"
    ]
  }
];
