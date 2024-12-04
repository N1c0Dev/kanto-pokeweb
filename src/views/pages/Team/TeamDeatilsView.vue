<script setup lang="ts">
import { useRoute } from 'vue-router'

import { usePokemonStore } from "@/stores/pokemon.ts"

const route: any = useRoute()

const pokemonStore = usePokemonStore()

function playSound(soundId: string) {
  document.getElementById(soundId).play()
}

pokemonStore.getPokemon(route.params.id)
pokemonStore.getPokemonSpecies(route.params.id)
setTimeout(() => pokemonStore.getEvolutionChain(pokemonStore.pokemonSpecies.evolution_chain.url), 500)
</script>

<template>
  <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonStore.pokemonDetail.id}.png`" alt="">
  <div><span class="font-bold">name: </span>{{pokemonStore.pokemonDetail.name}}</div>
  <div class="font-bold">type:</div>
  <div v-for="pokemonType in pokemonStore.pokemonDetail.types">
    {{pokemonType.type.name}}
  </div>
  <div class="font-bold">stats:</div>
  <div v-for="pokemonStat in pokemonStore.pokemonDetail.stats">
    {{pokemonStat.stat.name}}: {{pokemonStat.base_stat}}
  </div>
  <div><span class="font-bold">altura: </span>{{pokemonStore.pokemonDetail.height * 10}} cm</div>
  <div><span class="font-bold">peso: </span>{{pokemonStore.pokemonDetail.weight * 100}} g</div>
  <audio id="latest-sound" :src="pokemonStore.pokemonDetail.cries.latest" preload="auto"></audio>
  <audio id="legacy-sound" :src="pokemonStore.pokemonDetail.cries.legacy" preload="auto"></audio>
  <div class="font-bold" @click="playSound('latest-sound')">Cry</div>
  <div class="font-bold" @click="playSound('legacy-sound')">Legacy cry</div>
  <div><span class="font-bold">description: </span>{{pokemonStore.pokemonSpecies.flavor_text_entries[0].flavor_text}}</div>
  <div class="font-bold">evolution chain:</div>
  <div>{{pokemonStore.evolutionChain.chain.species.name}}</div>
  <div class="underline">Options:</div>
  <div v-for="evolution in pokemonStore.evolutionChain.chain.evolves_to">
    {{ evolution.species.name }}
    <span v-for="subEvolution in evolution.evolves_to">
    > {{ subEvolution.species.name }}
    </span>
  </div>
</template>

<style scoped>

</style>
