/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/login",
                destination: "/auth"
            },
            {
                source: "/register",
                destination: "/auth"
            }
        ]
    }
}

module.exports = nextConfig
