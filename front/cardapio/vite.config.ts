import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4043, // Substitua pelo número da porta desejada
  },
  plugins: [react()],
})
