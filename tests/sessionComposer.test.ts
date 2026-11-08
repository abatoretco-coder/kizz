import assert from 'node:assert/strict';
import test from 'node:test';
import { componentHarness } from './helpers/componentHarness';
import { subthemesForTopics } from '../src/subthemes';

const question = (id: string, prompt: string) => ({ id, prompt, topicId: 'geography', difficulty: 1, type: 'multiple-choice', tags: [] });

test('composer conserve les questions sélectionnées entre deux recherches', async () => {
  const alpha = question('a', 'Question Alpha');
  const beta = question('b', 'Question Beta');
  let launched: any[] = [];
  const app = componentHarness('Search', { onClose() {}, onStart: (rows: any[]) => { launched = rows; } }, {
    searchQuestions: async (query: string) => query === 'alpha' ? [alpha] : [beta],
  });
  app.input('alpha'); await app.settle();
  app.press('Question AlphaQCM · Découverte');
  app.input('beta'); await app.settle();
  app.press('Question BetaQCM · Découverte');
  app.press('Lancer 2 questions');
  assert.deepEqual(Array.from(launched, (row) => row.id), ['a', 'b']);
});

test('une ancienne recherche lente ne remplace pas la plus récente', async () => {
  let resolveOld!: (rows: any[]) => void;
  const old = new Promise<any[]>((resolve) => { resolveOld = resolve; });
  const app = componentHarness('Search', { onClose() {}, onStart() {} }, {
    searchQuestions: (query: string) => query === 'ancienne' ? old : Promise.resolve([question('b', 'Nouvelle question')]),
  });
  app.input('ancienne'); await app.settle();
  app.input('nouvelle'); await app.settle();
  resolveOld([question('a', 'Ancienne question')]); await app.settle();
  assert.ok(app.text().includes('Nouvelle question'));
  assert.ok(!app.text().includes('Ancienne question'));
});

test('Tous les thèmes retire aussi le filtre de sous-thème précédent', () => {
  let filters: any;
  const app = componentHarness('SessionConfigurator', {
    topics: [{ id: 'geography', title: 'Géographie' }], initialTopicIds: ['geography'], onClose() {}, onStart: (value: unknown) => { filters = value; },
  }, { subthemesForTopics });
  app.node('config-subtheme-geo-capitals').props.onPress(); app.render();
  app.node('config-topic-all').props.onPress(); app.render();
  app.node('launch-configured-session').props.onPress();
  assert.equal(filters.topicIds.length, 0);
  assert.equal(filters.subthemes.length, 0);
});

test('la sélection reste consultable sans recherche et permet de retirer une question', async () => {
  const app = componentHarness('Search', { onClose() {}, onStart() {} }, {
    searchQuestions: async () => [question('a', 'Question Alpha')],
  });
  app.input('alpha'); await app.settle();
  app.node('search-question-a').props.onPress(); app.render();
  app.input(''); await app.settle();
  app.node('search-selection-tab').props.onPress(); app.render();
  assert.equal(app.node('search-question-a').props.accessibilityState.checked, true);
  app.node('search-question-a').props.onPress(); app.render();
  assert.equal(app.node('launch-search-session').props.disabled, true);
  assert.ok(app.text().includes('Ta sélection est vide'));
});

test('une erreur de recherche est expliquée et peut être réessayée', async () => {
  let calls = 0;
  const app = componentHarness('Search', { onClose() {}, onStart() {} }, {
    searchQuestions: async () => {
      if (++calls === 1) throw new Error('SQLite indisponible');
      return [question('a', 'Question Alpha')];
    },
  });
  app.input('alpha'); await app.settle();
  assert.ok(app.text().includes('La recherche a échoué'));
  app.node('search-retry').props.onPress(); app.render(); await app.settle();
  assert.ok(app.text().includes('Question Alpha'));
  assert.ok(!app.text().includes('La recherche a échoué'));
});
