const WEB_APP_URL = window.location.origin;
const OAUTH_OSM = Object.freeze({
  ...window.OAUTH_OSM,
  REDIRECT_URI: WEB_APP_URL,
  AUTH_URL: "https://www.openstreetmap.org/oauth2/authorize",
  TOKEN_URL: "https://www.openstreetmap.org/oauth2/token",
  SCOPES: ["read_prefs", "write_api", "write_notes", "write_blocks"]
});
const TILE_LAYER_URL = window.OSM_TILE_URL;
const TILE_LAYER_ATTR = window.OSM_ATTRIBUTION;

const map = L.map('map');
L.tileLayer(TILE_LAYER_URL, { attribution: TILE_LAYER_ATTR }).addTo(map);

let manualMode = false;
let currentGeo = null;
let avatarPos = null;

const avatarMarker = L.marker([0, 0]).addTo(map);

function setAvatar(position) {
  avatarPos = position;
  avatarMarker.setLatLng(position);
  if (!manualMode) {
    map.setView(position, 16);
  }
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition((pos) => {
    currentGeo = [pos.coords.latitude, pos.coords.longitude];
    if (!manualMode) {
      setAvatar(currentGeo);
    }
  }, (err) => {
    console.error('Geolocation error', err);
  }, { enableHighAccuracy: true });
} else {
  alert('Geolocation not supported');
}

const toggleBtn = document.getElementById('modeToggle');
const joystickZone = document.getElementById('joystick-zone');
let joystick;

toggleBtn.addEventListener('click', () => {
  manualMode = !manualMode;
  if (manualMode) {
    toggleBtn.textContent = 'Авто режим';
    joystickZone.classList.remove('hidden');
    avatarPos = currentGeo || avatarPos;
    joystick = nipplejs.create({
      zone: joystickZone,
      mode: 'static',
      position: { left: '50%', top: '50%' }
    });
    joystick.on('move', (evt, data) => {
      if (!avatarPos) return;
      const speed = 0.0001 * data.force;
      const dx = Math.cos(data.angle.radian) * speed;
      const dy = Math.sin(data.angle.radian) * speed;
      avatarPos = [avatarPos[0] + dy, avatarPos[1] + dx];
      avatarMarker.setLatLng(avatarPos);
      keepAvatarVisible();
    });
  } else {
    toggleBtn.textContent = 'Ручной режим';
    if (joystick) {
      joystick.destroy();
      joystick = null;
    }
    joystickZone.classList.add('hidden');
    if (currentGeo) {
      setAvatar(currentGeo);
    }
  }
});

function keepAvatarVisible() {
  const padding = 80; // comfortable zone in pixels
  const point = map.latLngToContainerPoint(avatarPos);
  const size = map.getSize();
  const pan = { x: 0, y: 0 };
  if (point.x < padding) pan.x = point.x - padding;
  else if (point.x > size.x - padding) pan.x = point.x - (size.x - padding);
  if (point.y < padding) pan.y = point.y - padding;
  else if (point.y > size.y - padding) pan.y = point.y - (size.y - padding);
  if (pan.x !== 0 || pan.y !== 0) {
    map.panBy(pan, { animate: false });
  }
}
