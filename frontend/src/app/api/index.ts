import axios from "axios";
import {useErrorsStore} from "@/stores/modules/errors";


export const apiInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

// Добавляем перехват ответов
apiInstance.interceptors.response.use(function (response) {
  // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
  return response
}, function (error) {
  // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
  // Записываем ошибку в стор
  useErrorsStore().setError(error.message)
  return Promise.reject(error)
})


/** Получение всех или определенного элемента */
export function getItems(url: string, params: object = {}) {
  return apiInstance.get(url, { params: params })
}

/** Создание записи */
export function postItem(url: string, params: object = {}) {
  return apiInstance.post(url, params)
}


/** Редактирование записи */
export function putItem(url: string, data: object = {}) {
  return apiInstance.put(url, data)
}

/** Удаление записи */
export function delItem(url: string, data: object = {}) {
  return apiInstance.delete(url, data)
}