/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "border-light": "#B6B6B6",
                "border-dark": "#272727",
                "icon-light": "#747474",
                "icon-dark": "#262626",
            }
        },
    },
    plugins: [],
    future: {
        hoverOnlyWhenSupported: true,
    }
};
