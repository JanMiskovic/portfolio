const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            xs: "375px",
            ...defaultTheme.screens,
        },
        extend: {
            screens: {
                lg: "1084px",
            },
            colors: {
                "body-light": "#FFF",
                "body-dark": "#1A1A1A",
                "bg-light": "#FAFAFA",
                "bg-dark": "#313131",
                "border-light": "#B6B6B6",
                "border-dark": "#585858",
                "icon-light": "#747474",
                "icon-dark": "#262626",
            },
            fontSize: {
                "2xs": "0.55rem",
            },
            boxShadow: {
                sharp: "4px 4px 0 rgba(0, 0, 0, 0.3)",
                "sharp-dark": "4px 4px 0 rgba(0, 0, 0, 0.6)",
            },
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    },
};
