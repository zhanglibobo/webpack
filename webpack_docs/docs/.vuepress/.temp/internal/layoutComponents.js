import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/zhanglibo/Desktop/笔记/webpack/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/zhanglibo/Desktop/笔记/webpack/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
