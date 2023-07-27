<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const activeNames = reactive({ // 卡片展开
  one: 1,
})
const { x, y } = useMouse()

// const user = useUserStore()
// const name = ref(user.savedName)

// const router = useRouter()
// function go() {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

// const { t } = useI18n()
//
</script>

<template>
  <div id="vueuse" p-3>
    <el-card class="box-card" w-400px>
      <template #header>
        <div class="card-header">
          <span>useMouse</span>
        </div>
      </template>
      <div class="text item">
        {{ x }},{{ y }}
      </div>
      <el-collapse v-model="activeNames.one">
        <el-collapse-item title="Consistency" name="1">
          <div>
            <pre>
              <code>
console.log(111)
              </code>
          </pre>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
