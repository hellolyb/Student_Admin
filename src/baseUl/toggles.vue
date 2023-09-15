<template>
  <div class="toggle">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link"> 文 </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="中文">中文</el-dropdown-item>
          <el-dropdown-item divided command="English">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const store = useCounterStore()
const handleCommand = (val: string) => {
  if (val === '中文') {
    store.locale = 'zh'
  } else {
    store.locale = 'en'
  }
  locale.value = store.locale
}
</script>
<style lang="scss">
.el-dropdown-link {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
}
:focus-visible {
  outline: none;
}
</style>
