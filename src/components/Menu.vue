<script setup lang="ts">
import { Icon } from '@iconify/vue';
const { t } = useI18n()
const isCollapse = ref(false) // 控制menu的展开和收缩

//重置窗口大小
const Twidth=ref(window.innerWidth)
window.onresize=()=>{
  Twidth.value=window.innerWidth
}
watch(Twidth,(news,olds)=>{
  reSize()
})
const reSize=()=>{
  if (window.innerWidth <= 1200){
    isCollapse.value = true
  }else{
    isCollapse.value = false
  }
}
reSize()

// 设置当前菜单的默认选中
const route = useRoute()
const state = reactive({
  path: `${route.fullPath}`,
})

// 监听当前路由变化
const router = useRouter()
watch(() => router.currentRoute.value, (e) => {
  state.path = `${e.fullPath}`
})

const daa=reactive({
  list:[
    {
      index:"/VueUse",
      icon:"carbon:align-box-top-left",
      title:t('menu.menu1'),
      children:[
        {
          index:"/VueUse",
          title:t('menu.menu1-1'),
        },
        {
          index:"/Menu1/02",
          title:t('menu.menu1-2'),
        }
      ]
    },
    {
      index:"/Menu2",
      icon:"carbon:model-alt",
      title:t('menu.menu2'),
    },
    {
      index:"/Menu3",
      icon:"carbon:model-alt",
      title:t('menu.menu3'),
      children:[
        {
          index:"/Menu3/01",
          title:t('menu.menu3-1'),
        },
        {
          index:"/Menu3/02",
          title:t('menu.menu3-2'),
        }
      ]
    },
  ]
})
</script>

<template>
  <el-aside width="auto" style="background-color: #545c64">
    <el-scrollbar height="calc(100vh - 60px)">
      <div class="v-menu">
        <el-icon @click="isCollapse = !isCollapse">
          <Icon icon="carbon:menu" />
        </el-icon>
      </div>
      <el-menu
        router
        class="el-menu-vertical"
        active-text-color="#ffd04b"
        background-color="#545c64"
        :collapse="isCollapse"
        :default-active="state.path"
        text-color="#fff"
      >
        <template v-for="item in daa.list ">
          <MenuItem :data="item"/>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 400px;
  height: calc(100vh - 116px);
}
</style>