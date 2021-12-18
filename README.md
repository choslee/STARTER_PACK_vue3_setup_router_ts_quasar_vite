# Vue 3 + Typescript + Vite
1) Installed Vite and then added @qasar/extra and @quasar/vite-plugin (see: https://quasar.dev/start/vite-plugin)
2) Replaced main.js, vitejs.dev/config  and added src/quasar-variables.sass(see: https://quasar.dev/start/vite-plugin#using-quasar)
3) Imported Animate functions in main.js (import @quasar/extras/animate/fadeIn.css) so now can used in transitions
4) Added unplugin-vue-components plugin for auto import vue components (see: https://www.npmjs.com/package/unplugin-vue-components)
5) Added unplugin-auto-import plugin (see: https://github.com/antfu/unplugin-auto-import)


This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
