/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentes/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        sd: "820px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "Azul-Fuerte": "#010937",
        "Azul-Base": "#010c4b",
        "Azul-Mediano": "#1c31a5",
        "Azul-Suave": "#215adc",
        White: "fffff",
      },
      fontFamily: { sans: ["Roboto", "sans-serif"] }, // Añade la nueva fuente aquí },
      boxShadow: { "custom-shadow": "0px 3px 18px -3px rgba(0,0,0,0.75)" }, // Define tu sombra personalizada aquí,
    },
  },
  variants: { extend: { display: ["responsive"] } },
  plugins: [require("daisyui")],
};
