import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "clsx"],
      output: {
        dir: "lib",
        preserveModules: true,
        // entryFileNames: ({ name }) => `${name}.js`,
        //       globals: {
        //         clsx: "clsx",
        //       },
      },
    },
    emptyOutDir: true,
    sourcemap: true,
  },
});
