// параметры тайлов OpenStreetMap
window.OSM_TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
window.OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// OAuth‑ключи для OpenStreetMap
window.OAUTH_OSM = Object.freeze({
  CLIENT_ID: "tmeGs8jZXCmx5xzS1EPPUiFr3LE0K0WNdYXIYnoP6kCM",
  CLIENT_SECRET: "oW9Y5Lz7dSk8RNzA-k81XFF5RzOYAY1aLAXbdTnqXxw",
  REDIRECT_URI: window.location.origin,
  AUTH_URL: "https://www.openstreetmap.org/oauth2/authorize",
  TOKEN_URL: "https://www.openstreetmap.org/oauth2/token",
  SCOPES: ["read_prefs", "write_api", "write_notes", "write_blocks"]
});
