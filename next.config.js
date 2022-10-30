/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en", "sk"],
        defaultLocale: "en",
    },

    async headers() {
        const headers = [];
        if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
            headers.push({
                headers: [
                    {
                        key: "X-Robots-Tag",
                        value: "noindex",
                    },
                ],
                source: "/:path*",
            });
        }
        return headers;
    },
};

module.exports = nextConfig;
