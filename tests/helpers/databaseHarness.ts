import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { DatabaseSync } from 'node:sqlite';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { questions, topics } from '../../src/content';

// Run the application's real SQL against SQLite; only the Expo transport is replaced.
export function createDatabaseHarness() {
  const db = new DatabaseSync(':memory:');
  const content = { questions: questions.map((row) => ({ ...row })), topics: topics.map((row) => ({ ...row })) };
  const adapter = {
    execAsync: async (sql: string) => { db.exec(sql); },
    runAsync: async (sql: string, ...params: (string | number | null)[]) => {
      const result = db.prepare(sql).run(...params);
      return { changes: Number(result.changes), lastInsertRowId: Number(result.lastInsertRowid) };
    },
    getAllAsync: async (sql: string, ...params: (string | number | null)[]) => db.prepare(sql).all(...params),
    getFirstAsync: async (sql: string, ...params: (string | number | null)[]) => db.prepare(sql).get(...params) ?? null,
    withTransactionAsync: async (callback: () => Promise<void>) => {
      db.exec('BEGIN');
      try { await callback(); db.exec('COMMIT'); }
      catch (error) { db.exec('ROLLBACK'); throw error; }
    },
  };
  const sourceUrl = new URL('../../src/database.ts', import.meta.url);
  const localRequire = createRequire(sourceUrl);
  const compiled = ts.transpileModule(readFileSync(sourceUrl, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const module = { exports: {} };
  runInNewContext(compiled, {
    module, exports: module.exports, console,
    require: (name: string) => name === 'expo-sqlite'
      ? { openDatabaseAsync: async () => adapter }
      : name === './content' ? content : localRequire(name),
  });
  return { db, content, api: module.exports as typeof import('../../src/database') };
}
