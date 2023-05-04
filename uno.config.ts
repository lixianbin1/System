import { 
  defineConfig,
  presetAttributify,
  presetUno, //默认预设
  presetIcons,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
export default defineConfig({
  presets: [
    presetUno(),  //默认预设
    /*
      .ma4 { margin: 1rem; }
      .ml-3 { margin-left: 0.75rem; }
      .ms-2 { margin-inline-start: 0.5rem; }
      .mt-10px { margin-top: 10px; }
    */
    presetRemToPx(), //将rem转为px
    /*
      .m-2 { margin: 0.5rem; } //原css
      .m-2 { margin: 4px; }
    */
    presetIcons({  //通过Class接入图标
      scale: 1.2, //缩放1.2
      warn: true, //匹配缺少的图标时发出警告
    }),
    /*
      //将icon通过class接入就能使用，提供hover服务
      <div class="i-carbon:search hover:i-carbon:no">
    */
    presetAttributify(),  //将class 预设为属性
    /*
      <button
        i-carbon:search
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
      >CLick</button>
    */
  ],
})