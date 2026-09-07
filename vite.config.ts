import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-restaurant/',
  // Keep a single project path when working from a mapped Windows drive.
  resolve: { preserveSymlinks: true },
  plugins: [react()],
})
