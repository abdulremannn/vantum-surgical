/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.DJANGO_API_URL
          ? `${process.env.DJANGO_API_URL}/api/:path*`
          : 'http://localhost:8000/api/:path*',
      },
      {
        source: '/admin/:path*',
        destination: process.env.DJANGO_API_URL
          ? `${process.env.DJANGO_API_URL}/admin/:path*`
          : 'http://localhost:8000/admin/:path*',
      },
    ]
  },
}

module.exports = nextConfig