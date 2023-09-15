<template>
  <div class="menu">
    <el-col>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#32CCBC"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
        router
      >
        <el-menu-item :index="'/home/' + item.path" v-for="item in Menulist" :key="item.id">
          <el-icon><setting /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts" setup>
// defineProps父传子, defineEmits子传父, defineExpose组件中要暴露出去的属性 setup自带
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
const state = useCounterStore()
const Menulist = state.doubleCount

// 路由对象
const route = useRoute()
// 路由实例
const router = useRouter()
const data = reactive({})
</script>
<style scoped lang="scss">
.el-menu-vertical-demo {
  border: 0;
}
</style>
