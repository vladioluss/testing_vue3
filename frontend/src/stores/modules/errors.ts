import {defineStore} from "pinia";
import {ref} from "vue";


export const useErrorsStore = defineStore('errors', () => {
  const errors = ref('')

  function setError(err: string): void {
    errors.value = err
  }

  return {
    errors,
    setError,
  }
})