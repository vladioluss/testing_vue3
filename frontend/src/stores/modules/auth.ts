import {defineStore} from "pinia";
import type {User} from "@/types/user";
import {ref} from "vue";
import {getItems} from "@/app/api";
import router from "@/router";


// Главный роут
const URL: string = 'users'

export const useAuthStore = defineStore('auth', () => {
  const users = ref<User[]>([])
  const user = ref<Object | null>({})


  // Использую для авторизации
  // ПОлучаем и сохраняем юзера
  async function getUser(params: User): Promise<void> {
    await getItems(URL, params)
      .then(res => {
        user.value = res.data[0]
        localStorage.setItem('user', JSON.stringify(user.value))
      })
  }

  // Функция для получения пользователя из localStorage
  function getStoredUser(): User | null {
    const storedUser = localStorage.getItem('user')
    if (storedUser === 'undefined') {
      localStorage.removeItem('user')
    }
    return storedUser ? JSON.parse(storedUser) : null
  }

  // При загрузке приложения проверяем, есть ли сохраненный пользователь
  user.value = getStoredUser()

  /*// Отправка POST-запроса для авторизации
  async function login(params) {
    await apiInstance.post('/users', params)
      .then(res => {
        console.log('login()', res)
        user.value = res.data
      })
  }*/

  // Выходим из аккаута и чистим localStorage
  function logout(): void {
    user.value = {}
    localStorage.removeItem('user')
    router.push({ name: 'login'})
  }

  return {
    users,
    user,
    logout,
    getUser,
  }
})