import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
//import VitePWA from '@vitejs/plugin-pwa';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// __dirname 대체
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(), // ESLint 플러그인 추가
    //VitePWA(),
  ],
  server: {
    port: parseInt(process.env.VITE_PORT) || 3000, // 개발 서버 포트
  },
  define: {
    'env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL), // 환경 변수 정의
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
