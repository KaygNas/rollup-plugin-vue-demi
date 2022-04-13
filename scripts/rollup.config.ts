import { resolve } from 'path'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'

const config = defineConfig({
  input: resolve(__dirname, '../src/index.ts'),
  output: [{
    dir: 'dist/commonjs',
    format: 'commonjs',
    preserveModules: true,
  },
  {

    dir: 'dist/es',
    format: 'es',
    preserveModules: true,

  }],
  plugins: [esbuild()],
  external: [
    'vue-demi',
    'rollup-plugin-vue',
    'rollup-plugin-vue2',
    'rollup',
    'fs',
    'path',
  ],
},
)

export default config
