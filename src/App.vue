<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push({path: '/'})
}
function goToTeam() {
  router.push({path: '/team'})
}
</script>

<template>
  <div class="debug-screens" />
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
      @click="goToHome">Home
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
      @click="goToTeam">Team
    </a>
  </nav>
  <div class="m-5">
    <RouterView />
  </div>
</template>

