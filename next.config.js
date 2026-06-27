/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'menslifestylebd.com',
            },
        ],
    },
};

module.exports = nextConfig;
