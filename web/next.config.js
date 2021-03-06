const withPWA = require('next-pwa')
const withImages = require('next-images')

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
    reactStrictMode: true,
})
