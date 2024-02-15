import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
    global: 'window',
  },
  server: {
    hmr: {
      protocol: 'wss', // WebSocket 프로토콜 설정 (일반적으로 'ws' 또는 'wss')
      host: 'i10c106.p.ssafy.io', // WebSocket 호스트 설정
      port: 443 // WebSocket 포트 설정
    }
  }
})
