/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'standalone',
  env: {
    SUPERTOKENS_APP_NAME: process.env.SUPERTOKENS_APP_NAME,
    SUPERTOKENS_WEBSITE_DOMAIN: process.env.SUPERTOKENS_WEBSITE_DOMAIN,
    SUPERTOKENS_API_DOMAIN: process.env.SUPERTOKENS_API_DOMAIN,
    SUPERTOKENS_API_BASE_PATH: process.env.SUPERTOKENS_API_BASE_PATH,
    SUPERTOKENS_WEBSITE_BASE_PATH: process.env.SUPERTOKENS_WEBSITE_BASE_PATH,
  },
};

module.exports = nextConfig;
