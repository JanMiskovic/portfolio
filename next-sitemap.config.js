/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: "https://janmiskovic.com",
    alternateRefs: [
        {
            href: "https://janmiskovic.com/sk",
            hreflang: "sk",
        },
        {
            href: "https://janmiskovic.com",
            hreflang: "en",
        },
    ],
    generateIndexSitemap: false
};