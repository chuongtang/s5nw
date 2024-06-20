/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
