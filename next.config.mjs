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
        ],

    },
    output: "standalone",
    server: {
        host: '0.0.0.0',
    },
};

export default nextConfig;
