<script setup lang="ts">
  import { ref } from 'vue'
  import { usePokemonStore } from "@/stores/pokemon.ts"

  const pokemonStore = usePokemonStore()

  pokemonStore.getPokemonList()
</script>

<template>
  <div class="flex flex-wrap">
    <template  v-for="(pokemon, key) in pokemonStore.pokemonList.results">
      <div class="flex flex-col w-1/3">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${key + 1}.png`" alt="">
        {{ pokemon.name }}
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
