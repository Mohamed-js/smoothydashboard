/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@tremor/react']
  }
};

module.exports = nextConfig;
