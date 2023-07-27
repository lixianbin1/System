<script setup lang="ts">
// import axios from 'axios'
import { useGlobalState } from '@/stores/vueuse.ts'

defineOptions({
  name: 'IndexPage',
})

const activeNames = reactive({ // 卡片展开
  one: 1,
  two: 1,
})

// useMouse
const { x, y } = useMouse()
const code = ref(`const { x, y } = useMouse()
`)

// createGlobalState
const state = useGlobalState()
const code2 = ref(`import { computed, ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(
  () => {
    // state
    const count = ref(0)

    // getters
    const doubleCount = computed(() => count.value * 2)

    // actions
    function increment() {
      count.value++
    }

    return { count, doubleCount, increment }
  },
)
`)

// createSharedComposable
const useSharedMouse = createSharedComposable(useMouse)
const Shared = useSharedMouse()

//
// const useAsync = useAsyncState(
//   axios
//     .get('https://jsonplaceholder.typicode.com/todos/1')
//     .then(t => t.data),
//   { id: null },
// )
</script>

<template>
  <div id="vueuse" p-3>
    <el-card class="box-card" w-600px>
      <template #header>
        <div class="card-header">
          <span>useMouse</span>
        </div>
      </template>
      <h5>鼠标坐标</h5>
      <div class="text item">
        {{ x }},{{ y }}
      </div>
      <el-collapse v-model="activeNames.one">
        <el-collapse-item title="Code Detail" name="1">
          <highlightjs :code="code" />
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="box-card" w-600px>
      <template #header>
        <div class="card-header">
          <span>createGlobalState</span>
          <el-button class="button" text float-right @click="state.increment">
            ADD
          </el-button>
        </div>
      </template>
      <h5>全局状态</h5>
      <div class="text item">
        {{ state.count }}
      </div>
      <el-collapse v-model="activeNames.two">
        <el-collapse-item title="Code Detail" name="1">
          <highlightjs :code="code2" />
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="box-card" w-600px>
      <template #header>
        <div class="card-header">
          <span>createSharedComposable</span>
        </div>
      </template>
      <h5>组件共享状态</h5>
      <div class="text item">
        {{ Shared.x }},{{ Shared.y }}
      </div>
      <el-collapse v-model="activeNames.one">
        <el-collapse-item title="Code Detail" name="1">
          <highlightjs :code="code" />
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
.box-card{ margin: 0 auto 10px; }
</style>
