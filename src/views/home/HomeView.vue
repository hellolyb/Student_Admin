<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-header>
          <img-ui></img-ui>
          <screenshot></screenshot>
          <toggles></toggles>
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import imgUi from '@/baseUl/imgUi.vue'
import toggles from '@/baseUl/toggles.vue'
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }

  .el-container {
    height: 100vh;
  }
}
</style>
