/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#800000',
                    dark: '#5a0000',
                    light: '#a30000',
                },
                gold: {
                    DEFAULT: '#d4af37',
                    light: '#f1d374',
                },
                dark: {
                    DEFAULT: '#1a1a1a',
                    maroon: '#3d0000',
                }
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
};
