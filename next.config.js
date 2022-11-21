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

    async redirects() {
        return [
            {
                source: "/cv-en",
                destination: "/cv-en.pdf",
                permanent: true,
            },
            {
                source: "/cv-sk",
                destination: "/cv-sk.pdf",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
