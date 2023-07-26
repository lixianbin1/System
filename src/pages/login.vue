<script setup lang="ts">
// const { t } = useI18n()
const state = reactive({
  // 判断登录还是重置密码状态
  loading: false,
  type: 'login', // login or change
  form: { // 登录请求数据
    ptCode: '',
    username: '',
    password: '',
  },
})

// 修改密码
const change = reactive({
  newPwd: '',
  newsPwd: '',
  oldPwd: state.form.password,
})
watch(() => state.form.password, (newPassword) => {
  change.oldPwd = newPassword
})
</script>

<template>
  <el-container id="login" h-100vh overflow-hidden>
    <el-header class="header" flex items-center>
      <h1 class="title" flex-1 text-18px font-800>
        Welcome
      </h1>
    </el-header>
    <el-main class="main">
      <div class="login_box" :class="{ switching: state.loading }">
        <p>login</p>
      </div>
    </el-main>
    <el-footer style="align-items: center;display: flex;">
      <span class="footerTitle">FontTitle</span>
    </el-footer>
  </el-container>
</template>

<route lang="yaml">
meta:
  layout: login
</route>

<style scoped lang="scss">
</style>
