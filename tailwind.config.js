const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        screens: {
            "xs": "375px",
            ...defaultTheme.screens,
        },
        extend: {
            screens: {
                "lg": "1084px",
            },
            colors: {
                "bg-light": "#FAFAFA",
                "bg-dark": "#424242",
                "border-light": "#B6B6B6",
                "border-dark": "#585858",
                "icon-light": "#747474",
                "icon-dark": "#262626",
            },
            transitionProperty: {
                "background": "background-color, background, border",
            },
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    }
};
