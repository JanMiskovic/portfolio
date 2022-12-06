/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                xs: "375px",
                lg: "1084px",
            },
            colors: {
                "body-light": "#FFF",
                "body-dark": "#1A1A1A",

                "bg-light": "#FAFAFA",
                "bg-dark": "#313131",

                "border-light": "hsl(220, 10%, 89%)",
                "border-dark": "hsl(220, 3%, 30%)",

                "icon-light": "#747474",
                "icon-dark": "#262626",

                "btn-blue": "hsl(202, 100%, 96%)",
                "btn-blue-hover": "hsl(202, 100%, 94%)",
                "btn-blue-active": "hsl(202, 100%, 93%)",
                "btn-blue-d": "hsl(202, 100%, 70%)",
                "btn-blue-d-hover": "hsl(202, 100%, 73%)",
                "btn-blue-d-active": "hsl(202, 100%, 76%)",
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
