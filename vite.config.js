import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: o site funciona em qualquer pasta (ex.: usuario.github.io/curso-py-site/).
  base: './',
  // O worker do Python usa import() de um endereço externo (o CDN do Pyodide),
  // e isso só funciona no formato de módulo moderno ("es").
  worker: { format: 'es' },
})
