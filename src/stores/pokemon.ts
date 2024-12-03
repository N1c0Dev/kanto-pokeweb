import { ref } from "vue"
import { defineStore } from "pinia"

import pokeApi from "@/pokeApi.ts"

export const usePokemonStore = defineStore("pokemon", () => {
  let pokemonList = ref({
    descriptions: [],
    id: 0,
    is_main_series: true,
    name: '',
    names: [],
    pokemon_entries: [],
    region: {},
    version_groups: []
  })
  let pokemonDetail = ref({
    abilities: [],
    base_experience: 0,
    cries: {},
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: true,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_abilities: [],
    past_types: [],
    species: {},
    sprites: {},
    stats: [],
    types: [],
    weight: 0
  })
  let pokemonSpecies = ref({})
  let evolutionChain = ref({
    baby_trigger_item:	null,
    chain: {},
    id: 0,
  })
  let myPokemonTeam = ref([])

  function getPokemonList(type: string) {
    pokeApi.pokedex.get(type).then((response: any) => {
      pokemonList.value = response.data
    }).catch((err: any) => {
      console.error(err)
    })
  }
  function getPokemon(name: string) {
    pokeApi.pokemon.one(name).then((response: any) => {
      pokemonDetail.value = response.data
    }).catch((err: any) => {
      console.error(err)
    })
  }
  function getPokemonSpecies(idOrName: string | number) {
    pokeApi.pokemonSpecies.one(idOrName).then((response: any) => {
      pokemonSpecies.value = response.data
    }).catch((err: any) => {
      console.error(err)
    })
  }
  function getEvolutionChain(id: number) {
    pokeApi.evolutionChain.one(id).then((response: any) => {
      evolutionChain.value = response.data
    }).catch((err: any) => {
      console.error(err)
    })
  }

  function addPokemonToTeam(entry: number) {
    if (myPokemonTeam.value.length < 6) {
      pokeApi.pokemon.one(entry).then((response: any) => {
        myPokemonTeam.value.push(response.data)
      }).catch((err: any) => {
        console.error(err)
      })
    }
  }
  function removePokemonFromTeam(index: number) {
    myPokemonTeam.value.splice(index, 1)
  }

  return {
    pokemonList,
    pokemonDetail,
    pokemonSpecies,
    evolutionChain,
    myPokemonTeam,
    getPokemonList,
    getPokemon,
    getPokemonSpecies,
    getEvolutionChain,
    addPokemonToTeam,
    removePokemonFromTeam,
  }
})
