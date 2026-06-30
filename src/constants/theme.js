// src/constants/theme.js
//
// LifeLink design tokens — JavaScript mirror of the Tailwind v4 @theme
// defined in src/index.css ("Calm Care" design system). Use the Tailwind
// utility classes (bg-canvas, text-ink, shadow-card, font-display,
// bg-primary, text-gradient-brand, glass, ...) in JSX wherever possible;
// import from here only when a raw value is needed in JS (inline SVG fills,
// framer-motion color tweens, charts).
//
// Keep this file in sync with src/index.css.

export const colors = {
  // Brand — blood red (gradient stops: deep #b71c1c → bright #e53935)
  primary: {
    50: '#fdeceb',
    100: '#fbd5d2',
    200: '#f6aba6',
    300: '#f08079',
    400: '#ec5f57',
    500: '#e53935',
    600: '#d32f2f',
    700: '#c62828',
    800: '#b71c1c',
    900: '#8e1414',
    950: '#5c0a0a',
    DEFAULT: '#d32f2f',
    bright: '#e53935',
    deep: '#b71c1c',
  },

  // Warm neutral surfaces & text
  canvas: '#fafaf8',
  surface: '#ffffff',
  subtle: '#f5f5f3',
  line: '#eceae6',
  lineStrong: '#e0ddd7',
  ink: '#1c1917',
  inkSoft: '#44403c',
  muted: '#78716c',
  faint: '#a8a29e',

  // Semantic states
  success: '#1f9d57',
  successSoft: '#e6f6ec',
  warning: '#c77700',
  warningSoft: '#fdf0db',
  danger: '#d32f2f',
  dangerSoft: '#fdeceb',
  info: '#2b6cb0',
  infoSoft: '#e7f0f9',
};

export const gradients = {
  brand: 'linear-gradient(135deg, #b71c1c 0%, #e53935 100%)',
  brandText: 'linear-gradient(120deg, #b71c1c 0%, #e53935 100%)',
};

export const fonts = {
  sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
  display: "'Instrument Serif', ui-serif, Georgia, serif",
};

export const radii = {
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  '4xl': '1.75rem',
};

export const shadows = {
  soft: '0 1px 2px rgba(28,25,23,0.04), 0 1px 3px rgba(28,25,23,0.05)',
  card: '0 2px 6px rgba(28,25,23,0.03), 0 18px 40px -22px rgba(28,25,23,0.18)',
  lift: '0 4px 10px rgba(28,25,23,0.05), 0 30px 60px -28px rgba(28,25,23,0.24)',
  glow: '0 16px 44px -16px rgba(229,57,53,0.40)',
};

export default { colors, gradients, fonts, radii, shadows };
