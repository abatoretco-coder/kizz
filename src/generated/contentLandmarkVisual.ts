import { QuestionSeed } from '../domain';

export const landmarkVisualQuestions: QuestionSeed[] = [
  {
    "id": "landmark-001-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Taj Mahal",
      "Angkor Vat",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal se reconnait notamment par mausolee de marbre blanc.",
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
    "explanation": "Taj Mahal est rattache ici a Agra; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Perou"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal se trouve en Inde; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Taj Mahal ?",
    "choices": [
      "moghol",
      "khmer",
      "nabateen",
      "inca"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal est classe ici dans le repere moghol; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Taj Mahal.",
    "choices": [
      "Taj Mahal",
      "Angkor Vat",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Taj Mahal correspond au repere visuel : mausolee de marbre blanc.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Angkor Vat",
      "Taj Mahal",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Angkor Vat se reconnait notamment par temple monumental khmer.",
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
    "explanation": "Angkor Vat est rattache ici a Siem Reap; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Perou"
    ],
    "answerIndex": 0,
    "explanation": "Angkor Vat se trouve en Cambodge; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Angkor Vat ?",
    "choices": [
      "khmer",
      "moghol",
      "nabateen",
      "inca"
    ],
    "answerIndex": 0,
    "explanation": "Angkor Vat est classe ici dans le repere khmer; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Petra",
      "Taj Mahal",
      "Angkor Vat",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Petra se reconnait notamment par facades taillees dans la roche.",
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
    "explanation": "Petra est rattache ici a Wadi Musa; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Perou"
    ],
    "answerIndex": 0,
    "explanation": "Petra se trouve en Jordanie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Petra ?",
    "choices": [
      "nabateen",
      "moghol",
      "khmer",
      "inca"
    ],
    "answerIndex": 0,
    "explanation": "Petra est classe ici dans le repere nabateen; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Petra.",
    "choices": [
      "Taj Mahal",
      "Angkor Vat",
      "Petra",
      "Machu Picchu"
    ],
    "answerIndex": 2,
    "explanation": "Petra correspond au repere visuel : facades taillees dans la roche.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Machu Picchu",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Machu Picchu se reconnait notamment par cite andine en terrasses.",
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
    "explanation": "Machu Picchu est rattache ici a Cusco; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Perou",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Machu Picchu se trouve en Perou; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Machu Picchu ?",
    "choices": [
      "inca",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Machu Picchu est classe ici dans le repere inca; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Chichen Itza",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza se reconnait notamment par pyramide a degres mesoamericaine.",
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
      "Yucatan",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza est rattache ici a Yucatan; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Chichen Itza se trouve en Mexique; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Chichen Itza ?",
    "choices": [
      "maya",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza est classe ici dans le repere maya; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Chichen Itza.",
    "choices": [
      "Chichen Itza",
      "Christ Redempteur",
      "Opera de Sydney",
      "Burj Khalifa"
    ],
    "answerIndex": 0,
    "explanation": "Chichen Itza correspond au repere visuel : pyramide a degres mesoamericaine.",
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
      "Photo de Christ Redempteur",
      "Photo de Opera de Sydney",
      "Photo de Burj Khalifa"
    ]
  },
  {
    "id": "landmark-006-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Christ Redempteur",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Christ Redempteur se reconnait notamment par statue dominant la baie de Rio.",
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
    "imageAlt": "Photo de Christ Redempteur"
  },
  {
    "id": "landmark-006-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Christ Redempteur ?",
    "choices": [
      "Rio de Janeiro",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Christ Redempteur est rattache ici a Rio de Janeiro; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Christ Redempteur ?",
    "choices": [
      "Bresil",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Christ Redempteur se trouve en Bresil; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Christ Redempteur ?",
    "choices": [
      "art deco",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Christ Redempteur est classe ici dans le repere art deco; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Opera de Sydney",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Opera de Sydney se reconnait notamment par toitures en coques blanches.",
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
    "imageAlt": "Photo de Opera de Sydney"
  },
  {
    "id": "landmark-007-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : toitures en coques blanches ?",
    "choices": [
      "Sydney",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Opera de Sydney est rattache ici a Sydney; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Opera de Sydney ?",
    "choices": [
      "Australie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Opera de Sydney se trouve en Australie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Opera de Sydney ?",
    "choices": [
      "expressionniste",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Opera de Sydney est classe ici dans le repere expressionniste; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Opera de Sydney.",
    "choices": [
      "Chichen Itza",
      "Christ Redempteur",
      "Opera de Sydney",
      "Burj Khalifa"
    ],
    "answerIndex": 2,
    "explanation": "Opera de Sydney correspond au repere visuel : toitures en coques blanches.",
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
      "Photo de Christ Redempteur",
      "Photo de Opera de Sydney",
      "Photo de Burj Khalifa"
    ]
  },
  {
    "id": "landmark-008-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Burj Khalifa",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa se reconnait notamment par plus haute tour du monde.",
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
      "Dubai",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa est rattache ici a Dubai; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Emirats arabes unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa se trouve en Emirats arabes unis; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Burj Khalifa ?",
    "choices": [
      "gratte-ciel contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Burj Khalifa est classe ici dans le repere gratte-ciel contemporain; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Empire State Building",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building se reconnait notamment par gratte-ciel new-yorkais des annees 1930.",
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
    "explanation": "Empire State Building est rattache ici a New York; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Etats-Unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building se trouve en Etats-Unis; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Empire State Building ?",
    "choices": [
      "art deco",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building est classe ici dans le repere art deco; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Empire State Building.",
    "choices": [
      "Empire State Building",
      "Golden Gate Bridge",
      "Tower Bridge",
      "Big Ben"
    ],
    "answerIndex": 0,
    "explanation": "Empire State Building correspond au repere visuel : gratte-ciel new-yorkais des annees 1930.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Golden Gate Bridge",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Golden Gate Bridge se reconnait notamment par pont orange sur le detroit.",
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
    "explanation": "Golden Gate Bridge est rattache ici a San Francisco; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Etats-Unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Golden Gate Bridge se trouve en Etats-Unis; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Golden Gate Bridge ?",
    "choices": [
      "pont suspendu",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Golden Gate Bridge est classe ici dans le repere pont suspendu; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Tower Bridge",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Tower Bridge se reconnait notamment par pont basculant a deux tours.",
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
    "explanation": "Tower Bridge est rattache ici a Londres; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Tower Bridge se trouve en Royaume-Uni; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Tower Bridge ?",
    "choices": [
      "neogothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Tower Bridge est classe ici dans le repere neogothique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Tower Bridge.",
    "choices": [
      "Empire State Building",
      "Golden Gate Bridge",
      "Tower Bridge",
      "Big Ben"
    ],
    "answerIndex": 2,
    "explanation": "Tower Bridge correspond au repere visuel : pont basculant a deux tours.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Big Ben",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Big Ben se reconnait notamment par tour horloge du palais de Westminster.",
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
    "explanation": "Big Ben est rattache ici a Londres; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Big Ben se trouve en Royaume-Uni; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Big Ben ?",
    "choices": [
      "neogothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Big Ben est classe ici dans le repere neogothique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Stonehenge",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge se reconnait notamment par cercle de pierres prehistoriques.",
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
    "explanation": "Stonehenge est rattache ici a Wiltshire; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Stonehenge se trouve en Royaume-Uni; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Stonehenge ?",
    "choices": [
      "megalithique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge est classe ici dans le repere megalithique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Stonehenge.",
    "choices": [
      "Stonehenge",
      "Mont-Saint-Michel",
      "Chateau de Chambord",
      "Pont du Gard"
    ],
    "answerIndex": 0,
    "explanation": "Stonehenge correspond au repere visuel : cercle de pierres prehistoriques.",
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
      "Photo de Chateau de Chambord",
      "Photo de Pont du Gard"
    ]
  },
  {
    "id": "landmark-014-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Mont-Saint-Michel",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Mont-Saint-Michel se reconnait notamment par abbaye sur ilot rocheux.",
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
    "explanation": "Mont-Saint-Michel est rattache ici a Normandie; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Mont-Saint-Michel se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Mont-Saint-Michel ?",
    "choices": [
      "medieval",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Mont-Saint-Michel est classe ici dans le repere medieval; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Chateau de Chambord",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Chambord se reconnait notamment par chateau royal aux toits complexes.",
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
    "imageAlt": "Photo de Chateau de Chambord"
  },
  {
    "id": "landmark-015-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Chateau de Chambord ?",
    "choices": [
      "Loir-et-Cher",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Chambord est rattache ici a Loir-et-Cher; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Chateau de Chambord ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Chambord se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Chateau de Chambord ?",
    "choices": [
      "Renaissance",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Chambord est classe ici dans le repere Renaissance; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Chateau de Chambord.",
    "choices": [
      "Stonehenge",
      "Mont-Saint-Michel",
      "Chateau de Chambord",
      "Pont du Gard"
    ],
    "answerIndex": 2,
    "explanation": "Chateau de Chambord correspond au repere visuel : chateau royal aux toits complexes.",
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
      "Photo de Chateau de Chambord",
      "Photo de Pont du Gard"
    ]
  },
  {
    "id": "landmark-016-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Pont du Gard",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Pont du Gard se reconnait notamment par aqueduc antique a trois niveaux.",
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
    "explanation": "Pont du Gard est rattache ici a Occitanie; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Pont du Gard se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Pont du Gard ?",
    "choices": [
      "romain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Pont du Gard est classe ici dans le repere romain; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Cathedrale de Chartres",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale de Chartres se reconnait notamment par cathedrale aux vitraux celebres.",
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
    "imageAlt": "Photo de Cathedrale de Chartres"
  },
  {
    "id": "landmark-017-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : cathedrale aux vitraux celebres ?",
    "choices": [
      "Chartres",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale de Chartres est rattache ici a Chartres; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Cathedrale de Chartres ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale de Chartres se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Cathedrale de Chartres ?",
    "choices": [
      "gothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale de Chartres est classe ici dans le repere gothique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Cathedrale de Chartres.",
    "choices": [
      "Cathedrale de Chartres",
      "Basilique du Sacre-Coeur",
      "Arc de triomphe",
      "Musee du Louvre"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale de Chartres correspond au repere visuel : cathedrale aux vitraux celebres.",
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
      "Photo de Cathedrale de Chartres",
      "Photo de Basilique du Sacre-Coeur",
      "Photo de Arc de triomphe",
      "Photo de Musee du Louvre"
    ]
  },
  {
    "id": "landmark-018-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Basilique du Sacre-Coeur",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Basilique du Sacre-Coeur se reconnait notamment par basilique blanche de Montmartre.",
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
    "imageAlt": "Photo de Basilique du Sacre-Coeur"
  },
  {
    "id": "landmark-018-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Basilique du Sacre-Coeur ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Basilique du Sacre-Coeur est rattache ici a Paris; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Basilique du Sacre-Coeur ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Basilique du Sacre-Coeur se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Basilique du Sacre-Coeur ?",
    "choices": [
      "romano-byzantin",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Basilique du Sacre-Coeur est classe ici dans le repere romano-byzantin; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Arc de triomphe",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Arc de triomphe se reconnait notamment par monument au centre de l Etoile.",
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
    "explanation": "Arc de triomphe est rattache ici a Paris; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Arc de triomphe se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Arc de triomphe ?",
    "choices": [
      "neoclassique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Arc de triomphe est classe ici dans le repere neoclassique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Arc de triomphe.",
    "choices": [
      "Cathedrale de Chartres",
      "Basilique du Sacre-Coeur",
      "Arc de triomphe",
      "Musee du Louvre"
    ],
    "answerIndex": 2,
    "explanation": "Arc de triomphe correspond au repere visuel : monument au centre de l Etoile.",
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
      "Photo de Cathedrale de Chartres",
      "Photo de Basilique du Sacre-Coeur",
      "Photo de Arc de triomphe",
      "Photo de Musee du Louvre"
    ]
  },
  {
    "id": "landmark-020-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Musee du Louvre",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Musee du Louvre se reconnait notamment par ancien palais royal devenu musee.",
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
    "imageAlt": "Photo de Musee du Louvre"
  },
  {
    "id": "landmark-020-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Musee du Louvre ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Musee du Louvre est rattache ici a Paris; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Musee du Louvre ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Musee du Louvre se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Musee du Louvre ?",
    "choices": [
      "palais classique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Musee du Louvre est classe ici dans le repere palais classique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Palais de Versailles",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles se reconnait notamment par residence royale de Louis XIV.",
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
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : residence royale de Louis XIV ?",
    "choices": [
      "Versailles",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles est rattache ici a Versailles; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Palais de Versailles se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Palais de Versailles ?",
    "choices": [
      "classique francais",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles est classe ici dans le repere classique francais; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Palais de Versailles.",
    "choices": [
      "Palais de Versailles",
      "Alhambra",
      "Guggenheim Bilbao",
      "Duomo de Milan"
    ],
    "answerIndex": 0,
    "explanation": "Palais de Versailles correspond au repere visuel : residence royale de Louis XIV.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Alhambra",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Alhambra se reconnait notamment par palais fortifie andalou.",
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
    "explanation": "Alhambra est rattache ici a Grenade; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Alhambra se trouve en Espagne; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Alhambra ?",
    "choices": [
      "nasride",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Alhambra est classe ici dans le repere nasride; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Guggenheim Bilbao",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Guggenheim Bilbao se reconnait notamment par musee aux volumes de titane.",
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
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : musee aux volumes de titane ?",
    "choices": [
      "Bilbao",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Guggenheim Bilbao est rattache ici a Bilbao; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Guggenheim Bilbao se trouve en Espagne; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Guggenheim Bilbao ?",
    "choices": [
      "deconstructivisme",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Guggenheim Bilbao est classe ici dans le repere deconstructivisme; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Guggenheim Bilbao.",
    "choices": [
      "Palais de Versailles",
      "Alhambra",
      "Guggenheim Bilbao",
      "Duomo de Milan"
    ],
    "answerIndex": 2,
    "explanation": "Guggenheim Bilbao correspond au repere visuel : musee aux volumes de titane.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Duomo de Milan",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Duomo de Milan se reconnait notamment par cathedrale aux nombreuses fleches.",
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
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : cathedrale aux nombreuses fleches ?",
    "choices": [
      "Milan",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Duomo de Milan est rattache ici a Milan; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Duomo de Milan se trouve en Italie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Duomo de Milan ?",
    "choices": [
      "gothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Duomo de Milan est classe ici dans le repere gothique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Basilique Saint-Pierre",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Basilique Saint-Pierre se reconnait notamment par grande basilique de la cite du Vatican.",
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
    "explanation": "Basilique Saint-Pierre est rattache ici a Vatican; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Basilique Saint-Pierre se trouve en Vatican; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Basilique Saint-Pierre ?",
    "choices": [
      "Renaissance",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Basilique Saint-Pierre est classe ici dans le repere Renaissance; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Basilique Saint-Pierre.",
    "choices": [
      "Basilique Saint-Pierre",
      "Tour de Pise",
      "Pantheon de Rome",
      "Hagia Sophia"
    ],
    "answerIndex": 0,
    "explanation": "Basilique Saint-Pierre correspond au repere visuel : grande basilique de la cite du Vatican.",
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
      "Photo de Pantheon de Rome",
      "Photo de Hagia Sophia"
    ]
  },
  {
    "id": "landmark-026-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Tour de Pise",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Tour de Pise se reconnait notamment par campanile penche.",
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
    "explanation": "Tour de Pise est rattache ici a Pise; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Tour de Pise se trouve en Italie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Tour de Pise ?",
    "choices": [
      "roman",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Tour de Pise est classe ici dans le repere roman; ce style sert d indice pour comparer les formes architecturales.",
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
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Pantheon de Rome",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Pantheon de Rome se reconnait notamment par coupole antique a oculus.",
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
    "imageAlt": "Photo de Pantheon de Rome"
  },
  {
    "id": "landmark-027-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Pantheon de Rome ?",
    "choices": [
      "Rome",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Pantheon de Rome est rattache ici a Rome; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Pantheon de Rome ?",
    "choices": [
      "Italie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Pantheon de Rome se trouve en Italie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Pantheon de Rome ?",
    "choices": [
      "romain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Pantheon de Rome est classe ici dans le repere romain; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Pantheon de Rome.",
    "choices": [
      "Basilique Saint-Pierre",
      "Tour de Pise",
      "Pantheon de Rome",
      "Hagia Sophia"
    ],
    "answerIndex": 2,
    "explanation": "Pantheon de Rome correspond au repere visuel : coupole antique a oculus.",
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
      "Photo de Pantheon de Rome",
      "Photo de Hagia Sophia"
    ]
  },
  {
    "id": "landmark-028-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Hagia Sophia",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Hagia Sophia se reconnait notamment par ancienne basilique a grande coupole.",
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
    "explanation": "Hagia Sophia est rattache ici a Istanbul; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Hagia Sophia se trouve en Turquie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Hagia Sophia ?",
    "choices": [
      "byzantin",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Hagia Sophia est classe ici dans le repere byzantin; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Mosquee bleue",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Mosquee bleue se reconnait notamment par mosquee aux six minarets.",
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
    "imageAlt": "Photo de Mosquee bleue"
  },
  {
    "id": "landmark-029-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Mosquee bleue ?",
    "choices": [
      "Istanbul",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Mosquee bleue est rattache ici a Istanbul; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Mosquee bleue ?",
    "choices": [
      "Turquie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Mosquee bleue se trouve en Turquie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Mosquee bleue ?",
    "choices": [
      "ottoman",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Mosquee bleue est classe ici dans le repere ottoman; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Mosquee bleue.",
    "choices": [
      "Mosquee bleue",
      "Acropole d Athenes",
      "Meteores",
      "Kremlin de Moscou"
    ],
    "answerIndex": 0,
    "explanation": "Mosquee bleue correspond au repere visuel : mosquee aux six minarets.",
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
      "Photo de Mosquee bleue",
      "Photo de Acropole d Athenes",
      "Photo de Meteores",
      "Photo de Kremlin de Moscou"
    ]
  },
  {
    "id": "landmark-030-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Acropole d Athenes",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Acropole d Athenes se reconnait notamment par plateau monumental dominant Athenes.",
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
    "imageAlt": "Photo de Acropole d Athenes"
  },
  {
    "id": "landmark-030-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quelle ville ou zone Grece est associee a ce repere architectural ?",
    "choices": [
      "Athenes",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Acropole d Athenes est rattache ici a Athenes; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Acropole d Athenes ?",
    "choices": [
      "Grece",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Acropole d Athenes se trouve en Grece; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Acropole d Athenes ?",
    "choices": [
      "antique grec",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Acropole d Athenes est classe ici dans le repere antique grec; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Meteores",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Meteores se reconnait notamment par monasteres poses sur des pitons rocheux.",
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
    "imageAlt": "Photo de Meteores"
  },
  {
    "id": "landmark-031-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Meteores ?",
    "choices": [
      "Thessalie",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Meteores est rattache ici a Thessalie; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Meteores ?",
    "choices": [
      "Grece",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Meteores se trouve en Grece; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Meteores ?",
    "choices": [
      "monastere",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Meteores est classe ici dans le repere monastere; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Meteores.",
    "choices": [
      "Mosquee bleue",
      "Acropole d Athenes",
      "Meteores",
      "Kremlin de Moscou"
    ],
    "answerIndex": 2,
    "explanation": "Meteores correspond au repere visuel : monasteres poses sur des pitons rocheux.",
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
      "Photo de Mosquee bleue",
      "Photo de Acropole d Athenes",
      "Photo de Meteores",
      "Photo de Kremlin de Moscou"
    ]
  },
  {
    "id": "landmark-032-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Kremlin de Moscou",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Kremlin de Moscou se reconnait notamment par enceinte historique au coeur de Moscou.",
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
    "prompt": "Quelle ville ou zone Russie est associee a ce repere architectural ?",
    "choices": [
      "Moscou",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Kremlin de Moscou est rattache ici a Moscou; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Kremlin de Moscou se trouve en Russie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Kremlin de Moscou ?",
    "choices": [
      "forteresse",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Kremlin de Moscou est classe ici dans le repere forteresse; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Cathedrale Saint-Basile",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale Saint-Basile se reconnait notamment par coupoles colorees sur la place Rouge.",
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
    "imageAlt": "Photo de Cathedrale Saint-Basile"
  },
  {
    "id": "landmark-033-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Cathedrale Saint-Basile ?",
    "choices": [
      "Moscou",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale Saint-Basile est rattache ici a Moscou; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Cathedrale Saint-Basile ?",
    "choices": [
      "Russie",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale Saint-Basile se trouve en Russie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Cathedrale Saint-Basile ?",
    "choices": [
      "russe",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale Saint-Basile est classe ici dans le repere russe; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Cathedrale Saint-Basile.",
    "choices": [
      "Cathedrale Saint-Basile",
      "Neuschwanstein",
      "Porte de Brandebourg",
      "Atomium"
    ],
    "answerIndex": 0,
    "explanation": "Cathedrale Saint-Basile correspond au repere visuel : coupoles colorees sur la place Rouge.",
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
      "Photo de Cathedrale Saint-Basile",
      "Photo de Neuschwanstein",
      "Photo de Porte de Brandebourg",
      "Photo de Atomium"
    ]
  },
  {
    "id": "landmark-034-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Neuschwanstein",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Neuschwanstein se reconnait notamment par chateau romantique bavarois.",
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
    "explanation": "Neuschwanstein est rattache ici a Baviere; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Neuschwanstein se trouve en Allemagne; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Neuschwanstein ?",
    "choices": [
      "historicisme",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Neuschwanstein est classe ici dans le repere historicisme; ce style sert d indice pour comparer les formes architecturales.",
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
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Porte de Brandebourg",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Porte de Brandebourg se reconnait notamment par porte monumentale berlinoise.",
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
    "explanation": "Porte de Brandebourg est rattache ici a Berlin; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Porte de Brandebourg se trouve en Allemagne; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Porte de Brandebourg ?",
    "choices": [
      "neoclassique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Porte de Brandebourg est classe ici dans le repere neoclassique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Porte de Brandebourg.",
    "choices": [
      "Cathedrale Saint-Basile",
      "Neuschwanstein",
      "Porte de Brandebourg",
      "Atomium"
    ],
    "answerIndex": 2,
    "explanation": "Porte de Brandebourg correspond au repere visuel : porte monumentale berlinoise.",
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
      "Photo de Cathedrale Saint-Basile",
      "Photo de Neuschwanstein",
      "Photo de Porte de Brandebourg",
      "Photo de Atomium"
    ]
  },
  {
    "id": "landmark-036-identify",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Atomium",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Atomium se reconnait notamment par structure metallique en forme de maille cristalline.",
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
    "explanation": "Atomium est rattache ici a Bruxelles; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Atomium se trouve en Belgique; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Atomium ?",
    "choices": [
      "modernisme",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Atomium est classe ici dans le repere modernisme; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Parlement de Budapest",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest se reconnait notamment par grand batiment au bord du Danube.",
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
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : grand batiment au bord du Danube ?",
    "choices": [
      "Budapest",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest est rattache ici a Budapest; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Parlement de Budapest se trouve en Hongrie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Parlement de Budapest ?",
    "choices": [
      "neogothique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest est classe ici dans le repere neogothique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Parlement de Budapest.",
    "choices": [
      "Parlement de Budapest",
      "Sainte-Sophie de Kiev",
      "Sagrada Familia",
      "Fallingwater"
    ],
    "answerIndex": 0,
    "explanation": "Parlement de Budapest correspond au repere visuel : grand batiment au bord du Danube.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Sainte-Sophie de Kiev",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Sainte-Sophie de Kiev se reconnait notamment par cathedrale historique a coupoles.",
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
    "explanation": "Sainte-Sophie de Kiev est rattache ici a Kiev; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Sainte-Sophie de Kiev se trouve en Ukraine; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Sainte-Sophie de Kiev ?",
    "choices": [
      "byzantin ukrainien",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Sainte-Sophie de Kiev est classe ici dans le repere byzantin ukrainien; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Sagrada Familia",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Sagrada Familia se reconnait notamment par basilique aux tours organiques de Gaudi.",
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
    "explanation": "Sagrada Familia est rattache ici a Barcelone; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Sagrada Familia se trouve en Espagne; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Sagrada Familia ?",
    "choices": [
      "modernisme catalan",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Sagrada Familia est classe ici dans le repere modernisme catalan; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Sagrada Familia.",
    "choices": [
      "Parlement de Budapest",
      "Sainte-Sophie de Kiev",
      "Sagrada Familia",
      "Fallingwater"
    ],
    "answerIndex": 2,
    "explanation": "Sagrada Familia correspond au repere visuel : basilique aux tours organiques de Gaudi.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Fallingwater",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Fallingwater se reconnait notamment par maison construite au-dessus d une cascade.",
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
    "explanation": "Fallingwater est rattache ici a Pennsylvanie; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Etats-Unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Fallingwater se trouve en Etats-Unis; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Fallingwater ?",
    "choices": [
      "organique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Fallingwater est classe ici dans le repere organique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Villa Rotonda",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Villa Rotonda se reconnait notamment par villa palladienne a plan central.",
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
    "explanation": "Villa Rotonda est rattache ici a Vicence; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Villa Rotonda se trouve en Italie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Villa Rotonda ?",
    "choices": [
      "Renaissance",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Villa Rotonda est classe ici dans le repere Renaissance; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Villa Rotonda.",
    "choices": [
      "Villa Rotonda",
      "Bauhaus Dessau",
      "Centre Pompidou",
      "Bibliotheque Sainte-Genevieve"
    ],
    "answerIndex": 0,
    "explanation": "Villa Rotonda correspond au repere visuel : villa palladienne a plan central.",
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
      "Photo de Bibliotheque Sainte-Genevieve"
    ]
  },
  {
    "id": "landmark-042-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Bauhaus Dessau",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Bauhaus Dessau se reconnait notamment par ecole moderniste aux facades vitrees.",
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
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : ecole moderniste aux facades vitrees ?",
    "choices": [
      "Dessau",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Bauhaus Dessau est rattache ici a Dessau; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Bauhaus Dessau se trouve en Allemagne; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique correspond a cet indice : ecole moderniste aux facades vitrees ?",
    "choices": [
      "Bauhaus",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Bauhaus Dessau est classe ici dans le repere Bauhaus; ce style sert d indice pour comparer les formes architecturales.",
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
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Centre Pompidou",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Centre Pompidou se reconnait notamment par batiment aux tuyaux et structures apparents.",
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
    "explanation": "Centre Pompidou est rattache ici a Paris; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Centre Pompidou se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Centre Pompidou ?",
    "choices": [
      "high-tech",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Centre Pompidou est classe ici dans le repere high-tech; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Centre Pompidou.",
    "choices": [
      "Villa Rotonda",
      "Bauhaus Dessau",
      "Centre Pompidou",
      "Bibliotheque Sainte-Genevieve"
    ],
    "answerIndex": 2,
    "explanation": "Centre Pompidou correspond au repere visuel : batiment aux tuyaux et structures apparents.",
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
      "Photo de Bibliotheque Sainte-Genevieve"
    ]
  },
  {
    "id": "landmark-044-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Bibliotheque Sainte-Genevieve",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Bibliotheque Sainte-Genevieve se reconnait notamment par bibliotheque parisienne a grande salle de lecture.",
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
    "imageAlt": "Photo de Bibliotheque Sainte-Genevieve"
  },
  {
    "id": "landmark-044-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Dans quelle ville ou zone se trouve Bibliotheque Sainte-Genevieve ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Bibliotheque Sainte-Genevieve est rattache ici a Paris; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Bibliotheque Sainte-Genevieve ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Bibliotheque Sainte-Genevieve se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Bibliotheque Sainte-Genevieve ?",
    "choices": [
      "eclectique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Bibliotheque Sainte-Genevieve est classe ici dans le repere eclectique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Musee d Orsay",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Musee d Orsay se reconnait notamment par ancienne gare transformee en musee.",
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
    "imageAlt": "Photo de Musee d Orsay"
  },
  {
    "id": "landmark-045-city",
    "topicId": "architecture",
    "difficulty": 1,
    "prompt": "Dans quelle ville ou zone se trouve Musee d Orsay ?",
    "choices": [
      "Paris",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Musee d Orsay est rattache ici a Paris; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Musee d Orsay ?",
    "choices": [
      "France",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Musee d Orsay se trouve en France; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Musee d Orsay ?",
    "choices": [
      "beaux-arts",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Musee d Orsay est classe ici dans le repere beaux-arts; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Musee d Orsay.",
    "choices": [
      "Musee d Orsay",
      "Louvre Abu Dhabi",
      "Marina Bay Sands",
      "Gardens by the Bay"
    ],
    "answerIndex": 0,
    "explanation": "Musee d Orsay correspond au repere visuel : ancienne gare transformee en musee.",
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
      "Photo de Musee d Orsay",
      "Photo de Louvre Abu Dhabi",
      "Photo de Marina Bay Sands",
      "Photo de Gardens by the Bay"
    ]
  },
  {
    "id": "landmark-046-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Louvre Abu Dhabi",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Louvre Abu Dhabi se reconnait notamment par musee sous un dome ajoure.",
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
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : musee sous un dome ajoure ?",
    "choices": [
      "Abu Dhabi",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Louvre Abu Dhabi est rattache ici a Abu Dhabi; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Emirats arabes unis",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Louvre Abu Dhabi se trouve en Emirats arabes unis; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Louvre Abu Dhabi ?",
    "choices": [
      "contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Louvre Abu Dhabi est classe ici dans le repere contemporain; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Marina Bay Sands",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Marina Bay Sands se reconnait notamment par trois tours reliees par une terrasse.",
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
    "explanation": "Marina Bay Sands est rattache ici a Singapour; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Marina Bay Sands se trouve en Singapour; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Marina Bay Sands ?",
    "choices": [
      "contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Marina Bay Sands est classe ici dans le repere contemporain; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Marina Bay Sands.",
    "choices": [
      "Musee d Orsay",
      "Louvre Abu Dhabi",
      "Marina Bay Sands",
      "Gardens by the Bay"
    ],
    "answerIndex": 2,
    "explanation": "Marina Bay Sands correspond au repere visuel : trois tours reliees par une terrasse.",
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
      "Photo de Musee d Orsay",
      "Photo de Louvre Abu Dhabi",
      "Photo de Marina Bay Sands",
      "Photo de Gardens by the Bay"
    ]
  },
  {
    "id": "landmark-048-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Gardens by the Bay",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Gardens by the Bay se reconnait notamment par supertrees lumineux et serres geantes.",
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
    "explanation": "Gardens by the Bay est rattache ici a Singapour; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Gardens by the Bay se trouve en Singapour; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Gardens by the Bay ?",
    "choices": [
      "paysage contemporain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Gardens by the Bay est classe ici dans le repere paysage contemporain; ce style sert d indice pour comparer les formes architecturales.",
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
    "difficulty": 1,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Tour CN",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Tour CN se reconnait notamment par tour fine dominant Toronto.",
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
    "explanation": "Tour CN est rattache ici a Toronto; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Tour CN se trouve en Canada; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Tour CN ?",
    "choices": [
      "tour de communication",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Tour CN est classe ici dans le repere tour de communication; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Tour CN.",
    "choices": [
      "Tour CN",
      "Biosphere de Montreal",
      "Lotus Temple",
      "Temple d Or"
    ],
    "answerIndex": 0,
    "explanation": "Tour CN correspond au repere visuel : tour fine dominant Toronto.",
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
      "Photo de Biosphere de Montreal",
      "Photo de Lotus Temple",
      "Photo de Temple d Or"
    ]
  },
  {
    "id": "landmark-050-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Biosphere de Montreal",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Biosphere de Montreal se reconnait notamment par dome geodesique de Buckminster Fuller.",
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
    "imageAlt": "Photo de Biosphere de Montreal"
  },
  {
    "id": "landmark-050-city",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : dome geodesique de Buckminster Fuller ?",
    "choices": [
      "Montreal",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Biosphere de Montreal est rattache ici a Montreal; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Biosphere de Montreal ?",
    "choices": [
      "Canada",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Biosphere de Montreal se trouve en Canada; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Biosphere de Montreal ?",
    "choices": [
      "geodesique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Biosphere de Montreal est classe ici dans le repere geodesique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Lotus Temple",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Lotus Temple se reconnait notamment par temple en forme de fleur de lotus.",
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
    "explanation": "Lotus Temple est rattache ici a New Delhi; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Perou"
    ],
    "answerIndex": 0,
    "explanation": "Lotus Temple se trouve en Inde; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Lotus Temple ?",
    "choices": [
      "expressionniste",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Lotus Temple est classe ici dans le repere expressionniste; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Lotus Temple.",
    "choices": [
      "Tour CN",
      "Biosphere de Montreal",
      "Lotus Temple",
      "Temple d Or"
    ],
    "answerIndex": 2,
    "explanation": "Lotus Temple correspond au repere visuel : temple en forme de fleur de lotus.",
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
      "Photo de Biosphere de Montreal",
      "Photo de Lotus Temple",
      "Photo de Temple d Or"
    ]
  },
  {
    "id": "landmark-052-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Temple d Or",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Temple d Or se reconnait notamment par sanctuaire dore entoure d eau.",
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
    "imageAlt": "Photo de Temple d Or"
  },
  {
    "id": "landmark-052-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Dans quelle ville ou zone se trouve Temple d Or ?",
    "choices": [
      "Amritsar",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Temple d Or est rattache ici a Amritsar; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Temple d Or ?",
    "choices": [
      "Inde",
      "Cambodge",
      "Jordanie",
      "Perou"
    ],
    "answerIndex": 0,
    "explanation": "Temple d Or se trouve en Inde; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Temple d Or ?",
    "choices": [
      "sikh",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Temple d Or est classe ici dans le repere sikh; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Borobudur",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur se reconnait notamment par temple en terrasses avec stupas.",
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
    "explanation": "Borobudur est rattache ici a Java central; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Borobudur se trouve en Indonesie; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Borobudur ?",
    "choices": [
      "bouddhique",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur est classe ici dans le repere bouddhique; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Borobudur.",
    "choices": [
      "Borobudur",
      "Kinkaku-ji",
      "Chateau de Himeji",
      "Gyeongbokgung"
    ],
    "answerIndex": 0,
    "explanation": "Borobudur correspond au repere visuel : temple en terrasses avec stupas.",
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
      "Photo de Chateau de Himeji",
      "Photo de Gyeongbokgung"
    ]
  },
  {
    "id": "landmark-054-identify",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Kinkaku-ji",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Kinkaku-ji se reconnait notamment par pavillon dore au bord d un etang.",
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
    "explanation": "Kinkaku-ji est rattache ici a Kyoto; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Kinkaku-ji se trouve en Japon; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Kinkaku-ji ?",
    "choices": [
      "japonais",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Kinkaku-ji est classe ici dans le repere japonais; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Chateau de Himeji",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Himeji se reconnait notamment par chateau blanc surnomme heron blanc.",
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
    "imageAlt": "Photo de Chateau de Himeji"
  },
  {
    "id": "landmark-055-city",
    "topicId": "architecture",
    "difficulty": 2,
    "prompt": "Quelle ville ou zone correspond a ce repere architectural : chateau blanc surnomme heron blanc ?",
    "choices": [
      "Himeji",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Himeji est rattache ici a Himeji; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve Chateau de Himeji ?",
    "choices": [
      "Japon",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Himeji se trouve en Japon; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Chateau de Himeji ?",
    "choices": [
      "japonais",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Chateau de Himeji est classe ici dans le repere japonais; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Chateau de Himeji.",
    "choices": [
      "Borobudur",
      "Kinkaku-ji",
      "Chateau de Himeji",
      "Gyeongbokgung"
    ],
    "answerIndex": 2,
    "explanation": "Chateau de Himeji correspond au repere visuel : chateau blanc surnomme heron blanc.",
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
      "Photo de Chateau de Himeji",
      "Photo de Gyeongbokgung"
    ]
  },
  {
    "id": "landmark-056-identify",
    "topicId": "architecture",
    "difficulty": 3,
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Gyeongbokgung",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung se reconnait notamment par palais royal de la dynastie Joseon.",
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
      "Seoul",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung est rattache ici a Seoul; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
      "Coree du Sud",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung se trouve en Coree du Sud; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Gyeongbokgung ?",
    "choices": [
      "coreen",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Gyeongbokgung est classe ici dans le repere coreen; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Palais Potala",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Palais Potala se reconnait notamment par palais monumental sur colline.",
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
    "explanation": "Palais Potala est rattache ici a Lhassa; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Palais Potala se trouve en Chine; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Palais Potala ?",
    "choices": [
      "tibetain",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Palais Potala est classe ici dans le repere tibetain; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Palais Potala.",
    "choices": [
      "Palais Potala",
      "Grande Muraille de Chine",
      "Temple du Ciel",
      "Machu Picchu"
    ],
    "answerIndex": 0,
    "explanation": "Palais Potala correspond au repere visuel : palais monumental sur colline.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Grande Muraille de Chine",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Grande Muraille de Chine se reconnait notamment par longue muraille defensive.",
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
    "explanation": "Grande Muraille de Chine est rattache ici a Chine du Nord; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "prompt": "Dans quel pays se trouve ce repere architectural : longue muraille defensive ?",
    "choices": [
      "Chine",
      "Inde",
      "Cambodge",
      "Jordanie"
    ],
    "answerIndex": 0,
    "explanation": "Grande Muraille de Chine se trouve en Chine; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Grande Muraille de Chine ?",
    "choices": [
      "fortification",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Grande Muraille de Chine est classe ici dans le repere fortification; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Quel monument ou batiment est visible sur cette photo ?",
    "choices": [
      "Temple du Ciel",
      "Taj Mahal",
      "Angkor Vat",
      "Petra"
    ],
    "answerIndex": 0,
    "explanation": "Temple du Ciel se reconnait notamment par complexe rituel imperial circulaire.",
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
      "Pekin",
      "Agra",
      "Siem Reap",
      "Wadi Musa"
    ],
    "answerIndex": 0,
    "explanation": "Temple du Ciel est rattache ici a Pekin; ce repere aide a situer le monument avant de le reconnaitre sur carte.",
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
    "explanation": "Temple du Ciel se trouve en Chine; retenir le pays connecte architecture et geographie culturelle.",
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
    "prompt": "Quel repere stylistique associer a Temple du Ciel ?",
    "choices": [
      "chinois",
      "moghol",
      "khmer",
      "nabateen"
    ],
    "answerIndex": 0,
    "explanation": "Temple du Ciel est classe ici dans le repere chinois; ce style sert d indice pour comparer les formes architecturales.",
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
    "prompt": "Selectionne l image de Temple du Ciel.",
    "choices": [
      "Palais Potala",
      "Grande Muraille de Chine",
      "Temple du Ciel",
      "Machu Picchu"
    ],
    "answerIndex": 2,
    "explanation": "Temple du Ciel correspond au repere visuel : complexe rituel imperial circulaire.",
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
