import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family-main)']
      },

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
        'pool-water': '#2d8cff',
        'outline': '#4B5563'
      },

      backgroundImage: {
        'blur' : "url(/Blur.png)",
        'radial' : 'radial-gradient(50% 50% at 50% 50%, #00A3FF 0%, #0066FF 100%)'
      },

      borderWidth: {
        '1' : '1px'
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },

        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },

        contentShow: {
          from: { opacity: "0", transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: "1", transform: 'translate(-50%, -50%) scale(1)' },
        },

        contentHide: {
          from: { opacity: "1", transform: 'translate(-50%, -50%) scale(1)' },
          to: { opacity: "0", transform: 'translate(-50%, -48%) scale(0.96)' },
        },
      },
      
      animation: {
        fadeIn: 'fadeIn 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        fadeOut: 'fadeOut 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHide: 'contentHide 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
export default config
