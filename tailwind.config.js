/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*{html,js}", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            'headerText': ["Playfair Display", "sans-serif"],
            'bodyText': ["Inter", "sans-serif"],
        },
        extend: {
            colors: {
                "primary": "#e77a55",
                "primary-foreground": "#100D0C",
                "secondary": "#1a110e",
                "bg-light": "#171311",
                "bg-dark": "#100D0C",
                "border": "#4a4a4a",
                "card": "#1f1a18",
                "text": "#ffffff",
                "text-light": "#99a1af",
            },
            fontFamily: {
                'headerText': ["Playfair Display", "sans-serif"],
                'bodyText': ["Inter", "sans-serif"],
            },
        }
    }
}
