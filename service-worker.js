"use strict";var precacheConfig=[["/madmenfmx-new/index.html","f6221ad1451ddb4fd762601097d93081"],["/madmenfmx-new/static/css/main.6df005fc.css","743a083f353d2ff2704c22412c388cae"],["/madmenfmx-new/static/js/main.9b7855ee.js","63a004f6fbcdba36815586ec897aed8a"],["/madmenfmx-new/static/media/benefits.000988bb.svg","000988bb0b19bf6094aecd4ec902bf39"],["/madmenfmx-new/static/media/email.3982f0c7.svg","3982f0c74b012a6c5f076de1d016b305"],["/madmenfmx-new/static/media/flugauto_icon.c77ac7b4.svg","c77ac7b4f5d17f86e251c80d78f28d93"],["/madmenfmx-new/static/media/home.d1f39c5d.jpg","d1f39c5d1b39f43b1b59825384bef8e0"],["/madmenfmx-new/static/media/icon_opex.e9bcf150.png","e9bcf1508e3ef5d7c96476277e936d56"],["/madmenfmx-new/static/media/logo_icon.bfbc41d5.svg","bfbc41d5839f65da01bfc9135a3c45cf"],["/madmenfmx-new/static/media/map_1.3e2d4279.jpg","3e2d4279fb2daf0d6917264219d829fe"],["/madmenfmx-new/static/media/map_2.bde36909.jpg","bde36909a352dafbff21a26e7f0b3b02"],["/madmenfmx-new/static/media/mission.9d6a2350.jpg","9d6a235038f5178f15aa0d08206ae4d5"],["/madmenfmx-new/static/media/operations.df458ed1.svg","df458ed1f4fef53a2cd7ecbb0d8047f9"],["/madmenfmx-new/static/media/partner_1.dca60ae6.png","dca60ae610da7d6ba77406cd614af3a8"],["/madmenfmx-new/static/media/partner_2.dd394c80.png","dd394c802e06ae9a32cbb10f20ce7d01"],["/madmenfmx-new/static/media/partner_3.35905153.png","359051530473edbb51f1af956c80058f"],["/madmenfmx-new/static/media/support.c0dab4d2.svg","c0dab4d2c025020b285fb97791b92efa"],["/madmenfmx-new/static/media/team_alex.8211436b.png","8211436bf6aa4994619c725fc46c53b6"],["/madmenfmx-new/static/media/team_dimi.68e4aaac.png","68e4aaac3322cefc3a0c05dfb581359e"],["/madmenfmx-new/static/media/team_frank.815106b2.png","815106b25f5f8b3209c8e5962ae6e0dd"],["/madmenfmx-new/static/media/team_gerrit.75f9da58.png","75f9da58ff62fa37ba97032f89df9405"],["/madmenfmx-new/static/media/team_james.8d265860.png","8d2658601e43925f04ba46a5a5024611"],["/madmenfmx-new/static/media/tech.86383c34.svg","86383c34393bae414c4d3aec9adcb979"],["/madmenfmx-new/static/media/timeline.f2cb8ca4.svg","f2cb8ca48036db3ed9164f13ee8b6a6c"],["/madmenfmx-new/static/media/truck_icon.da2eafcd.svg","da2eafcd14760912a6d212fcdabc8965"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return n.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,n=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),e=urlsToCacheKeys.has(n));var c="/madmenfmx-new/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});