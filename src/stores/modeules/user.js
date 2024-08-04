import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUserInfo } from '@/api/user'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const user = ref({})
    const getUser = async () => {
      const res = await getUserInfo()
      user.value = res.data.data
    }
    const setUser = (newInfo) => {
      user.value = newInfo
    }
    return {
      token,
      setToken,
      user,
      getUser,
      setUser
    }
  },
  {
    persist: true
  }
)
