<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  activePage: {
    type: String,
    default: 'home',
  }
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
  </nav>
</template>

<style scoped>

</style>
