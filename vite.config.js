import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// tailwindcss ka use bhi kar rahe hai ham
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
