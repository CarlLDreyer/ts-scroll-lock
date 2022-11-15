import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'TSScrollLock',
      fileName: (format) => `ts-scroll-lock.${format}.js`,
    },
    target: 'esnext',
  },
})
