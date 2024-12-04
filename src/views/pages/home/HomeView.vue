<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useElementVisibility } from "@vueuse/core"

  import { usePokemonStore } from "@/stores/pokemon.ts"

  const pokemonStore = usePokemonStore()

  const targetGroup1 = ref(null)
  const targetGroup2 = ref(null)
  const targetGroup3 = ref(null)
  const targetGroup4 = ref(null)
  const targetGroup5 = ref(null)
  const targetGroup6 = ref(null)
  const targetGroupIsVisible1 = useElementVisibility(targetGroup1)
  const targetGroupIsVisible2 = useElementVisibility(targetGroup2)
  const targetGroupIsVisible3 = useElementVisibility(targetGroup3)
  const targetGroupIsVisible4 = useElementVisibility(targetGroup4)
  const targetGroupIsVisible5 = useElementVisibility(targetGroup5)
  const targetGroupIsVisible6 = useElementVisibility(targetGroup6)

  function setGroup(index: number) {
    const groupValidation = [
      index <= 25,
      index > 25 && index <= 50,
      index > 50 && index <= 75,
      index > 75 && index <= 100,
      index > 100 && index <= 125,
      index > 125 && index <= 150,
      index > 150,
    ]
    return `${groupValidation.indexOf(true)}`
  }
  function setRef(index: number) {
    const refValidation = [
      index == 25,
      index == 50,
      index == 75,
      index == 100,
      index == 125,
      index == 150,
      index == 150,
    ]
    return `${refValidation.indexOf(true) + 1}`
  }
  function setInitPagination() {
    for(let index = 0; index < 7; index++) {
      let groupArray = document.getElementsByName(`group-${index}`)

      groupArray.forEach((item) => {
        index > 0 ? item.classList.add('hidden') : item.classList.remove('hidden')
      })
    }
  }
  function revealSection(index: number) {
    let groupArray = document.getElementsByName(`group-${index}`)

    groupArray.forEach((item) => {
      item.classList.remove('hidden')
    })
  }

  watch(targetGroupIsVisible1, async (_) => {
    setTimeout(() => revealSection(1), 500)
  })
  watch(targetGroupIsVisible2, async (_) => {
    setTimeout(() => revealSection(2), 500)
  })
  watch(targetGroupIsVisible3, async (_) => {
    setTimeout(() => revealSection(3), 500)
  })
  watch(targetGroupIsVisible4, async (_) => {
    setTimeout(() => revealSection(4), 500)
  })
  watch(targetGroupIsVisible5, async (_) => {
    setTimeout(() => revealSection(5), 500)
  })
  watch(targetGroupIsVisible6, async (_) => {
    setTimeout(() => revealSection(6), 500)
  })


  pokemonStore.getPokemonList('kanto')
  setTimeout(() => setInitPagination(), 100)
</script>

<template>
  <div class="flex flex-wrap">
    <template  v-for="pokemon in pokemonStore.pokemonList.pokemon_entries">
      <div :ref="`targetGroup${setRef(pokemon.entry_number)}`" :id="`entry-${pokemon.entry_number}`"  :name="`group-${setGroup(pokemon.entry_number)}`" class="flex flex-col w-1/3">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`" alt="">
        #{{ pokemon.entry_number }}
        {{ pokemon.pokemon_species.name }}
        <div @click="pokemonStore.addPokemonToTeam(pokemon.entry_number)">Add to my team</div>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
