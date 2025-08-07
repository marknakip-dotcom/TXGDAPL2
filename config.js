diff --git a//dev/null b/config.example.js
index 0000000000000000000000000000000000000000..4b0e25677144f05afb09bd0f45aff0ac735dcff7 100644
--- a//dev/null
+++ b/config.example.js
@@ -0,0 +1,10 @@
+// Скопируйте этот файл как config.js и не добавляйте его в Git.
+// Здесь определены параметры карты OpenStreetMap и OAuth-ключи.
+window.OSM_TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
+window.OSM_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
+
+// Замените значения на свои собственные ключи перед запуском приложения.
+window.OAUTH_OSM = {
+  CLIENT_ID: "tmeGs8jZXCmx5xzS1EPPUiFr3LE0K0WNdYXIYnoP6kCM",
+  CLIENT_SECRET: "oW9Y5Lz7dSk8RNzA-k81XFF5RzOYAY1aLAXbdTnqXxw"
+};


