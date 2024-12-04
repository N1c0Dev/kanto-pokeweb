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
  <div class="mt-2 flex">
    <div @click="goToHome">Home</div>
    <div @click="goToTeam">Team</div>
  </div>
  <RouterView />
</template>

