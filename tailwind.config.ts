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
      "primary": {
        "DEFAULT":'#009efe',
        "light": "#81c6fd",
        "dark": "#003fa6",
        "50": "#e0f1fe",
        "100": "#b4dbfd",
        "200": "#81c6fd",
        "300": "#43affd",
        "400": "#009efe",
        "500": "#008efa",
        "600": "#0080ec",
        "700": "#006ed9",
        "800": "#005dc6",
        "900": "#003fa6"
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
