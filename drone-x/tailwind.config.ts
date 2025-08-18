// tailwind.config.ts
import type { Config } from 'tailwindcss'


// // Plugin to add each Tailwind color as a global CSS variable
// function addVariablesForColors({ addBase, theme }: any) {
//   const allColors = flattenColorPalette(theme('colors'));
//   const newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
//   );

//   addBase({
//     ':root': newVars,
//   });
// }

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config

function flattenColorPalette(arg0: any) {
    throw new Error('Function not implemented.');
}

