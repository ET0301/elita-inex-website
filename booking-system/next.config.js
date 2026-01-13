/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/webhook/:path*',
                destination: 'https://et0301.app.n8n.cloud/webhook/:path*',
            },
        ]
    },
}

module.exports = nextConfig
