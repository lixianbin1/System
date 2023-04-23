import { 
  defineConfig,
  presetUno, //默认预设
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
  ],
})