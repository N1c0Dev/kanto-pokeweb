<script setup lang="ts">
import { RouterView } from 'vue-router'

const isDev = import.meta.env.DEV
</script>

<template>
  <div :class="[isDev ? 'debug-screens' : '']" />
    <RouterView />
</template>
