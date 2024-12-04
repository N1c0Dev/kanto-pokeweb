<script setup lang="ts">
import { useRoute } from 'vue-router'

import { usePokemonStore } from "@/stores/pokemon.ts"

import PokemonDetailsCard from "@/components/PokemonDetailsCard.vue"
import NavBar from "@/components/NavBar.vue";

const route = useRoute()

const pokemonStore = usePokemonStore()

pokemonStore.getPokemon(route.params.id)
pokemonStore.getPokemonSpecies(route.params.id)
setTimeout(() => pokemonStore.getEvolutionChain(pokemonStore.pokemonSpecies.evolution_chain.url), 500)
</script>

<template>
  <div class="mb-5">
    <NavBar activePage="team"/>
    <div
      class="
        mx-5
        mt-5
      "
    >
      <PokemonDetailsCard
        :is-expanded="true"
        :base-data="pokemonStore.pokemonDetail"
        :species-data="pokemonStore.pokemonSpecies"
        :evolution-chain-data="pokemonStore.evolutionChain"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
