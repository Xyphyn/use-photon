import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/mono-svelte/**/*.{svelte,ts,js}',
  ],

  theme: {
    extend: {},
  },

  plugins: [typography],
} as Config
