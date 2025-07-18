
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in src
    "./public/index.html",        // Includes your HTML file
  ],
  theme: {
    extend: {}, // Extend default Tailwind theme here if needed
  },
  plugins: [], // Add Tailwind plugins later if required
}


// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
