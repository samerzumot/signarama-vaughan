/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#da291c',
          'red-dark': '#a60d26',
          'red-light': '#ff3d2e',
          navy: '#0033a0',
          'navy-dark': '#002270',
          'navy-light': '#0047d6',
        },
        surface: {
          white: '#ffffff',
          cream: '#f8f9fa',
          light: '#f1f3f5',
          dark: '#0a0a0a',
          charcoal: '#1a1a2e',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#4a5568',
          muted: '#718096',
          inverse: '#ffffff',
        },
        accent: {
          gold: '#ffc107',
          green: '#28a745',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2' }],
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '800px',
      },
      borderRadius: {
        'card': '8px',
        'button': '50px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 24px rgba(0, 0, 0, 0.12)',
        'header': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'cta': '0 6px 20px rgba(218, 41, 28, 0.3)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
