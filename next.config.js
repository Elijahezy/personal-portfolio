/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/Ilia_Karavaev_Resume.pdf',
      },
    ];
  },
};

module.exports = nextConfig;
