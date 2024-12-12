<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <section v-if="show">
    <div
      class="
        bg-slate-300/90
        fixed
        -translate-x-2/4
        -translate-y-2/4
        max-w-full
        z-10
        left-2/4
        top-2/4
        h-screen
        w-full
        flex
      "
    >
      <img
        class="
          m-auto
          w-1/2
          animate-[spin_2s_linear_infinite]
          md:w-[20vw]
        "
        src="@/assets/icons/pokeball.svg"
        alt="loader"
      >
    </div>
  </section>
</template>
