import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMainStore } from './main'

import pokeApi from '@/api/pokeApi.ts'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonList = ref({
    descriptions: [],
    id: 0,
    is_main_series: true,
    name: '',
    names: [],
    pokemon_entries: [{
      entry_number: 0,
      pokemon_species: {
        name: ''
      },
    }],
    region: {},
    version_groups: []
  })
  const pokemonDetail = ref({
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
  const pokemonSpecies = ref({
    evolution_chain: {
      url: ''
    },
  })
  const evolutionChain = ref({
    baby_trigger_item:	null,
    chain: {},
    id: 0,
  })
  const myPokemonTeam: any = ref([])

  const mainStore = useMainStore()

  function getPokemonList(type: string) {
    pokeApi.pokedex.get(type).then((response: any) => {
      pokemonList.value = response.data
    }).catch((err: any) => {
      mainStore.setHomePokemonListNotFound(true)
      console.error(err)
    })
  }
  function getPokemon(name: string | string[]) {
    pokeApi.pokemon.one(name).then((response: any) => {
      pokemonDetail.value = response.data
    }).catch((err: any) => {
      console.error(err)
    })
  }
  function getPokemonSpecies(idOrName: string | string[] | number) {
    pokeApi.pokemonSpecies.one(idOrName).then((response: any) => {
      pokemonSpecies.value = response.data
    }).catch((err: any) => {
      console.error(err)
    })
  }
  function getEvolutionChain(url: string) {
    pokeApi.evolutionChain.one(url).then((response: any) => {
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
