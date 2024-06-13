/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    important: true,
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                // font-headingFont
                headingFont: ['Playfair Display', 'serif'],
                // font-contentFont
                contentFont: ['Noto Sans', 'sans-serif'],
            },
            textAlignment: ['responsive'],
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
            colors: {
                nav: "#a55950",
                navbarColor: "#8f5049",
                homeOverly: "#180e0e", //0.6  opacity
                active: "#ebdad0",
                paragraph: "#8b8b8b",
                light: "#fbfbfb",
                card: "#2d222778",
                progressBar: "#f9f5f3",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '3rem'
                }
            }
        },
    },
    plugins: [],
}

