import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import Unocss from 'unocss/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true,
    port:5173,
    host:"0.0.0.0"
  },
  resolve:{
    alias:{
      '@': `${path.resolve(__dirname, 'src')}/`,
      '~': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  plugins: [
    vue(),
    Layouts(),
    Icons(),
    Unocss(),
    AutoImport({
      imports: [ //自动导入模块
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: 'src/auto-imports.d.ts', //自动导入的文件集成
      dirs: [ // 自动导入目录下的模块并导出
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true, //在Vue模板内自动导入
      resolvers: [ //自定义解析器，兼容第三方组件”
        ElementPlusResolver(),
      ],
      //...
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [
        ElementPlusResolver(),
        IconsResolver()
      ],
    }),
    VueI18n({
      runtimeOnly: true, //在生产构建中自动使用 Vue-i18n
      compositionOnly: true, //将 vue-i18n API 仅作组合 API
      fullInstall: true, //安装VueI18n提供的全套 API、组件等
      include: [path.resolve(__dirname, 'locales/**')], //设置翻译文件根目录
    }),
    Pages({
      extensions: ['vue'], //有效的文件后缀
      // dirs: 'src/pages', //指定文件根目录
      extendRoute(route, parent) {
        return route
      },
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        additionalData: '@import "./src/styles/mixin.scss";', // src/styles/mixin.scss
      },
    },
  },
})
