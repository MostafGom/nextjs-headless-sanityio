/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // webpack5: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'ainextsanity.gogranddev.com',
                port: '',
            },
        ],

    },

};

export default nextConfig;
