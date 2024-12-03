<script setup lang="ts">
  import { ref } from 'vue'
  import { usePokemonStore } from "@/stores/pokemon.ts"

  const pokemonStore = usePokemonStore()

  pokemonStore.getPokemonList('kanto')
</script>

<template>
  <div class="flex flex-wrap">
    <template  v-for="pokemon in pokemonStore.pokemonList.pokemon_entries">
      <div :id="pokemon.entry_number" class="flex flex-col w-1/3">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`" alt="">
        #{{ pokemon.entry_number }}
        {{ pokemon.pokemon_species.name }}
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
