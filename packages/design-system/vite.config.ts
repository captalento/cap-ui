import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';


export default defineConfig({
  plugins: [react(), vanillaExtractPlugin({
    emitCssInSsr: true,
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/atoms'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib'
    }
  }
});