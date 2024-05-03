import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [imagetools()],
});
