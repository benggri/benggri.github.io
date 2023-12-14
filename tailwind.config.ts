import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        "DEFAULT":'#a652fb',
        "light": "#e3cafe",
        "dark": "#48246e",
        "50": "#fcf8ff",
        "100": "#f6eeff",
        "200": "#f0e2fe",
        "300": "#e3cafe",
        "400": "#c997fd",
        "500": "#a652fb",
        "600": "#6f37a9",
        "700": "#48246e",
        "800": "#2b1541",
        "900": "#221134",
      },
      'cyan': {
        "DEFAULT":'#06b6d4',
        "light": "#67e8f9",
        "dark": "#0e7490",
        "50":"#ecfeff",
        "100":"#cffafe",
        "200":"#a5f3fc",
        "300":"#67e8f9",
        "400":"#22d3ee",
        "500":"#06b6d4",
        "600":"#0891b2",
        "700":"#0e7490",
        "800":"#155e75",
        "900":"#164e63",
        "950":"#083344",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}
export default config
