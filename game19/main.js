const originalFetch = window.fetch;
const CACHE_DB_NAME = 'gamedata-cache';
const CACHE_STORE_NAME = 'files';

function openCacheDB() {
    if (typeof indexedDB === 'undefined') {
        return Promise.reject(new Error('IndexedDB not supported'));
    }
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(CACHE_DB_NAME, 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(CACHE_STORE_NAME)) {
                db.createObjectStore(CACHE_STORE_NAME);
            }
        };
        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

function getCachedBlob(name) {
    return openCacheDB().then((db) => new Promise((resolve, reject) => {
        const transaction = db.transaction(CACHE_STORE_NAME, 'readonly');
        const request = transaction.objectStore(CACHE_STORE_NAME).get(name);
        request.onsuccess = (event) => resolve(event.target.result || null);
        request.onerror = (event) => reject(event.target.error);
        transaction.oncomplete = () => db.close();
    })).catch(() => null);
}

function setCachedBlob(name, blob) {
    return openCacheDB().then((db) => new Promise((resolve, reject) => {
        const transaction = db.transaction(CACHE_STORE_NAME, 'readwrite');
        const request = transaction.objectStore(CACHE_STORE_NAME).put(blob, name);
        request.onsuccess = () => resolve();
        request.onerror = (event) => reject(event.target.error);
        transaction.oncomplete = () => db.close();
    })).catch(() => {});
}

function mergeFiles(fileParts) {
    const cacheKey = fileParts[0].replace(/\.part\d+$/, '');
    return getCachedBlob(cacheKey).then((cachedBlob) => {
        if (cachedBlob) {
            return URL.createObjectURL(cachedBlob);
        }
        let buffers = [];

        function fetchPart(index) {
            if (index >= fileParts.length) {
                const mergedBlob = new Blob(buffers);
                setCachedBlob(cacheKey, mergedBlob);
                return URL.createObjectURL(mergedBlob);
            }
            return fetch(fileParts[index]).then((response) => {
                if (!response.ok) throw new Error('Missing part: ' + fileParts[index]);
                return response.arrayBuffer();
            }).then((data) => {
                buffers.push(data);
                return fetchPart(index + 1);
            });
        }
        return fetchPart(0);
    });
}

function getParts(file, start, end) {
    let parts = [];
    for (let i = start; i <= end; i++) {
        parts.push(file + '.part' + i);
    }
    return parts;
}
Promise.all([
    mergeFiles(getParts('Build/gamedata.pck', 1, 17)),
    mergeFiles(getParts('Build/gamedata.wasm', 1, 3))
]).then(([pckUrl, wasmUrl]) => {
    window.fetch = async function (url, ...args) {
        if (url.endsWith('gamedata.pck')) {
            return originalFetch(pckUrl, ...args);
        } else if (url.endsWith('gamedata.wasm')) {
            return originalFetch(wasmUrl, ...args);
        } else {
            return originalFetch(url, ...args);
        }
    };
    window.godotRunStart();
}).catch((err) => {
    console.error('Error loading game files:', err);
    window.godotRunStart();
});