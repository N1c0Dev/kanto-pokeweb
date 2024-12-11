import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const paginationLoader = ref(false)

  function setPaginationLoader(newValue: boolean) {
    paginationLoader.value = newValue
  }

  return {
    paginationLoader,
    setPaginationLoader,
  }
})
