var CACHE_NAME = 'bullying-quiz-cache-v1';
var urlsToCache = [
  '/',
  '/Style.css',
  '/Script.js',
  '/1.jgp',
  '/2.jgp',
   '/3.jgp',
   '/4.jgp',
   '/5.jgp',
   '/6.jgp',
   '/7.jgp',
   '/8.jgp',  
   '/99.jgp',
   '/bullying.jpg',
   '/bullying2.jpg',
   '/bullying_2.jpg',
   '/Causas.jpg',
   '/consecuencia1.jpg',
   '/Consecuencias.jpg',
   '/DanielCampos.jpg',
   '/Empezar juego.html',
   '/Error.mp4',
   '/fondo de video4.jpg',
   '/fondo de video5.jpg',
   '/fondo para menu_2.jpg',
   '/fondo para menu_3.jpg',
   '/fondo3.jpg',
   '/game_logo.png',
   '/Imagendelbullying.jpg',
   '/index.html',
   '/info_logo.png',
   '/Información de bullying.html',
   '/JTUHjlg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aX9-obK4.ttf',
   '/JUEGODEPREGUNTAS.html',
   '/logo_empezar.jpg',
   '/logo_menu.jpg',
   '/menú.html',
   '/Paginadevideo.html',
   '/sw.js',
   '/Tipos.Webm',
   '/video1.webm',
  '/video2.webm',
   '/video3.webm',
   '/video_logo.jpg',
   '/logo_empezar.jpg',
   '/logo_menu.jpg',
  '/video_logo.jpg',
  '/Villazón.jpg',
  '/WnznHAc5bAfYB2QRah7pcpNvOx-pjfJ9SIKjZhxO.ttf',
  // Agrega aquí todas las imágenes y archivos que necesitas cachear
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // No cache hit - fetch from network
        return fetch(event.request);
      })
  );
});