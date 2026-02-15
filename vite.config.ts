import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Pour Netlify : base à la racine. Pour GitHub Pages, utiliser base: "/Portofolio-KenDev/"
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
