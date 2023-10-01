/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiUrl: 'https://api.openweathermap.org/data/2.5/onecall',
    apiKey: 'd610395e85b50074b834a0234b0776db',
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
