/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF', // Custom blue shade
        secondary: '#FF6347', // Custom red shade
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Example plugin
  ],
};
