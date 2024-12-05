<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  activePage: {
    type: String,
    default: 'home',
  },
  pokemonCount: {
    type: Number,
    default: 0,
  },
})

function goToHome() {
  router.push({path: '/'})
}
function goToTeam() {
  router.push({path: '/team'})
}
</script>

<template>
  <nav
    class="
      flex
      h-20
      justify-center
      bg-slate-800
    "
  >
    <a
      class="
        mr-3
        self-center
        cursor-pointer
        text-orange-100
        text-xl
        font-semibold
      "
      :class="[activePage === 'home' ? 'border-b-2 border-orange-100' : '']"
      @click="goToHome"
    >
      Home
    </a>
    <a
      class="
        mr-3
        self-center
        cursor-pointer
        text-orange-100
        text-xl
        font-semibold
      "
      :class="[activePage === 'team' ? 'border-b-2 border-orange-100' : '']"
      @click="goToTeam"
    >
      Team
    </a>
    <div
      class="
        self-center
        inline-block
        rounded-full
        w-2
        h-2
        mb-2
        -ml-2
      "
      :class="[pokemonCount > 0 ? 'bg-red-500' : 'bg-slate-800']"
    />
  </nav>
</template>

<style scoped>

</style>
