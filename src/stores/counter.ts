import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const menuList = [
    {
      name: '聊天室',
      path: 'chat',
      id: 1
    },
    {
      name: 'excel',
      path: 'updata',
      id: 2
    },
    {
      name: 'bem规范',
      path: 'bem',
      id: 2
    }
  ]
  const locale = ref('en')
  const token = ref('')
  const doubleCount = computed(() => menuList)
  console.log(locale.value)
  watch(
    () => locale.value,
    () => {
      console.log(locale.value)
    }
  )
  return { doubleCount, token, locale }
})
