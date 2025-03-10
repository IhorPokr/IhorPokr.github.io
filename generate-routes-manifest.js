// Script to generate routes-manifest.json for Vercel deployment
const fs = require('fs');
const path = require('path');

const outDir = './out';

// Create dummy routes-manifest.json
const routesManifest = {
  version: 1,
  pages404: true,
  basePath: '',
  redirects: [],
  headers: [],
  dynamicRoutes: [],
  staticRoutes: [],
  dataRoutes: [],
  rsc: {}
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