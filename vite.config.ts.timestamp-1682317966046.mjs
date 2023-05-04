// vite.config.ts
import path from "path";
import { defineConfig } from "file:///D:/Project/System/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Project/System/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/Project/System/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///D:/Project/System/node_modules/unplugin-auto-import/dist/vite.js";
import VueI18n from "file:///D:/Project/System/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import Layouts from "file:///D:/Project/System/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import { ElementPlusResolver } from "file:///D:/Project/System/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Pages from "file:///D:/Project/System/node_modules/vite-plugin-pages/dist/index.mjs";
import Icons from "file:///D:/Project/System/node_modules/unplugin-icons/dist/vite.mjs";
import Unocss from "file:///D:/Project/System/node_modules/unocss/dist/vite.mjs";
import IconsResolver from "file:///D:/Project/System/node_modules/unplugin-icons/dist/resolver.mjs";
import { VitePWA } from "file:///D:/Project/System/node_modules/vite-plugin-pwa/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Project\\System";
var vite_config_default = defineConfig({
  server: {
    open: true,
    port: 5173,
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
      "~": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    vue(),
    Layouts(),
    Icons(),
    VitePWA(),
    Unocss(),
    AutoImport({
      imports: [
        //自动导入模块
        "vue",
        "vue-router",
        "vue-i18n",
        "@vueuse/core",
        "@vueuse/head"
      ],
      dts: "src/auto-imports.d.ts",
      //自动导入的文件集成
      dirs: [
        // 自动导入目录下的模块并导出
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true,
      //在Vue模板内自动导入
      resolvers: [
        //自定义解析器，兼容第三方组件”
        ElementPlusResolver()
      ]
      //...
    }),
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
      resolvers: [
        ElementPlusResolver(),
        IconsResolver()
      ]
    }),
    VueI18n({
      runtimeOnly: true,
      //在生产构建中自动使用 Vue-i18n
      compositionOnly: true,
      //将 vue-i18n API 仅作组合 API
      fullInstall: true,
      //安装VueI18n提供的全套 API、组件等
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
      //设置翻译文件根目录
    }),
    Pages({
      extensions: ["vue"],
      //有效的文件后缀
      // dirs: 'src/pages', //指定文件根目录
      extendRoute(route, parent) {
        return route;
      }
    })
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        additionalData: '@import "./src/styles/mixin.scss";'
        // src/styles/mixin.scss
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXFN5c3RlbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdFxcXFxTeXN0ZW1cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3QvU3lzdGVtL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCBMYXlvdXRzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjp7XG4gICAgb3Blbjp0cnVlLFxuICAgIHBvcnQ6NTE3MyxcbiAgICBob3N0OlwiMC4wLjAuMFwiXG4gIH0sXG4gIHJlc29sdmU6e1xuICAgIGFsaWFzOntcbiAgICAgICdAJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgICAgJ34nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgTGF5b3V0cygpLFxuICAgIEljb25zKCksXG4gICAgVml0ZVBXQSgpLFxuICAgIFVub2NzcygpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogWyAvL1x1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NkEyMVx1NTc1N1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAndnVlLWkxOG4nLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICBdLFxuICAgICAgZHRzOiAnc3JjL2F1dG8taW1wb3J0cy5kLnRzJywgLy9cdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTc2ODRcdTY1ODdcdTRFRjZcdTk2QzZcdTYyMTBcbiAgICAgIGRpcnM6IFsgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2QTIxXHU1NzU3XHU1RTc2XHU1QkZDXHU1MUZBXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxuICAgICAgICAnc3JjL3N0b3JlcycsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsIC8vXHU1NzI4VnVlXHU2QTIxXHU2NzdGXHU1MTg1XHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XG4gICAgICByZXNvbHZlcnM6IFsgLy9cdTgxRUFcdTVCOUFcdTRFNDlcdTg5RTNcdTY3OTBcdTU2NjhcdUZGMENcdTUxN0NcdTVCQjlcdTdCMkNcdTRFMDlcdTY1QjlcdTdFQzRcdTRFRjZcdTIwMURcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgXSxcbiAgICAgIC8vLi4uXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgSWNvbnNSZXNvbHZlcigpXG4gICAgICBdLFxuICAgIH0pLFxuICAgIFZ1ZUkxOG4oe1xuICAgICAgcnVudGltZU9ubHk6IHRydWUsIC8vXHU1NzI4XHU3NTFGXHU0RUE3XHU2Nzg0XHU1RUZBXHU0RTJEXHU4MUVBXHU1MkE4XHU0RjdGXHU3NTI4IFZ1ZS1pMThuXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsIC8vXHU1QzA2IHZ1ZS1pMThuIEFQSSBcdTRFQzVcdTRGNUNcdTdFQzRcdTU0MDggQVBJXG4gICAgICBmdWxsSW5zdGFsbDogdHJ1ZSwgLy9cdTVCODlcdTg4QzVWdWVJMThuXHU2M0QwXHU0RjlCXHU3Njg0XHU1MTY4XHU1OTU3IEFQSVx1MzAwMVx1N0VDNFx1NEVGNlx1N0I0OVxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyldLCAvL1x1OEJCRVx1N0Y2RVx1N0ZGQlx1OEJEMVx1NjU4N1x1NEVGNlx1NjgzOVx1NzZFRVx1NUY1NVxuICAgIH0pLFxuICAgIFBhZ2VzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJ10sIC8vXHU2NzA5XHU2NTQ4XHU3Njg0XHU2NTg3XHU0RUY2XHU1NDBFXHU3RjAwXG4gICAgICAvLyBkaXJzOiAnc3JjL3BhZ2VzJywgLy9cdTYzMDdcdTVCOUFcdTY1ODdcdTRFRjZcdTY4MzlcdTc2RUVcdTVGNTVcbiAgICAgIGV4dGVuZFJvdXRlKHJvdXRlLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICAvLyBjc3NcdTk4ODRcdTU5MDRcdTc0MDZcdTU2NjhcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIC8vIFx1NUYxNVx1NTE2NSBtaXhpbi5zY3NzIFx1OEZEOVx1NjgzN1x1NUMzMVx1NTNFRlx1NEVFNVx1NTcyOFx1NTE2OFx1NUM0MFx1NEUyRFx1NEY3Rlx1NzUyOCBtaXhpbi5zY3NzXHU0RTJEXHU5ODg0XHU1QjlBXHU0RTQ5XHU3Njg0XHU1M0Q4XHU5MUNGXHU0RTg2XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIi4vc3JjL3N0eWxlcy9taXhpbi5zY3NzXCI7JywgLy8gc3JjL3N0eWxlcy9taXhpbi5zY3NzXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyTyxPQUFPLFVBQVU7QUFDNVAsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGFBQWE7QUFDcEIsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxlQUFlO0FBWnhCLElBQU0sbUNBQW1DO0FBZXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQU87QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFRO0FBQUEsSUFDTixPQUFNO0FBQUEsTUFDSixLQUFLLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUNyQyxLQUFLLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUN2QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQTtBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBO0FBQUEsTUFDTCxNQUFNO0FBQUE7QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQTtBQUFBLE1BQ2IsV0FBVztBQUFBO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxNQUN0QjtBQUFBO0FBQUEsSUFFRixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxZQUFZLENBQUMsS0FBSztBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLE1BQ3pDLEtBQUs7QUFBQSxNQUNMLFdBQVc7QUFBQSxRQUNULG9CQUFvQjtBQUFBLFFBQ3BCLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsUUFBUTtBQUFBLE1BQ04sYUFBYTtBQUFBO0FBQUEsTUFDYixpQkFBaUI7QUFBQTtBQUFBLE1BQ2pCLGFBQWE7QUFBQTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEtBQUssUUFBUSxrQ0FBVyxZQUFZLENBQUM7QUFBQTtBQUFBLElBQ2pELENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLFlBQVksQ0FBQyxLQUFLO0FBQUE7QUFBQTtBQUFBLE1BRWxCLFlBQVksT0FBTyxRQUFRO0FBQ3pCLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBO0FBQUEsSUFFSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUE7QUFBQSxRQUVKLGdCQUFnQjtBQUFBO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
