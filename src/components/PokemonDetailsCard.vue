<script setup lang="ts">
import { useRouter } from "vue-router"

import HorizontalBar from "@/components/HorizontalBar.vue"
import ArrowIcon from "@/components/Icons/ArrowIcon.vue"
import SoundWaveIcon from "@/components/Icons/SoundWaveIcon.vue";

const router = useRouter()

const props = defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
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
function setBadgeTypeColor(type: string) {
  const typeColors = {
    normal: {
      bg: 'bg-zinc-200',
      text: 'text-zinc-400',
    },
    fire: {
      bg: 'bg-orange-200',
      text: 'text-orange-600',
    },
    water: {
      bg: 'bg-blue-200',
      text: 'text-blue-500',
    },
    electric: {
      bg: 'bg-amber-200',
      text: 'text-amber-400',
    },
    grass: {
      bg: 'bg-lime-200',
      text: 'text-lime-600',
    },
    ice: {
      bg: 'bg-sky-200',
      text: 'text-sky-300',
    },
    fighting: {
      bg: 'bg-red-200',
      text: 'text-red-500',
    },
    poison: {
      bg: 'bg-fuchsia-200',
      text: 'text-fuchsia-700',
    },
    ground: {
      bg: 'bg-amber-200',
      text: 'text-amber-300',
    },
    flying: {
      bg: 'bg-indigo-200',
      text: 'text-indigo-400',
    },
    psychic: {
      bg: 'bg-pink-200',
      text: 'text-pink-500',
    },
    bug: {
      bg: 'bg-lime-200',
      text: 'text-lime-500',
    },
    rock: {
      bg: 'bg-stone-200',
      text: 'text-stone-400',
    },
    ghost: {
      bg: 'bg-violet-200',
      text: 'text-violet-500',
    },
    dragon: {
      bg: 'bg-indigo-200',
      text: 'text-indigo-500',
    },
    dark: {
      bg: 'bg-stone-200',
      text: 'text-stone-600',
    },
    steel: {
      bg: 'bg-gray-200',
      text: 'text-gray-400',
    },
    fairy: {
      bg: 'bg-fuchsia-200',
      text: 'text-fuchsia-300',
    },
  }

  return typeColors[type]
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
          v-if="isExpanded"
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
          <button
            class="
              flex
              px-3
              py-2
              mr-1
              self-center
              font-medium
              text-center
              text-white
              text-sm
              rounded-lg
              bg-yellow-600
            "
            @click="playSound(`latest-sound-${baseData.id}`)"
          >
            <SoundWaveIcon
              class="
                w-6
                self-center
                mr-1
              "
              color="white"
            />
            Latest Cry
          </button>
          <button
            class="
              flex
              px-3
              py-2
              mr-1
              self-center
              font-medium
              text-center
              text-white
              text-sm
              rounded-lg
              bg-yellow-600
            "
            @click="playSound(`legacy-sound-${baseData.id}`)"
          >
            <SoundWaveIcon
              class="
                w-6
                self-center
                mr-1
              "
              color="white"
            />
            Legacy Cry
          </button>
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
      <h2
        class="
          font-bold
          text-orange-100
          text-xl
          border-b
          border-orange-100
          pb-2
        "
      >
        Type
      </h2>
      <div
        class="
          flex
          flex-wrap
          my-2
        "
      >
        <div
          v-for="(pokemonType, index) in baseData.types"
          :key="index"
        >
          <span
            class="
              text-xs
              capitalize
              font-light
              me-1
              px-2.5
              py-0.5
              rounded-full
            "
            :class="[
              `${setBadgeTypeColor(pokemonType?.type?.name ?? 'normal').bg}`,
              `${setBadgeTypeColor(pokemonType?.type?.name ?? 'normal').text}`,
            ]"
          >
            {{pokemonType.type.name}}
          </span>
        </div>
      </div>
      <h2
        class="
          font-bold
          text-orange-100
          text-xl
          border-b
          border-orange-100
          pb-2
          mb-2
        "
      >
        Stats
      </h2>
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
      v-if="!isExpanded"
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
    <div
      v-if="isExpanded"
      class="p-3"
    >
      <h2
        class="
          font-bold
          text-orange-100
          text-xl
          border-b
          border-orange-100
          pb-2
        "
      >
        Evolution Chain
      </h2>
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

