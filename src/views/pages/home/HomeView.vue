<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useElementVisibility } from "@vueuse/core"

  import { usePokemonStore } from "@/stores/pokemon.ts"

  import SimpleCard from "@/components/SimpleCard.vue"
  import NavBar from "@/components/NavBar.vue";

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

  const pokemonSpriteBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

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
      const groupArray = document.getElementsByName(`group-${index}`)

      groupArray.forEach((item) => {
        index > 0 ? item.classList.add('hidden') : item.classList.remove('hidden')
      })
    }
  }
  function revealSection(index: number) {
    const groupArray = document.getElementsByName(`group-${index}`)

    groupArray.forEach((item) => {
      item.classList.remove('hidden')
    })
  }

  watch(targetGroupIsVisible1, async () => {
    setTimeout(() => revealSection(1), 500)
  })
  watch(targetGroupIsVisible2, async () => {
    setTimeout(() => revealSection(2), 500)
  })
  watch(targetGroupIsVisible3, async () => {
    setTimeout(() => revealSection(3), 500)
  })
  watch(targetGroupIsVisible4, async () => {
    setTimeout(() => revealSection(4), 500)
  })
  watch(targetGroupIsVisible5, async () => {
    setTimeout(() => revealSection(5), 500)
  })
  watch(targetGroupIsVisible6, async () => {
    setTimeout(() => revealSection(6), 500)
  })


  pokemonStore.getPokemonList('kanto')
  setTimeout(() => setInitPagination(), 100)
</script>

<template>
  <NavBar
    activePage="home"
    :pokemon-count="pokemonStore.myPokemonTeam.length"
  />
  <div
    class="
      flex
      flex-wrap
      m-5
      bg-slate-100
    "
  >
    <template  v-for="(pokemon, index) in pokemonStore.pokemonList.pokemon_entries" :key="index">
      <div
        class="
          flex
          flex-col
          p-2
          w-full
          sm:w-6/12
          md:w-4/12
          2xl:w-2/12
        "
        :ref="`targetGroup${setRef(pokemon.entry_number)}`"
        :id="`entry-${pokemon.entry_number}`"
        :name="`group-${setGroup(pokemon.entry_number)}`"
      >
        <SimpleCard
          buttonText="Add to team"
          button-text-disabled="Team is Full!"
          :button-action="() => { pokemonStore.addPokemonToTeam(pokemon.entry_number) }"
          :image-url="`${pokemonSpriteBaseUrl}${pokemon.entry_number}.png`"
          :title="`#${pokemon.entry_number} ${pokemon.pokemon_species.name}`"
          :disabled="pokemonStore.myPokemonTeam.length === 6"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
