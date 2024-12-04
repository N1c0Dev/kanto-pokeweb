<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon.ts"

import PokemonDetailsCard from "@/components/PokemonDetailsCard.vue"
import NavBar from "@/components/NavBar.vue";

const pokemonStore = usePokemonStore()
</script>

<template>
  <NavBar activePage="team"/>
  <div
    class="
      flex
      flex-col
      bg-slate-100
      m-5
      md:flex-row
      md:flex-wrap
    "
  >
    <div
      v-for="(pokemon, index) in pokemonStore.myPokemonTeam"
      :key="index"
      class="
        md:w-1/2
        xl:w-4/12
      "
    >
      <div
        class="
          flex
          flex-col
          p-2
          md:h-full
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
