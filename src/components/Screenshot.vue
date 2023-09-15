<template>
  <div class="S_creenShot" @click="changeScreenShot">截屏</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import ScreenShot from 'js-web-screen-shot'
const changeScreenShot = () => {
  nextTick(() => {
    new ScreenShot({ enableWebRtc: false })
  })
}
</script>
<style scoped lang="scss">
.S_creenShot {
  width: 100px;
  line-height: 30px;
  text-align: center;
  background-color: #39f;
}
</style>
