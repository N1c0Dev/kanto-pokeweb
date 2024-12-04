<script setup lang="ts">
import { useRoute } from 'vue-router'

import { usePokemonStore } from "@/stores/pokemon.ts"

import PokemonDetailsCard from "@/components/PokemonDetailsCard.vue"

const route = useRoute()

const pokemonStore = usePokemonStore()

pokemonStore.getPokemon(route.params.id)
pokemonStore.getPokemonSpecies(route.params.id)
setTimeout(() => pokemonStore.getEvolutionChain(pokemonStore.pokemonSpecies.evolution_chain.url), 500)
</script>

<template>
  <PokemonDetailsCard
    :base-data="pokemonStore.pokemonDetail"
    :species-data="pokemonStore.pokemonSpecies"
    :evolution-chain-data="pokemonStore.evolutionChain"
  />
</template>

<style scoped>

</style>
