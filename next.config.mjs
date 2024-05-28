/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/:path*',
            has: [{ type: 'host', value: 'www.mensstyling.club' }],
            destination: 'https://mensstyling.club/:path*',
            permanent: true
          },
        ]
      },
};

export default nextConfig;
