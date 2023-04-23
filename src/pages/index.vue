<script setup lang="ts">
import * as echarts from 'echarts';
const { t } = useI18n()

const oneChart=shallowRef({})
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
onMounted(() => {
  initChart()
  EchartOne()
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
</script>

<template>
  <el-row :gutter="12">
    <el-col :span="6">
      <el-card shadow="hover" >
        <div class="card-header">
          <span>
            <i-basil:award-outline style="font-size: 40px;color: #5470c6;"/>
          </span>
          <div>
            <p class="pb-12px">当天销售额</p>
            <p><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="card-header">
          <span>
            <i-basil:award-outline style="font-size: 40px;color: #5470c6;"/>
          </span>
          <div>
            <p class="pb-12px">当天销售额</p>
            <p><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="card-header">
          <span>
            <i-basil:award-outline style="font-size: 40px;color: #5470c6;"/>
          </span>
          <div>
            <p class="pb-12px">当天销售额</p>
            <p><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div class="card-header">
          <span>
            <i-basil:award-outline style="font-size: 40px;color: #5470c6;"/>
          </span>
          <div>
            <p class="pb-12px">当天销售额</p>
            <p><span>¥</span>2888</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="12">
    <el-col :span="24">
      <el-card shadow="never" id="Card1"/>
    </el-col>
  </el-row>


  <div class="box">
    <h1>{{t('login.Welcome')}}</h1>
  </div>
</template>

<style scoped lang="scss">
#Card1{
  height: 200px;
}
.card-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  >span{
    color: #666;
  }
  p{
    font-size: 20px;
    font-weight: 600;
    color: #6a6a6a;
  }
}
.el-row{
  margin-bottom: 12px;
}
</style>
