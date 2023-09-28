/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiUrl: 'https://api.openweathermap.org/data/2.5/onecall',
    apiKey: '78b705a31f5b7bebcfe38a2624152e8d',
    imageUrl: 'https://openweathermap.org/img/wn/'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/wn/**',
      },
    ],
  },
}

module.exports = nextConfig
