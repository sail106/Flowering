import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws', // WebSocket 프로토콜 설정 (일반적으로 'ws' 또는 'wss')
      host: 'localhost', // WebSocket 호스트 설정
      port: 12345 // WebSocket 포트 설정
    }
  }
})