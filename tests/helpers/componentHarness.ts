import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

type Element = { type: string; props: Record<string, any> };

export function componentHarness(name: string, props: Record<string, unknown>, dependencies: Record<string, unknown> = {}) {
  const source = ts.createSourceFile('App.tsx', readFileSync('App.tsx', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let declaration: ts.FunctionDeclaration | undefined;
  function visit(node: ts.Node) {
    if (ts.isFunctionDeclaration(node) && node.name?.text === name) declaration = node;
    ts.forEachChild(node, visit);
  }
  visit(source);
  assert.ok(declaration);
  const state: any[] = [];
  const effects: { deps: unknown[]; cleanup?: () => void }[] = [];
  const timers = new Map<number, () => void>();
  let stateIndex = 0, effectIndex = 0, timerIndex = 0, dirty = false;
  let pendingEffects: (() => void)[] = [];
  let tree: Element;
  const createElement = (type: string, attributes: Record<string, unknown>, ...children: unknown[]) => ({ type, props: { ...attributes, children } });
  const compiled = ts.transpileModule(declaration.getText(source) + `\n${name};`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React },
  }).outputText;
  const component = runInNewContext(compiled, {
    React: { createElement, Fragment: 'Fragment' },
    View: 'View', Text: 'Text', TextInput: 'TextInput', Pressable: 'Pressable', ScrollView: 'ScrollView', ActivityIndicator: 'ActivityIndicator',
    styles: {},
    useState: (initial: unknown) => {
      const index = stateIndex++;
      if (!(index in state)) state[index] = initial;
      return [state[index], (next: any) => {
        const value = typeof next === 'function' ? next(state[index]) : next;
        if (!Object.is(value, state[index])) { state[index] = value; dirty = true; }
      }];
    },
    useEffect: (callback: () => (() => void) | undefined, deps: unknown[]) => {
      const index = effectIndex++;
      if (!effects[index] || deps.some((value, offset) => !Object.is(value, effects[index].deps[offset]))) {
        pendingEffects.push(() => {
          effects[index]?.cleanup?.();
          effects[index] = { deps, cleanup: callback() };
        });
      }
    },
    setTimeout: (callback: () => void) => { timers.set(++timerIndex, callback); return timerIndex; },
    clearTimeout: (id: number) => timers.delete(id),
    ...dependencies,
  }) as (props: Record<string, unknown>) => Element;
  const elements = (node: any): Element[] => Array.isArray(node) ? node.flatMap(elements)
    : node && typeof node === 'object' ? [node, ...elements(node.props?.children)] : [];
  const text = (node: any): string => Array.isArray(node) ? node.map(text).join('')
    : node && typeof node === 'object' ? text(node.props?.children) : node == null || node === false ? '' : String(node);
  const harness = {
    render() {
      for (let pass = 0; pass < 10; pass++) {
        dirty = false; stateIndex = 0; effectIndex = 0; pendingEffects = [];
        tree = component(props);
        for (const effect of pendingEffects) effect();
        if (!dirty) return harness;
      }
      throw new Error('Rendus sans stabilisation');
    },
    node(id: string) { const node = elements(tree).find((item) => item.props.testID === id); assert.ok(node, id); return node; },
    input(value: string) { elements(tree).find((item) => item.type === 'TextInput')!.props.onChangeText(value); return harness.render(); },
    press(label: string) { const node = elements(tree).find((item) => item.type === 'Pressable' && text(item) === label); assert.ok(node, label); node.props.onPress(); return harness.render(); },
    text() { return text(tree); },
    async settle() { for (const [id, timer] of [...timers]) { timers.delete(id); timer(); } await new Promise(setImmediate); return harness.render(); },
  };
  return harness.render();
}
