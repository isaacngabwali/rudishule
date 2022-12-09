/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require('./next-i18next.config');
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});

module.exports = withPWA({
  images: {
    domains: ['www.mlbliving.com', 'images.unsplash.com', 'upload.wikimedia.org', '141.145.197.97']
  },
  reactStrictMode: true,
  i18n,
  ...(process.env.NODE_ENV === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
