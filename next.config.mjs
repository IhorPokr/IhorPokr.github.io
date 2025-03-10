/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No custom webpack config - let Vercel handle it
}

export default nextConfig;
