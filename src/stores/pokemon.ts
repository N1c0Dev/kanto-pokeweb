import { ref } from "vue"
import { defineStore } from "pinia"

import pokeApi from "@/pokeApi.ts"

export const usePokemonStore = defineStore("pokemon", () => {
  let pokemonList = ref({
    count: 0,
    next: null,
    previous: null,
    results: []
  })

  function getPokemonList() {
    pokeApi.pokemon.All().then((response: any) => {
      pokemonList.value = response.data
    }).catch((err: any) => {
      console.error(err)
    })
  }

  return {
    pokemonList,
    getPokemonList,
  }
})
