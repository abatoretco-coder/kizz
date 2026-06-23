import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const rawName = process.argv.slice(2).join(' ').trim() || 'Ma banque';
const id = rawName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'ma-banque';
const pack = {
  format: 'kizz.quiz-pack', version: 1, id: `${id}-v1`, name: rawName, language: 'fr',
  topics: [{ id, title: rawName, subtitle: 'Mon nouveau thème', icon: rawName[0].toUpperCase(), color: '#5367C7' }],
  questions: [
    { id: `${id}-001`, topicId: id, difficulty: 1, type: 'multiple-choice', prompt: 'Ma première question ?', choices: ['Bonne réponse', 'Choix 2', 'Choix 3', 'Choix 4'], answerIndex: 0, explanation: 'Une courte explication utile.', tags: [], sourceLabel: 'Création personnelle', learnMoreUrl: 'https://fr.wikipedia.org/' },
    { id: `${id}-002`, topicId: id, difficulty: 1, type: 'free-text', prompt: 'Ma première question libre ?', acceptedAnswers: ['Réponse acceptée'], explanation: 'Une courte explication utile.', tags: [], sourceLabel: 'Création personnelle', learnMoreUrl: 'https://fr.wikipedia.org/' }
  ]
};

const directory = resolve('generated-packs');
await mkdir(directory, { recursive: true });
const target = resolve(directory, `${id}.json`);
await writeFile(target, `${JSON.stringify(pack, null, 2)}\n`, 'utf8');
console.log(target);
