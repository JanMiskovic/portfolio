/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en", "sk"],
        defaultLocale: "en",
        localeDetection: false,
    },
};

module.exports = nextConfig;
