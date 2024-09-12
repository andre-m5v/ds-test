import figmaTokens from "./tokens/tokens2";
import tailwindTokens from "./tokens/tailwindTokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.tsx"],
  prefix: "ds-",
  corePlugins: { preflight: false },
  experimental: { optimizeUniversalDefaults: true },
  theme: {
    extend: {
      fontFamily: {
        calibre: ['"Calibre"', "sans-serif"],
      },
      colors: {
        ...tailwindTokens.tailwindbg,
      },
      textColor: {
        ...tailwindTokens.tailwindtext,
      },
      borderRadius: {
        ...figmaTokens.borderRadius,
      },
      borderColor: {
        ...tailwindTokens.tailwindborder,
      },
    },
  },
  plugins: [],
};
