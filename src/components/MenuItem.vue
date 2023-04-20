<script setup lang="ts">
import { Icon } from '@iconify/vue';
const {data} = defineProps(['data'])
</script>

<template>
  <el-sub-menu :index="data.index" v-if="data.children">
    <template #title>
      <el-icon v-if="data.icon">
        <Icon :icon="data.icon" />
      </el-icon>
      <span>{{ data.title }}</span>
    </template>
    <template v-for="item in data.children">
      <MenuItem :data="item"/>
    </template>
    <el-menu-item :index="data.index" style="display: none;"/>
  </el-sub-menu>
  <el-menu-item :index="data.index" v-else>
    <el-icon v-if="data.icon">
      <Icon :icon="data.icon" />
    </el-icon>
    <span>{{ data.title }}</span>
  </el-menu-item>
</template>
