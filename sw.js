const name = "v15";
const cacheFiles = [
"/",
"/index.html",
"/css/index.css",
"/js/index.js",
"/icons/icon.png"
];



async function addToCache(resources) {
	let cache = await caches.open(name);
	await cache.addAll(resources);
}

async function putInCache(req, res) {
	let cache = await caches.open(name);
	await cache.put(req, res);
}

async function deleteCache(cacheName) {
	await caches.delete(cacheName);
}

async function cacheFirst(resource) {
	let res = await caches.match(resource);
	if (res) {
		return res;
	}
	res = await fetch(resource);
	putInCache(resource, res.clone());
	return res;
}

self.addEventListener("install", function(e) {
	e.waitUntil(addToCache(cacheFiles));
});

self.addEventListener("activate", function(e) {
	deleteCache("v14");
});

self.addEventListener("fetch", function(e) {
	e.respondWith(cacheFirst(e.request));
});