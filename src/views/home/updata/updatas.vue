<template>
  <div class="udata">
    <tables></tables>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import tables from '@/components/tables.vue'
</script>
<style scoped lang="scss">
.udata {
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>
