// FILE: vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: 'src/quasar-variables.sass'
    }),

    AutoImport({ 
      // targets to transform
      include: [
        /\.[tj]sx?$/, /\.ts /, /\.tsx/, /\.js/, /\.jsx/,
        /\.vue$/, /\.vue\?vue/,/\.vue/,
        /\.md$/,  //.md  
      ],

      // global imports to register
      imports: [
        'vue',
        // 'vue-router',
        // 'vuex',
        {
          // '@vueuse/core': [
          //   // named imports
          //   'useMouse', // import { useMouse } from '@vueuse/core',
          //   // alias
          //   ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
          // ],

          // 'axios': [
          //   ['default', 'axios'] // import { default as axios } from 'axios',
          // ],

          // '[package-name]': [
          //   '[import-names]',
          //   // alias
          //   ['[from]', '[alias]']
          // ]
        }
      ],

      // custom resolvers see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ]
    }),
    Components({ /* options */ }),
  ]
})
