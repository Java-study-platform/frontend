import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/static': path.resolve(__dirname, './static'),
      '@/generated': path.resolve(__dirname, './generated'),
      '@/kubb-generated': path.resolve(__dirname, './kubb-generated'),
      '@': path.resolve(__dirname, './src')
    }
  }
})
