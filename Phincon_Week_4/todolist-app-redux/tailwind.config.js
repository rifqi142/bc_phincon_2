/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "check-bg": "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",

        // Light Theme
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",

        // Dark Theme
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue-dark": "hsl(234, 39%, 85%)",
        "dark-grayish-blue-dark": "hsl(234, 11%, 52%)",
        "very-dark-grayish-blue-dark": "hsl(233, 14%, 35%)",
        "very-dark-grayish-blue-dark-alt": "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
