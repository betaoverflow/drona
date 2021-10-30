if (!self.define) {
    const e = e => {
            'require' !== e && (e += '.js')
            let s = Promise.resolve()
            return (
                t[e] ||
                    (s = new Promise(async s => {
                        if ('document' in self) {
                            const t = document.createElement('script')
                            ;(t.src = e), document.head.appendChild(t), (t.onload = s)
                        } else importScripts(e), s()
                    })),
                s.then(() => {
                    if (!t[e]) throw new Error(`Module ${e} didn’t register its module`)
                    return t[e]
                })
            )
        },
        s = (s, t) => {
            Promise.all(s.map(e)).then(e => t(1 === e.length ? e[0] : e))
        },
        t = { require: Promise.resolve(s) }
    self.define = (s, n, a) => {
        t[s] ||
            (t[s] = Promise.resolve().then(() => {
                let t = {}
                const i = { uri: location.origin + s.slice(1) }
                return Promise.all(
                    n.map(s => {
                        switch (s) {
                            case 'exports':
                                return t
                            case 'module':
                                return i
                            default:
                                return e(s)
                        }
                    })
                ).then(e => {
                    const s = a(...e)
                    return t.default || (t.default = s), t
                })
            }))
    }
}
define('./sw.js', ['./workbox-4a677df8'], function (e) {
    'use strict'
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/144x144.png', revision: '5e5ba500c1adc700b864f7c20829e587' },
                { url: '/96x96.png', revision: '098aa5c6fe5cec17124c3853051ceb16' },
                { url: '/_next/static/E7pYqxn9Z7Wdut_KGTRtE/_buildManifest.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/E7pYqxn9Z7Wdut_KGTRtE/_middlewareManifest.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/E7pYqxn9Z7Wdut_KGTRtE/_ssgManifest.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/chunks/framework-6e4ba497ae0c8a3f.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/chunks/main-7f89a8e4ab6a00d6.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/chunks/pages/_app-46de0b05116212df.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/chunks/pages/index-2e1274cba17015c0.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/chunks/webpack-514908bffb652963.js', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/css/27d177a30947857b.css', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/_next/static/css/d8c4ca6d17bdb613.css', revision: 'E7pYqxn9Z7Wdut_KGTRtE' },
                { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
                { url: '/manifest.json', revision: 'ce35d1b4bdf894e649b2b9d5a86fe40a' },
                { url: '/vercel.svg', revision: 'abc642d3efb39cbc64811835e4e88743' },
            ],
            { ignoreURLParametersMatching: [] }
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({ request: e, response: s, event: t, state: n }) =>
                            s && 'opaqueredirect' === s.type
                                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                                : s,
                    },
                ],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts-webfonts',
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: 'google-fonts-stylesheets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-image',
                plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: 'static-audio-assets',
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: 'static-video-assets',
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-data',
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: 'static-data-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1
                const s = e.pathname
                return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
            },
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1
                return !e.pathname.startsWith('/api/')
            },
            new e.NetworkFirst({
                cacheName: 'others',
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET'
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: 'cross-origin',
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
            }),
            'GET'
        )
})
