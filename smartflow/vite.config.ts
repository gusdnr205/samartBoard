import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: '/src' },
  //     { find: 'node_modules', replacement: '/node_modules' },
  //   ],
  // },
});
