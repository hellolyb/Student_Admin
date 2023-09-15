import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Toast from '@/utils/Toast'
import { useCounterStore } from '@/stores/counter'
import loca from '@/utils/loca/locas'
export default function hanlogIn() {
  const store = useCounterStore()
  const router = useRouter()
  const username = ref<string>('')
  const password = ref<string>('')
  // 登录校验
  const handleLogin = () => {
    if (!username.value || !password.value) {
      Toast('error', '账号密码不能为空')
    } else if (username.value !== 'admin' && password.value !== '123') {
      Toast('error', '账号密码错误')
    } else {
      store.token = 'alghalkbgmabsdawytgaioptjaiurtwgiwuxnabcnambailrwfgawiyapoibahksf'
      loca.setItem('token', 'alghalkbgmabsdawytgaioptjaiurtwgiwuxnabcnambailrwfgawiyapoibahksf')
      Toast('success', '登录成功')
      // 跳转首页
      router.push('/home')
    }
  }
  return {
    username,
    password,
    handleLogin
  }
}
