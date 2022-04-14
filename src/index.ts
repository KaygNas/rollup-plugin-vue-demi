import { isVue2 } from 'vue-demi'
import vue3 from '@vitejs/plugin-vue'
import vue2 from 'rollup-plugin-vue'
import type { Plugin } from 'rollup'

export function vueDemi(options?: any): Plugin {
  return {
    name: 'rollup-plugin-vue-demi',
    options: (inputOptions) => {
      return {
        ...inputOptions,
        plugins: [isVue2 ? vue2(options) : vue3(options), ...(inputOptions.plugins ?? [])],
      }
    },
  }
}
