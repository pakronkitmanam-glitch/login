import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/project1/', // 🌟 บรรทัดนี้สำคัญมาก! ห้ามลืมเครื่องหมายสแลชหน้า-หลังนะครับ
})