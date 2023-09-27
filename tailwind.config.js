/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 1.00285px 20.55851px 0px rgba(255, 255, 255, 0.80) inset, 0px 20.05708px 20.05708px 0px rgba(255, 255, 255, 0.24) inset, 0px -1.50428px 20.05708px 0px rgba(255, 255, 255, 0.24) inset, 0px -3.00856px 9.02569px 0px rgba(255, 255, 255, 0.50) inset, 0px 3.00856px 6.01712px 0px rgba(223, 99, 99, 0.4) inset'
      }
    },
  },
  plugins: [],
}
