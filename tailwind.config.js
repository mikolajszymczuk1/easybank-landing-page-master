module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            // Primary
            "dark-blue": "hsl(233, 26%, 24%)",
            "lime-green": "hsl(136, 65%, 51%)",
            "bright-cyan": "hsl(192, 70%, 51%)",
            
            // Neutral
            "grayish-Blue": "hsl(233, 8%, 62%)",
            "light-grayish-blue": "hsl(220, 16%, 96%)",
            "very-light-gray": "hsl(0, 0%, 98%)",
            "white": "hsl(0, 0%, 100%)"
        },
        fontFamily: {
            "main": ["Public Sans", "sans-serif"]
        },
        screens: {
            "md": "1024px"
        }
    },
    plugins: [],
}
