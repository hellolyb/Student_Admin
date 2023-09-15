import { createI18n } from 'vue-i18n'
import { useCounterStore } from '@/stores/counter'
import pinia from '@/stores/pinia'
const stores = useCounterStore(pinia)
import en from './en'
import zh from './zh'
const locale = stores.locale
console.log(stores.locale)

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  // 控制默认加载的语言包
  locale,
  // 注册语言包
  messages: {
    en,
    zh
  }
})

export default i18n
