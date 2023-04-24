import { defineConfig } from 'tsup';
import {
  vanillaExtractPlugin
} from '@vanilla-extract/esbuild-plugin';

import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

async function processCss(css: string) {
  const result = await postcss([autoprefixer]).process(
    css,
    {
      from: undefined /* suppress source map warning */
    }
  );

  return result.css;
}

export default defineConfig({
  entry: [ 'src/atoms'],
  splitting: false,
  sourcemap: false,
  format: "esm",
  clean: true,
  // external: ["react"],
  dts: true,
  esbuildPlugins: [vanillaExtractPlugin({
    processCss
  })]
})