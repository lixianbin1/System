<template>
  <div id="main">
    <el-container style="height: 100vh; ">
      <el-header style="display: flex;align-items: center;">
        <Head />
      </el-header>
      <el-container>
        <Menu />
        <el-main>
          <!-- vue3.0配置 Component是固定写法 -->
          <!-- <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view> -->
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
