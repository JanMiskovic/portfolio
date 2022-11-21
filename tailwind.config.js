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

                "grad-border-blue": "#B8E4FF",
                "grad-border-blue-dark": "#88B9D7",

                "grad-border-purple": "#CDB7FF",
                "grad-border-purple-dark": "#A088D7",

                "grad-border-green": "#C0FFB7",
                "grad-border-green-dark": "#94D788",

                "grad-border-yellow": "#FFE564",
                "grad-border-yellow-dark": "#D7CA88",

                "grad-border-red": "#FFB8B8",
                "grad-border-red-dark": "#D78888",

                "grad-bg-blue": "#F2FAFF",
                "grad-bg-blue-dark": "#293842",

                "grad-bg-purple": "#F6F2FF",
                "grad-bg-purple-dark": "#312942",

                "grad-bg-green": "#F4FFF2",
                "grad-bg-green-dark": "#2D4229",

                "grad-bg-yellow": "#FFFDF2",
                "grad-bg-yellow-dark": "#423E29",

                "grad-bg-red": "#FFF2F2",
                "grad-bg-red-dark": "#422929",
            },
            fontSize: {
                "2xs": "0.55rem",
            },
            boxShadow: {
                sharp: "4px 4px 0 rgba(0, 0, 0, 0.3)",
                "sharp-dark": "4px 4px 0 rgba(0, 0, 0, 0.6)",
            },
            backgroundImage: {
                "gradient-110deg":
                    "linear-gradient(110deg, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    },
};
