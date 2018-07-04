const staticCacheName= 'restaurant-review-';
const staticCacheVer = 'v1';
const staticCache = staticCacheName + staticCacheVer; //full version name

/**
* @description Caches site content
* @param {string} cache
* @param {string} staticCache
* @returns {string} During service worker installation, caches site content
*/
self.addEventListener('install', function (event){
  event.waitUntil(
    caches.open(staticCache).then(function(cache){
      return cache.addAll([
        'restaurant.html',
        'index.html',
        'js/main.js',
        'js/dbhelper.js',
        'js/restaurant_info.js',
        'js/service_worker.js',
        'css/styles.css',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'
      ]);
    })
  );
});

/**
* @description Deletes old cache from old version
* @param {string} cacheName
* @param {string} staticCacheName
* @param {string} staticCache
* @returns {string} During service worker activation, deletes all cache that is no longer found in new service worker version
*/
self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith(staticCacheName) && cacheName != staticCache;
        }).map(function(cacheName){
          return caches.delete(cacheName);
        })
      );
    })
  );
});


/**
* @description fetches from cache or server if content is not cached
* @param {string} res
* @returns {string} cache if it is found locally or the event.request from the server if it is not found
*/
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(res){
      if(res) return res;
      return fetch(event.request);
    })
  );
});