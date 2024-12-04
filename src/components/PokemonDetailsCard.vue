<script setup lang="ts">
import { useRouter } from "vue-router"

import HorizontalBar from "@/components/HorizontalBar.vue"
import ArrowIcon from "@/components/Icons/ArrowIcon.vue"

const router = useRouter()

const props = defineProps({
  cardPosition: {
    type: Number,
    default: 0,
  },
  baseData: {
    type: Object,
    default() {
      return {}
    },
  },
  speciesData: {
    type: Object,
    default() {
      return {}
    },
  },
  evolutionChainData: {
    type: Object,
    default() {
      return {}
    },
  },
  removeFromTeamAction: {
    type: Function,
    default: () => {}
  }
})

function playSound(soundId: string) {
  document.getElementById(soundId).play()
}
function goToDetails(id: number) {
  router.push({path: `/team/${id}`})
}
function removeFromTeam() {
  props.removeFromTeamAction()
}
function getPokemonIdFromUrl(url: string) {
  const splitUrl = url.split('/')
  return splitUrl[splitUrl.length - 2]
}
</script>

<template>
  <div
    class="
      flex
      flex-col
      h-full
      bg-gray-500
      border
      border-gray-200
      rounded-lg
      shadow
      text-white
    "
  >
    <div
      class="
        flex
        w-full
      "
    >
      <div
        class="
          flex
          bg-orange-100
          rounded-tl-lg
          w-2/6
          self-stretch
        "
      >
        <img
          class="
            w-1/2
            m-auto
            rounded-tl-lg-
          "
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${baseData.id}.png`"
          :alt="baseData.name"
        >
      </div>
      <div
        class="
          m-3
          w-4/6
        "
      >
        <h5
          class="
            mb-2
            text-2xl
            font-semibold
            text-orange-100
            capitalize
          "
        >
          {{baseData.name}}
        </h5>
        <p
          class="
            mb-3
            font-normal
            text-orange-50
          "
        >
          {{ speciesData?.flavor_text_entries ? speciesData?.flavor_text_entries[1]?.flavor_text : 'No Description' }}
        </p>
        <audio
          :id="`latest-sound-${baseData.id}`"
          :src="baseData.cries.latest"
          preload="auto"
        />
        <audio
          :id="`legacy-sound-${baseData.id}`"
          :src="baseData.cries.legacy"
          preload="auto"
        />
        <div class="flex">
          <div
            class="font-bold"
            @click="playSound(`latest-sound-${baseData.id}`)"
          >
            Cry
          </div>
          <div
            class="font-bold"
            @click="playSound(`legacy-sound-${baseData.id}`)"
          >
            Legacy cry
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        flex
        flex-col
        w-full
        p-3
      "
    >
      <div class="font-bold">type:</div>
      <div class="flex">
        <div
          v-for="(pokemonType, index) in baseData.types"
          :key="index"
        >
          {{pokemonType.type.name}}
        </div>
      </div>
      <div class="font-bold">stats:</div>
      <div
        v-for="(pokemonStat, index) in baseData.stats"
        :key="index"
        class="flex"
      >
        <div
          class="
            w-[170px]
            self-center
          "
        >
          {{pokemonStat.stat.name}}:
        </div>
        <div
          class="
            mr-2
            self-center
          "
        >
          {{pokemonStat.base_stat}}
        </div>
        <div
          class="
            w-full
            self-center
          "
        >
          <HorizontalBar :percentage="pokemonStat.base_stat * 100 / 255" />
        </div>
      </div>
    </div>
    <div
      class="
        flex
        p-3
        justify-between
        self-end
      "
    >
      <button
        class="
          px-3
          py-2
          mr-1
          self-center
          font-medium
          text-center
          text-white
          rounded-lg
          bg-lime-800
          hover:bg-lime-900
        "
        @click="goToDetails(baseData.id)">
          View details
      </button>
      <button
        class="
          px-3
          py-2
          ml-1
          self-center
          font-medium
          text-center
          text-white
          rounded-lg
          bg-rose-700
          hover:bg-rose-800
        "
        @click="removeFromTeam"
      >
        Remove
      </button>
    </div>
    <div class="p-3">
      <div class="font-bold">evolution chain:</div>
      <div class="flex w-full">
        <div class="flex w-2/6">
          <div class="w-1/2 self-center">
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(evolutionChainData.chain.species.url)}.png`"
              class="m-auto"
              alt=""
            >
            <p class="text-center capitalize">{{evolutionChainData.chain.species.name}}</p>
          </div>
          <div class="w-1/2 self-center">
            <ArrowIcon class="w-10" color="#ffedd5"/>
          </div>
        </div>
        <div class="w-4/6">
          <div
            v-for="(evolution, evIndex) in evolutionChainData.chain.evolves_to"
            :key="evIndex"
            class="
              flex
              flex-row
            "
          >
            <div class="self-center">
              <img
                :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(evolution.species.url)}.png`"
                class="m-auto"
                alt=""
              >
              <p
                class="
                  text-center
                  capitalize
                "
              >
                {{ evolution.species.name }}
              </p>
            </div>
            <div
              v-for="(subEvolution, subEvIndex) in evolution.evolves_to"
              :key="subEvIndex"
              class="
                self-center
                flex
              "
            >
              <ArrowIcon
                class="
                  w-10
                  self-center
                "
                color="#ffedd5"
              />
              <div class="self-center">
                <img
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(subEvolution.species.url)}.png`"
                  class="m-auto"
                  alt=""
                >
                <p
                  class="
                    text-center
                    capitalize
                  "
                >
                  {{ subEvolution.species.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

