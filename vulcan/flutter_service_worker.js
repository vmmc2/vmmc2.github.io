'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "aa588dc0141da169c310e3b644597164",
"assets/assets/circuit.png": "adcd61e30047fc44548bb1160f73f3ce",
"assets/assets/githubicon.jpg": "40b2ff5a0672196bc4122a948ed00830",
"assets/assets/logo.png": "ce2e3089b9730fb8f93e26addefa30c4",
"assets/assets/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/FontManifest.json": "9dc0ffa7617027e1e41f32f1b2972b79",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "57ca2f1b96b6feed7e88cc84e740fb01",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d0394771a4dc5808bbe43f47247a72fb",
"/": "d0394771a4dc5808bbe43f47247a72fb",
"main.dart.js": "c41e65bc3eee672d9eca2bf0b41e4c5d",
"manifest.json": "a3df1867bba09b7ed7269aa333a94426",
"styles.css": "81cb082600dd5f7ff4151b5e4ecdc95a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
