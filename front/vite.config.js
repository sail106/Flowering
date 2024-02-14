import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'wss',
      host: 'i10c106.p.ssafy.io',
      port: 443
    }
  }
})