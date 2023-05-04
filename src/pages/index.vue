<script setup lang="ts">
import * as echarts from 'echarts';
import { useGlobalState } from '@/stores/resize.ts'
const { t } = useI18n()

const oneChart=shallowRef()
//重置窗口大小
const Twidth=ref(window.innerWidth)
window.onresize=()=>{
  Twidth.value=window.innerWidth
}
watch(Twidth,(news,olds)=>{
  if(oneChart.value.resize){
    oneChart.value.resize()
  }
})
const reSize=()=>{

}

const state=useGlobalState()

onMounted(() => {
  initChart()
  EchartOne()
  console.log(state)
})

const initChart=()=>{
  oneChart.value=echarts.init(document.getElementById('Card1'));

}
// 设置OneEcharts
const oneOption=reactive({
  title: {
    text: 'ECharts 折线图'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {
    axisTick: {
      length: 6,
      lineStyle: {
        type: 'dashed'
        // ...
      }
    }
  },
  grid: {
    x: 40,
    y: 55,
    x2: 20,
    y2: 30
  },
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})
const EchartOne=()=>{
  oneChart.value.clear()
  oneChart.value.setOption(oneOption);
}
const stateClick=()=>{
  console.log(state.value.name)
  state.value.name+=32121
  // state.count.value++
}
</script>

<template>
  <button @click="stateClick">555</button>
  <span>{{state.name}}</span>
  <el-row :gutter="12" mb-12px>
    <el-col :span="6">
      <el-card shadow="hover" >
        <div flex-justify-between grid-items-center flex>
          <div i-basil:award-outline text-size-40px color-indigo-500></div>
          <div>
            <p pb-12px text-size-14px font-600 color-gray-500>当天销售额</p>
            <p text-size-25px font-600 color-gray-600><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div flex-justify-between grid-items-center flex>
          <div i-basil:award-outline text-size-40px color-indigo-500></div>
          <div>
            <p pb-12px text-size-14px font-600 color-gray-500>当天销售额</p>
            <p text-size-25px font-600 color-gray-600><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div flex-justify-between grid-items-center flex>
          <div i-basil:award-outline text-size-40px color-indigo-500></div>
          <div>
            <p pb-12px text-size-14px font-600 color-gray-500>当天销售额</p>
            <p text-size-25px font-600 color-gray-600><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div flex-justify-between grid-items-center flex>
          <div i-basil:award-outline text-size-40px color-indigo-500></div>
          <div>
            <p pb-12px text-size-14px font-600 color-gray-500>当天销售额</p>
            <p text-size-25px font-600 color-gray-600><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="12">
    <el-col :span="24">
      <el-card shadow="never" id="Card1" h-200px/>
    </el-col>
  </el-row>


  <div class="box">
    <h1>{{t('login.Welcome')}}</h1>
  </div>
</template>

<style scoped lang="scss">
</style>
