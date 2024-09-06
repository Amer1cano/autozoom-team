import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  server:{
    open: true
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
