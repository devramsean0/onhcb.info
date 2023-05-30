/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bank.hackclub.com',
        port: '',
        pathname: '/**/*'
      },
      {
        protocol: 'https',
        hostname: 'gravatar.com',
        port: '',
        pathname: '/**/*'
      }
    ],
  },
}

module.exports = nextConfig
