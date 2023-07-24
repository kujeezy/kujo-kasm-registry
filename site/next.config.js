/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kujo Kasm Registry',
    description: 'Kujo Kasm Workspaces Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/kujeezy/kujo-kasm-registry/',
    contactUrl: 'https://github.com/kujeezy/kujo-kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kujo-kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
