// Script to generate routes-manifest.json for Vercel deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = './out';

// Create dummy routes-manifest.json with complete structure
const routesManifest = {
  version: 3,
  pages404: true,
  basePath: "",
  redirects: [],
  headers: [],
  dynamicRoutes: [],
  staticRoutes: [],
  dataRoutes: [],
  rsc: {},
  rewrites: {
    beforeFiles: [],
    afterFiles: [],
    fallback: []
  },
  routes: {
    beforeFiles: [],
    afterFiles: [],
    fallback: []
  }
};

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Write the file
fs.writeFileSync(
  path.join(outDir, 'routes-manifest.json'),
  JSON.stringify(routesManifest, null, 2)
);

console.log('✅ routes-manifest.json generated successfully'); 