/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chatBg: "#011627",
        input: "#142837",
        textBalloon: "#1f2937",
      },
    },
  },
  plugins: [],
};
