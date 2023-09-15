<template>
  <div class="imgs">
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" height="800px">
        <el-carousel-item v-for="item in arr" :key="item.url">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const arr = ref([
  {
    url: 'https://www.dpm.org.cn/Uploads/Picture/2023/03/30/s6424e710ba330.jpg'
  },
  {
    url: 'https://www.dpm.org.cn/Uploads/Picture/2023/04/25/s64473dee20bbb.jpg'
  },
  {
    url: 'https://www.dpm.org.cn/Uploads/Picture/2023/04/25/s6447754760394.jpg'
  },
  {
    url: 'https://www.dpm.org.cn/Uploads/Picture/2023/03/29/s64238fec57770.jpg'
  }
])
onMounted(() => {
  let arr = [
    {
      name: '张三',
      age: 38,
      children: [
        {
          name: '张无',
          age: 12
        }
      ]
    },
    {
      name: '李四',
      age: 38,
      children: [
        {
          neme: '李无',
          age: 12
        }
      ]
    }
  ]
  console.log(arr)

  let br = structuredClone(arr)
  br[0].name = '张天'
  console.log(br)
})
</script>
<style scoped lang="scss">
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.el-carousel__item {
  background-color: #99a9bf;
}
</style>
