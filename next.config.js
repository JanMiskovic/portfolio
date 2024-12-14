/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en", "sk"],
        defaultLocale: "en",
    },
    experimental: {
        // reactCompiler: true,
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
                destination: "/Ján%20Miškovič%20-%20Resume.pdf",
                permanent: true,
            },
            {
                source: "/cv-sk",
                destination: "/Ján%20Miškovič%20-%20Životopis.pdf",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
