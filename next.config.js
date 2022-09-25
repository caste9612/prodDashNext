/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   async rewrites() {
    return [
      {
        source: '/api/',
        destination: 'http://localhost:8080/count/*',
      },
    ]
  }, 
}



module.exports = nextConfig
