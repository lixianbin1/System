import { computed, ref } from 'vue'
import { createGlobalState } from '@vueuse/core'
import { defineStore } from 'pinia'
export const useResizeStore = defineStore('resize', {
    state:()=>({
        onResize:false,
        newWidth:window.innerWidth,
        oldWidth:window.innerWidth,
        type:"expand",// expand扩大 reduce缩小
    }),
    actions:{

    }
})

export const useGlobalState = createGlobalState(
  () => useStorage('vue-use-locale-storage', {
      name: 'Banana',
      color: 'Yellow',
      size: 'Medium',
    }),
)