/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'placehold.co'],
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      {
        source: '/skin-care',
        destination: '/skin-care',
      },
      {
        source: '/pain-relief',
        destination: '/pain-relief',
      },
      {
        source: '/wholesale',
        destination: '/wholesale',
      },
    ]
  },
}

module.exports = nextConfig 