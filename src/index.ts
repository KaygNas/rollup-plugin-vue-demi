import { isVue2 } from 'vue-demi'
import vue3 from 'rollup-plugin-vue3'
import vue2 from 'rollup-plugin-vue2'
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
