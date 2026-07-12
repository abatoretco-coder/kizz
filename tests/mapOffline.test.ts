import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { franceDepartmentBoundaryGeoJson, worldBoundaryGeoJson } from '../src/mapBoundaries';

test('les frontieres de carte sont embarquees', () => {
  assert.ok(worldBoundaryGeoJson.features.length >= 150);
  assert.ok(franceDepartmentBoundaryGeoJson.features.length >= 95);
  assert.ok(worldBoundaryGeoJson.features.every((feature) => feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon'));
  assert.ok(franceDepartmentBoundaryGeoJson.features.every((feature) => feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon'));
});

test('le rendu carte ne depend pas de scripts ou tuiles distants', () => {
  const app = readFileSync('App.tsx', 'utf8');
  const mapSection = app.slice(app.indexOf('function SatelliteMapPicker'), app.indexOf('function Result'));
  for (const forbidden of ['fetch(', 'tileLayer', 'leaflet', 'unpkg.com', 'ArcGIS', 'server.arcgisonline.com', 'raw.githubusercontent.com', 'react-native-webview', 'ImageSource', 'type="raster"', 'natural-earth-world.jpg', 'natural-earth-france.jpg']) {
    assert.equal(mapSection.includes(forbidden), false, `dependance carte distante detectee: ${forbidden}`);
  }
});

test('le rendu carte utilise MapLibre en natif avec donnees embarquees', () => {
  const app = readFileSync('App.tsx', 'utf8');
  const mapSection = app.slice(app.indexOf('function SatelliteMapPicker'), app.indexOf('function Result'));
  for (const expected of ['MapLibreMap', 'GeoJSONSource', 'Camera', 'type="fill"', 'kizz-land-fill', 'kizz-boundary-line', 'dragPan', 'touchZoom', 'doubleTapZoom', 'onPress={handleMapPress}']) {
    assert.equal(mapSection.includes(expected), true, `comportement carte manquant: ${expected}`);
  }
  assert.equal(app.includes("@maplibre/maplibre-react-native"), true, 'la carte doit utiliser MapLibre React Native');
  assert.equal(app.includes('NetworkManager.setConnected(false)'), true, 'MapLibre doit etre force en mode offline sur Android');
  assert.equal(mapSection.includes('ImageSource'), false, 'la carte ne doit plus utiliser de raster plaque sous les frontieres');
  assert.equal(mapSection.includes('type="raster"'), false, 'la carte doit rester vectorielle');
  assert.equal(app.includes('franceDepartmentBoundaryGeoJson'), true, 'les frontieres departementales doivent etre chargees localement');
  assert.equal(app.includes('worldBoundaryGeoJson'), true, 'les frontieres monde doivent etre chargees localement');
  assert.equal(app.includes("import WebView from 'react-native-webview'"), false, 'la carte ne doit plus utiliser WebView');
});
