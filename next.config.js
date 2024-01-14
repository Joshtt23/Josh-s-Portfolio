/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.ibb.co'], // Add other domains as needed
  },
}

module.exports = nextConfig;
