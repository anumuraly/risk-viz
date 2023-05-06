/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
};
 
module.exports = nextConfig;
