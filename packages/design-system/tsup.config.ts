import { defineConfig } from 'tsup';
import {
  vanillaExtractPlugin
} from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  entry: [ 'src/atoms'],
  splitting: false,
  sourcemap: false,
  format: "esm",
  clean: true,
  dts: false,
  esbuildPlugins: [vanillaExtractPlugin()]
})