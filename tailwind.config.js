/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.tsx"],
  prefix: "ds-",
  corePlugins: { preflight: false },
  experimental: { optimizeUniversalDefaults: true },
  theme: {
    extend: {},
  },
  plugins: [],
};
