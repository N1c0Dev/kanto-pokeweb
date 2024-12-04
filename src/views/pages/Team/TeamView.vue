<script setup lang="ts">
import { useRouter } from 'vue-router'

import { usePokemonStore } from "@/stores/pokemon.ts"

const pokemonStore = usePokemonStore()
const router: any = useRouter()

function playSound(soundId: string) {
  document.getElementById(soundId).play()
}
function goToDetails(id: number) {
  router.push({path: `/team/${id}`})
}
</script>

<template>
  <div v-for="(pokemon, index) in pokemonStore.myPokemonTeam">
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`" alt="">
    <div><span class="font-bold">name: </span>{{pokemon.name}}</div>
    <div class="font-bold">type:</div>
    <div v-for="pokemonType in pokemon.types">
      {{pokemonType.type.name}}
    </div>
    <div class="font-bold">stats:</div>
    <div v-for="pokemonStat in pokemon.stats">
      {{pokemonStat.stat.name}}: {{pokemonStat.base_stat}}
    </div>
    <audio :id="`latest-sound-${index}`" :src="pokemon.cries.latest" preload="auto"></audio>
    <audio :id="`legacy-sound-${index}`" :src="pokemon.cries.legacy" preload="auto"></audio>
    <div class="font-bold" @click="playSound(`latest-sound-${index}`)">Cry</div>
    <div class="font-bold" @click="playSound(`legacy-sound-${index}`)">Legacy cry</div>
    <div @click="pokemonStore.removePokemonFromTeam(index)">Remove</div>
    <div @click="goToDetails(pokemon.id)">Details</div>
  </div>
</template>

<style scoped>

</style>
