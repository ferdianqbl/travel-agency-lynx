import type { Config } from 'tailwindcss';
import lynxPreset from '@lynx-js/tailwind-preset';

export default {
  presets: [lynxPreset as Config],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '1rem',
      center: true,
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
