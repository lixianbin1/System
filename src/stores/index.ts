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