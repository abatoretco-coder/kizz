import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { franceDepartmentBoundaryGeoJson, worldBoundaryGeoJson } from '../src/mapBoundaries';

test('les frontieres de carte sont embarquees', () => {
  assert.ok(worldBoundaryGeoJson.features.length >= 150);
  assert.ok(franceDepartmentBoundaryGeoJson.features.length >= 95);
});

test('le rendu carte ne depend pas de scripts ou tuiles distants', () => {
  const app = readFileSync('App.tsx', 'utf8');
  const mapSection = app.slice(app.indexOf('function satelliteMapHtml'), app.indexOf('function Result'));
  for (const forbidden of ['fetch(', 'tileLayer', 'leaflet', 'unpkg.com', 'ArcGIS', 'server.arcgisonline.com', 'raw.githubusercontent.com']) {
    assert.equal(mapSection.includes(forbidden), false, `dependance carte distante detectee: ${forbidden}`);
  }
});

test('le rendu carte utilise une camera tactile fluide', () => {
  const app = readFileSync('App.tsx', 'utf8');
  const mapSection = app.slice(app.indexOf('function satelliteMapHtml'), app.indexOf('function Result'));
  for (const expected of ['<canvas', 'pointerdown', 'pointermove', 'wheel', 'requestAnimationFrame', 'project(lon, lat)', 'zoomAround']) {
    assert.equal(mapSection.includes(expected), true, `comportement carte manquant: ${expected}`);
  }
  assert.equal(mapSection.includes('<svg'), false, 'la carte ne doit plus utiliser le rendu SVG rigide');
});
