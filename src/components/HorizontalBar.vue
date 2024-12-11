<script setup lang="ts">
defineProps({
  percentage: {
    type: Number,
    default: 0,
  }
})
</script>

<template>
  <div
    class="
      w-full
      h-3
      border
      border-orange-100
      rounded-lg
    "
  >
    <div
      class="
        h-3
        bg-orange-100
        text-xs
        font-medium
        text-gray-500
        text-center
        rounded-lg
      "
      :style="{width: `${percentage}%`}"
    />
  </div>
</template>
