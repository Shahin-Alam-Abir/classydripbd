/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: '/home/abir/classydripbd',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'menslifestylebd.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
