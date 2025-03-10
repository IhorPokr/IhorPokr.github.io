/** @type {import('next').NextConfig} */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Fix for routes-manifest.json error on Vercel
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Generate a dummy routes-manifest.json file for Vercel deployment
      try {
        fs.mkdirSync('./out', { recursive: true });
        fs.writeFileSync(
          path.join('./out', 'routes-manifest.json'),
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
