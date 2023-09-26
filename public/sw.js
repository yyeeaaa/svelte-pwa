const urlsToCache = [
    "./",
    "./assets/**",
    "./images/**",
    "./vite.svg",
    "./manifest.json",
]

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
                return cache.addAll(urlsToCache)
            }
        )
    )
})

self.addEventListener("message", e => {
    console.log(`The client sent me a message: ${e.data}`);

    if(e.data == "update") {
        console.log("Update")
        e.waitUntil(
            caches.open("static").then(cache => {
                    return cache.addAll(urlsToCache)
                }
            )
        )
    }
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})