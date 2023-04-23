<script setup lang="ts">
const { availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <el-button
    class="userinfo"
    link
    @click="toggleLocales"
    >
      <i-carbon:language/>
  </el-button>
</template>

<style scoped lang="scss">
.userinfo{
  font-size: 18px;
}
</style>