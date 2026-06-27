import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import test from 'node:test';
import { franceDepartmentBoundaryGeoJson, worldBoundaryGeoJson } from '../src/mapBoundaries';

test('les frontieres de carte sont embarquees', () => {
  assert.ok(worldBoundaryGeoJson.features.length >= 150);
  assert.ok(franceDepartmentBoundaryGeoJson.features.length >= 95);
  assert.equal(existsSync('assets/maps/natural-earth-world.jpg'), true);
  assert.equal(existsSync('assets/maps/natural-earth-france.jpg'), true);
  assert.ok(statSync('assets/maps/natural-earth-world.jpg').size > 8_000_000);
  assert.ok(statSync('assets/maps/natural-earth-france.jpg').size > 1_000_000);
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
  assert.equal(mapSection.includes('drawSatelliteBase'), true, 'la carte doit dessiner un fond cartographique embarque');
  assert.equal(app.includes("import { offlineMapDataUris } from './src/generated/offlineMapData';"), true, 'les fonds doivent etre embarques dans le bundle offline');
  assert.equal(app.includes('offlineMapDataUris.world'), true, 'le fond monde doit etre transmis a la WebView en data URI');
  assert.equal(app.includes('offlineMapDataUris.france'), true, 'le fond France doit etre transmis a la WebView en data URI');
  assert.equal(app.includes('key={`${question.id}-${mapKind}`}'), true, 'la WebView doit etre remontee quand le type de carte change');
  const offlineMapData = readFileSync('src/generated/offlineMapData.ts', 'utf8');
  assert.equal(offlineMapData.includes('data:image/jpeg;base64,'), true, 'le rendu WebView ne doit pas dependre d un acces file:// fragile');
  assert.equal(mapSection.includes('satelliteBounds'), true, 'chaque raster doit declarer ses bornes geographiques');
  assert.equal(mapSection.includes('<svg'), false, 'la carte ne doit plus utiliser le rendu SVG rigide');
});
