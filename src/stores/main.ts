import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const paginationLoader = ref(false)
  const homePokemonListNotFound = ref(false)

  function setPaginationLoader(newValue: boolean) {
    paginationLoader.value = newValue
  }
  function setHomePokemonListNotFound(newValue: boolean) {
    homePokemonListNotFound.value = newValue
  }

  return {
    paginationLoader,
    homePokemonListNotFound,
    setPaginationLoader,
    setHomePokemonListNotFound,
  }
})
