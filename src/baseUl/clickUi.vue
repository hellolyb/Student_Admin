<template>
  <div class="textUl"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
onMounted(() => {
  function bg3() {
    // let rs = Math.floor(Math.random() * (170 - 100) + 100)
    // let gs = Math.floor(Math.random() * (170 - 100) + 100)
    // let bs = Math.floor(Math.random() * (100 - 90) + 90)
    // return 'rgb(' + rs + ',' + gs + ',' + bs + ')'
    let color = [
      '#F08080',
      '#C71585',
      '#FF6347',
      '#BA55D3',
      '#32CD32',
      '#66CDAA',
      '#20B2AA',
      '#00CED1',
      '#00BFFF',
      '#7B68EE',
      '#B0E0E6',
      '#008080',
      '#FA8072',
      '#f39'
    ]
    return color[Math.floor(Math.random() * color.length)]
  }

  // let as = [
  //   '富强😀',
  //   '民主😁',
  //   '文明😊',
  //   '和谐😃',
  //   '自由😍',
  //   '平等🙂',
  //   '公正😉',
  //   '法制🤗',
  //   '爱国🫡',
  //   '敬业😜',
  //   '诚信🙂',
  //  ,'友善😊'
  // ]
  let as = [
    '😀',
    '😁',
    '😊',
    '😃',
    '😍',
    '🙂',
    '😉',
    '🤗',
    '🫡',
    '😜',
    '🙂',
    '😊',
    '😉',
    '😋',
    '😗',
    '😶‍🌫️',
    '🥰',
    '😘',
    '🤩',
    '🤔',
    '😏',
    '🫠',
    '🤯',
    '😳',
    '🤪',
    '😱',
    '😨',
    '🥹',
    '🫢',
    '🫣',
    '🤭',
    '🤫',
    '🤥'
  ]
  document.onclick = function (e) {
    let spans = document.createElement('h6')
    // span.innerHTML = "<img src="+a[Math.floor(Math.random()*a.length)]+">"
    spans.innerHTML = as[Math.floor(Math.random() * as.length)]
    spans.style.position = 'absolute'
    spans.style.color = bg3()
    spans.style.transition = '.5s'
    spans.style['font-size'] = '25px'
    spans.style.left = e.clientX - 10 + 'px'
    spans.style.top = e.clientY - 30 + 'px'
    setTimeout(function () {
      spans.style.opacity = '1'
      spans.style.transform = 'translateY(-50px) scale(1.5)'
    }, 100)
    setTimeout(function () {
      spans.style.opacity = '0'
      spans.style.transform = 'translateY(-200px) scale(0)'
    }, 500)
    document.body.appendChild(spans)
  }
})
</script>
<style scoped lang="scss">
.h6 {
  font-size: 40px !important;
  z-index: 999 !important;
}
</style>
