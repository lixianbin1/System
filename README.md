# System

打算用来整合自己学的一些东西（方法或者API，组件或库）

## 项目结构

```m
|—— cypress/       //自动化测试库cypress文件
|—— locales/       //国际语言翻译
|—— src/
  |—— components/  //各类封装的组件
  |—— composables/ //各类定义的函数
  |—— layouts/     //各类定义的模板
  |—— modules/     //部分模块的配置
  |—— pages/       //自动生成路由的文件
  |—— stores/      //pinia存储的全局数据
  |—— styles/      //各类导入的样式文件
  |—— App.vue
  |—— auto-imports.d.ts
  |—— components.d.ts
  |—— main.ts       //入口文件
  |—— shims.d.ts    //为typescript做的适配定义文件
  |—— types.ts      //ts的定义文件
|—— test/           //测试文件
|—— .editorconfig   //代码规范配置文件
|—— .eslintrc       //ESlint配置文件
|—— .gitignore      //Git忽略文件
|—— cypress.config.ts//cypress测试库配置文件
|—— index.html
|—— LICENSE         //许可协议
|—— package.json
|—— pnpm-lock.yaml
|—— README.md
|—— tsconfig.json   //typeScript的配置
|—— uno.config.ts   //unocss的各项配置
|—— vite.config.ts  //vite的各项配置
```

## 配置介绍

### 自动化导入

> npm i -D unplugin-auto-import
> npm i -D unplugin-vue-components

```js
// vite.config.js
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    // ...
    AutoImport({
      imports: [ // 自动导入模块
        'vue',
        'vue-router',
        'vue-i18n',
      ],
      dts: 'src/auto-imports.d.ts', // 自动导入的文件集成
      dirs: [ // 自动导入目录下的模块并导出
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true, // 在Vue模板内自动导入
      resolvers: [ // 自定义解析器，兼容第三方组件

      ],
      // ...
    }),
    Components({ // 自动引入各组件
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      resolvers: [ // 自定义解析器，兼容第三方组件

      ],
    }),
  ]
})
```

### 国际化翻译

> npm i -D @intlify/unplugin-vue-i18n
> npm i vue-i18n

涉及的相关目录及文件

```m
|—— locales/
  |—— en.yml        //英文翻译文本
  |—— zh-CN.yml     //中文翻译文本
|—— src/
  |—— modules/
    |—— i18n.ts     //vue-i18的相关配置
```

```js 
// vite.config.js
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    // ...
    AutoImport({
      // ...
      imports: [ // 自动导入模块
        'vue-i18n',
      ],
    }),
    VueI18n({
      runtimeOnly: true, // 在生产构建中自动使用 Vue-i18n
      compositionOnly: true, // 将 vue-i18n API 仅作组合 API
      fullInstall: true, // 安装VueI18n提供的全套 API、组件等
      include: [path.resolve(__dirname, 'locales/**')], // 设置翻译文件根目录
    }),
  ]
})
```

```js 
// src/modules/i18n.ts
import { createI18n } from 'vue-i18n'
import { type UserModule } from '~/types'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob < { default: any } > ('../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)
// 配置默认安装
export const install: UserModule = (app) => {
  console.log(app)
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)
}
export default install
```

```js 
// main.js
import i18 from '@/modules/i18n.ts'

createApp(App).use(i18)
```

### 自动化路由及布局

> npm i -D vite-plugin-pages
> npm i -D vite-plugin-vue-layouts
> npm i vue-router

涉及的相关目录及文件

```m
|—— src/
  |—— layouts/
    |—— default.vue     //layouts的默认模板
    |—— 404.vue         //404的模板
  |—— pages/            //自动化路由的文件
    |—— index.vue
```

```js 
// vite.config.js
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    // ...
    Layouts(),
    Pages({
      extensions: ['vue'], // 有效的文件后缀
      // dirs: 'src/pages', //指定文件根目录
      extendRoute(route, parent) {
        return route
      },
    }),
    AutoImport({
      // ...
      imports: [ // 自动导入模块
        'vue',
        'vue-router',
        'vue-i18n',
      ],
    })
  ]
})
```

```js 
// main.js
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
createApp(App).use(router)
```

### 自定义icon

> npm install --save @iconify/json
> npm install --save @iconify/vue

``` js vite.config.ts
// 通过UnoCss对图标进行配置
import Icons from 'unplugin-icons/vite'
import { presetAttributify, presetIcons } from 'unocss'

export default {
  plugins: [
    Icons(),
  ],
}
```

### 预定义样式

说实话，有些功能花里胡哨，用处不大，我们是开发，不是会议记录者，不需要追求速度。只推荐搭配icon图标相关的CSS，其他的不推荐。

> npm i -D unocss

```m
|—— src/
  |—— main.ts
  |—— pages/            //自动化路由的文件
    |—— index.vue
|—— uno.config.ts       //unocss的配置
```

```js 
// vite.config.js
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    // ...
    Unocss(),
  ]
})
```

```ts 
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(), // 默认预设
    presetRemToPx(), // 将rem转为px
    presetIcons({ // 通过Class接入图标
      scale: 1.2, // 缩放1.2
      warn: true, // 匹配缺少的图标时发出警告
    }),
    presetAttributify(), // 将class 预设为属性
  ],
})
```

```js 
// main.js
import 'virtual:uno.css'
```

### 组合式API工具类

> npm i @vueuse/core
> npm i @vueuse/head

```js 
// vite.config.js
export default defineConfig({
  plugins: [
    AutoImport({
      // ...
      imports: [
        '@vueuse/core', // 基于组合式API的集合工具
        '@vueuse/head', // 添加Meta的标签，更好的SEO
      ],
    })
  ]
})
```

## 组件介绍

### src/components/组件介绍

`Menu` `MenuItem` 常见左侧菜单。使用了Element plus的menu做基础进行组件封装，加了一下需求改进
 
`Head` 常见的头部封装。

## 功能介绍

