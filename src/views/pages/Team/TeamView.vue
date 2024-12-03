<script setup lang="ts">
import { usePokemonStore } from "@/stores/pokemon.ts"

const pokemonStore = usePokemonStore()

function playSound(soundId: string) {
  document.getElementById(soundId).play()
}

pokemonStore.getPokemon('pikachu')
</script>

<template>
  <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonStore.pokemonDetail.id}.png`" alt="">
  <div><span class="font-bold">name: </span>{{pokemonStore.pokemonDetail.name}}</div>
  <div class="font-bold">type:</div>
  <div v-for="pokemonType in pokemonStore.pokemonDetail.types">
    {{pokemonType.type.name}}
  </div>
  <div class="font-bold">stats:</div>
  <div v-for="pokemonStat in pokemonStore.pokemonDetail.stats">
    {{pokemonStat.stat.name}}: {{pokemonStat.base_stat}}
  </div>
  <audio id="latest-sound" :src="pokemonStore.pokemonDetail.cries.latest" preload="auto"></audio>
  <audio id="legacy-sound" :src="pokemonStore.pokemonDetail.cries.legacy" preload="auto"></audio>
  <div class="font-bold" @click="playSound('latest-sound')">Cry</div>
  <div class="font-bold" @click="playSound('legacy-sound')">Legacy cry</div>
</template>

<style scoped>

</style>
