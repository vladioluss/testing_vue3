import {defineStore} from "pinia";
import {ref} from "vue";


export const usePreloaderStore = defineStore('preloader', () => {
  const active = ref(false)

  function setActivePreloader(isActive: boolean) {
    active.value = isActive
  }

  return {
    active,
    setActivePreloader,
  }
})