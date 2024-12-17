<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useMainStore } from '@/stores/main.ts'
import { usePokemonStore } from '@/stores/pokemon.ts'

import PokemonDetailsCard from '@/components/PokemonDetailsCard.vue'
import NavBar from '@/components/NavBar.vue'
import ScreenLoader from '@/components/screenLoader.vue'
import ArrowIcon from '@/components/Icons/ArrowIcon.vue'

const route = useRoute()
const router = useRouter()

const pokemonIsValid = ref(false)

const mainStore = useMainStore()
const pokemonStore = usePokemonStore()

function checkPokemon(){
  pokemonIsValid.value = pokemonStore.myPokemonTeam.find(
    (pokemon: { id: string | string[]}) => pokemon.id == route.params.id
  )
}
function goToTeam() {
  router.push({path: '/team'})
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
    <ScreenLoader :show="mainStore.pokemonDetailsLoader" />
    <div
      v-if="pokemonIsValid"
      class="
        mx-5
        mt-5
      "
    >
      <div class="flex w-fit gap-1 mb-5 cursor-pointer justify-start" @click="goToTeam">
        <ArrowIcon
          class="rotate-180 w-10 self-center"
          color="#292524"
        />
        <p class="self-center font-semibold text-slate-800">Back</p>
      </div>
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