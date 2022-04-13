import { resolve } from 'path'
import fs from 'fs'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'

const banner = () => fs.readFileSync(resolve(__dirname, '../src/cheat-vue-template-complier.js'), { encoding: 'utf-8' })

const config = defineConfig({
  input: resolve(__dirname, '../src/index.ts'),
  output: [{
    dir: 'dist/commonjs',
    format: 'commonjs',
    preserveModules: true,
    banner,
  },
  {
    dir: 'dist/es',
    format: 'es',
    preserveModules: true,
    banner,
  }],
  plugins: [esbuild()],
  external: [
    'vue-demi',
    'rollup-plugin-vue3',
    'rollup-plugin-vue2',
    'rollup',
    'fs',
    'path',
  ],
},
)

export default config
