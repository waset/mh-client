import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'
import Modules from 'vite-plugin-use-modules'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni({
      vueOptions: {
        reactivityTransform: true
      }
    }),
    AutoImport({
      dts: 'runtime/auto-import.d.ts',
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
        'pinia',
      ],
      dirs: [
        'src/stores',
      ]
    }),
    Modules({
      target: 'src/plugins'
    }),
  ],
});
