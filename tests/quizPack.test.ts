import assert from 'node:assert/strict';
import test from 'node:test';
import { QUIZ_PACK_FORMAT } from '../src/domain';
import { parseQuizPack } from '../src/quizPackSchema';

test('importe une banque avec question map-point', () => {
  const pack = parseQuizPack(JSON.stringify({
    format: QUIZ_PACK_FORMAT,
    version: 1,
    id: 'geo-map-pack',
    name: 'Carte test',
    language: 'fr',
    topics: [{ id: 'geography', title: 'Geographie', subtitle: 'Carte', icon: 'G', color: '#3F8F72' }],
    questions: [{
      id: 'geo-test-map',
      topicId: 'geography',
      difficulty: 1,
      type: 'map-point',
      prompt: 'Place Paris.',
      geoTarget: { label: 'Paris', lat: 48.8566, lon: 2.3522, toleranceKm: 350 },
      explanation: 'Paris est en France.',
      tags: ['map-point'],
      sourceLabel: 'Test',
    }],
  }));
  assert.equal(pack.questions[0].type, 'map-point');
  assert.equal(pack.questions[0].geoTarget?.label, 'Paris');
});
