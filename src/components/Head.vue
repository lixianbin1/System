<script setup lang="ts">
const router = useRouter()
// 退出
const signOut=()=>{
  router.push(`/login`)

}
</script>

<template>
  <div style="flex:1">
    <h3 class="name">ABC Bank Account</h3> 
  </div>
  <div style="flex:2">
    <h1 class="title">Credit Reference Platform Access Portal,CRP</h1>
  </div>
  <div style="flex:1" class="user">
    <el-button class="userinfo" link >
      <i-carbon:user-avatar-filled/>
    </el-button>
    <el-button class="signout" type="danger" link @click="signOut" >
      <i-carbon:logout/>
    </el-button>
    <LanguageButton />
    <button icon-btn @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.name{
  font-size: 18px;
  font-weight: bold;
}
.title{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.user{
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background-image: radial-gradient(transparent 1px,var(--bg-color) 1px);
  .title{
    font-size: 18px;
    font-weight: bold;
  }
  .userinfo{
    font-size: 18px;
  }
  .signout{
    font-size: 18px;
  }
}
</style>