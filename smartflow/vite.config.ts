import { defineConfig } from 'vite'; // Vite 설정을 정의하는 함수
import react from '@vitejs/plugin-react-swc'; // React + SWC 지원 플러그인
import tailwindcss from '@tailwindcss/vite'; // TailwindCSS 통합 플러그인
import tsconfigPaths from 'vite-tsconfig-paths'; // tsconfig.json의 경로 별칭을 자동 인식

// https://vitejs.dev/config/
export default defineConfig({
  // ✅ 사용 플러그인 목록
  plugins: [
    react(), // React + SWC로 빠른 빌드
    tailwindcss(), // TailwindCSS 유틸 통합
    tsconfigPaths(), // tsconfig 경로 별칭 자동 매핑
  ],

  // ✅ Vitest 테스트 설정 (Vite 내장 테스트 러너)
  test: {
    globals: true, // describe, it, expect 같은 글로벌 사용 가능하게
    environment: 'jsdom', // 브라우저 환경 시뮬레이션 (React 테스트용)
    setupFiles: './src/setupTests.ts', // 테스트 전 사전 설정 파일 (예: jest-dom 등록)
    include: ['src/**/*.{test,spec}.{ts,tsx}'], // 테스트 파일 경로 패턴
  },

  // ✅ 개발 서버 설정
  server: {
    port: 5173, // 개발 서버 포트 지정 (기본: 5173)
    open: true, // 서버 시작 시 브라우저 자동 열기
  },

  // ✅ 빌드 설정
  build: {
    outDir: 'dist', // 빌드 출력 디렉토리
    sourcemap: true, // 소스맵 생성 (디버깅 용이)
    minify: 'esbuild', // 빌드 압축 방식 (esbuild가 기본값이자 빠름)
  },

  // ✅ 환경변수 설정
  envPrefix: ['VITE_', 'REACT_APP_'], // 이 prefix가 붙은 환경변수만 client-side에서 접근 가능

  // ✅ (선택) 사용자 정의 alias (이미 tsconfigPaths로 자동 처리됨)
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: '/src' },
  //     { find: 'node_modules', replacement: '/node_modules' },
  //   ],
  // },
});
