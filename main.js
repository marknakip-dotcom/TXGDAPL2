const WEB_APP_URL = window.location.origin;

const OAUTH_OSM = window.OAUTH_OSM;
const TILE_LAYER_URL = window.OSM_TILE_URL;
const TILE_LAYER_ATTR = window.OSM_ATTRIBUTION;

const map = L.map("map");
L.tileLayer(TILE_LAYER_URL, { attribution: TILE_LAYER_ATTR }).addTo(map);

// ... остальной код без изменений ...
