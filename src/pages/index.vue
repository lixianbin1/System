<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="box">
    <h1>{{t('login.Welcome')}}</h1>
  </div>
</template>

<style scoped lang="scss">
.box{
  h1{
    font-size: 20px;
  }
}
</style>
