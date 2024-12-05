<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { usePokemonStore } from "@/stores/pokemon.ts"

import PokemonDetailsCard from "@/components/PokemonDetailsCard.vue"
import NavBar from "@/components/NavBar.vue";

const route = useRoute()

const pokemonIsValid: boolean = ref(false)

const pokemonStore = usePokemonStore()

function checkPokemon(){
  pokemonIsValid.value = pokemonStore.myPokemonTeam.find(pokemon => pokemon.id == route.params.id)
}

checkPokemon()
if (pokemonIsValid.value) {
  pokemonStore.getPokemon(route.params.id)
  pokemonStore.getPokemonSpecies(route.params.id)
  setTimeout(() => pokemonStore.getEvolutionChain(pokemonStore.pokemonSpecies.evolution_chain.url), 500)
}
</script>

<template>
  <div class="mb-5">
    <NavBar
      activePage="team"
      :pokemon-count="pokemonStore.myPokemonTeam.length"
    />
    <div
      v-if="pokemonIsValid"
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
    <div
      v-else
      class="
        mx-5
        mt-5
      "
    >
      <section
        class="
        flex
        flex-col
        bg-slate-300
        h-screen
        w-full
        shadow
        rounded-lg
        text-gray-500
        text-3xl
        font-semibold
      "
      >
        <img
          class="
          mt-auto
          mx-auto
          w-[150px]
        "
          src="@/assets/icons/pokeball.svg"
          alt="pokeball"
        />
        <div
          class="
          mb-auto
          mx-auto
        "
        >
          This Pokémon is not currently part of your team
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>
