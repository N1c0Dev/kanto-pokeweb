import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const paginationLoader = ref(false)
  const homePokemonListNotFound = ref(false)
  const pokemonListLoader = ref(false)
  const pokemonDetailsLoader = ref(false)

  function setPaginationLoader(newValue: boolean) {
    paginationLoader.value = newValue
  }
  function setHomePokemonListNotFound(newValue: boolean) {
    homePokemonListNotFound.value = newValue
  }
  function setPokemonListLoader(newValue: boolean) {
    pokemonListLoader.value = newValue
  }
  function setPokemonDetailsLoader(newValue: boolean) {
    pokemonDetailsLoader.value = newValue
  }

  return {
    paginationLoader,
    homePokemonListNotFound,
    pokemonListLoader,
    pokemonDetailsLoader,
    setPaginationLoader,
    setHomePokemonListNotFound,
    setPokemonListLoader,
    setPokemonDetailsLoader,
  }
})
