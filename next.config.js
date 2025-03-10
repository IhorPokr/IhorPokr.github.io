/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Config for static export
  trailingSlash: true,
  distDir: '.next'
}
