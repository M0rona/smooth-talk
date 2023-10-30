import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'anchors-aweigh': '#26303f',
        'angel-hair-silver': '#d1d5db',
        'blue-ribbon': '#0066ff',
        'blue-steel': '#515962',
        'coarse-wool': '#101826',
        'dark': '#17212e',
        'dark-e-stormy': '#374151',
        'dark-seashore-night': '#1a338b',
        'glowing-brake-disc': '#ef4444',
        'great-falls': '#9ca3af',
        'hei-se-black': '#17202e',
        'kingly-cloud': '#dfdfdf',
        'nouveau': '#6b7280',
        'pool-water': '#2d8cff'
      },

      backgroundImage: {
        'blur' : "url(/Blur.png)",
        'image-call' : "url(/ImageCall.png)",
      },

      borderWidth: {
        '1' : '1px'
      }
    },
  },
  plugins: [],
}
export default config
