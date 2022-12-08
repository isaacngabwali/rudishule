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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/Mondi-Dolphin-Premium-Rim-500x500.jpg',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/5xK7nPV/banner-10.webp',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/m0VKM59/banner-11.webp',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/01/Picface-Champion-Exercise-Book-570x664.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/01/Kadio-KD-82-MS-240-Functions-Calculator-500x456.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/Mondi-Dolphin-Premium-Rim.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/Bic-Pens.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/04/Crayons.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/Hufa-Mathematical-Set-768x768.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/04/Top-Quality-Snowman-Permanent-Marker-768x576.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/Nataraj-Construct-Mathematical-Set.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/Nataraj-Pens-Box.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.mlbliving.com',
        port: '',
        pathname: '/wp-content/uploads/2021/04/Dozen-Pencils-1.jpg',
      },
    ],
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
