/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/no-var-requires */
try {
  const vueTemplateComplierVersion = require('vue-template-compiler/package.json').version
  const Vue = require('vue')
  // cheat vue-template-complier
  Vue.version = vueTemplateComplierVersion
}
catch (err) {}

import {isVue2} from 'vue-demi'
import vue3 from 'rollup-plugin-vue'
// @ts-expect-error no type
import vue2 from 'rollup-plugin-vue2'
import type {Plugin} from 'rollup'

export function vueDemi(options: any): Plugin {
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

export * from 'vue-demi'
export * from './utils'
