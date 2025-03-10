/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Fix for routes-manifest.json error on Vercel
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Generate a dummy routes-manifest.json file for Vercel deployment
      const { writeFileSync, mkdirSync } = require('fs');
      const { join } = require('path');
      
      try {
        mkdirSync('./out', { recursive: true });
        writeFileSync(
          join('./out', 'routes-manifest.json'),
          JSON.stringify({ version: 1, pages404: true, basePath: '', redirects: [], headers: [], dynamicRoutes: [], staticRoutes: [], dataRoutes: [], rsc: {} })
        );
      } catch (err) {
        console.warn('Could not generate routes-manifest.json', err);
      }
    }
    return config;
  }
}

export default nextConfig
