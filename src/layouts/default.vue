<template>
  <div id="main">
    <el-container style="height: 100vh; ">
      <el-header style="display: flex;align-items: center;">
        <Head />
      </el-header>
      <el-container>
        <Menu />
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
