<script setup lang="ts">
// 元素拖拽
const elDraggable=ref<HTMLElement|null>(null)

const { x, y, style } = useDraggable(elDraggable, {
  initialValue: { x: 40, y: 40 },
})

</script>

<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" pb20px>
      <el-card class="box-card relative h200px">
        <el-card ref="el" :style="style" style="position: absolute">
          Drag me! I am at {{x}}, {{y}}
        </el-card>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" pb20px>
      <el-card class="box-card" >
        
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" pb20px>
      <el-card class="box-card" >
        
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" pb20px>
      <el-card class="box-card" >
        
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" pb20px>
      <el-card class="box-card" >
        
      </el-card>
    </el-col>
  </el-row>  

</template>

<style scoped>
</style>
