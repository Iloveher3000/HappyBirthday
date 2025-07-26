const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Export the site as static HTML for GitHub Pages
  output: 'export',
  
  // Disable Next.js image optimization for static exports
  images: {
    unoptimized: true,
  },

  // Tell Next.js to prefix all asset and route URLs with your repo name
  basePath: isProd ? '/HappyBirthday' : '',
  assetPrefix: isProd ? '/HappyBirthday/' : '',
};

export default nextConfig;