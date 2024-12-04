<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon.ts"

import PokemonDetailsCard from "@/components/PokemonDetailsCard.vue"

const pokemonStore = usePokemonStore()
</script>

<template>
  <div class="bg-slate-100">
    <div v-for="(pokemon, index) in pokemonStore.myPokemonTeam" :key="index">
      <div
        class="
          flex
          flex-col
          p-2
          w-full
        "
      >
        <PokemonDetailsCard
          :base-data="pokemon"
          :remove-from-team-action="() => {pokemonStore.removePokemonFromTeam(index)}"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
