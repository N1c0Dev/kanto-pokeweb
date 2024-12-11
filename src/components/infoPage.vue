<script setup lang="ts">
defineProps({
  percentage: {
    type: Number,
    default: 0,
  }
})
</script>

<template>
  <section class="m-5" >
    <div
      class="
        flex
        flex-col
        p-5
        bg-slate-300
        h-screen
        w-full
        shadow
        rounded-lg
        text-gray-500
        text-3xl
        font-semibold
      "
    >
      <slot name="content" />
    </div>
  </section>
</template>
