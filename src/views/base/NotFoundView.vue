<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push({path: '/'})
}
</script>

<template>
  <div class="m-5">
    <section
      class="
      flex
      flex-col
      bg-slate-300
      h-screen
      w-full
      shadow
      rounded-lg
      text-gray-500
      font-semibold
    "
    >
      <img
        class="
          mx-auto
          mt-auto
          w-[150px]
        "
        src="@/assets/icons/missingno.svg"
        alt="missingno"
      />
      <h1
        class="
          mx-auto
          text-[6rem]
        "
      >
        404
      </h1>
      <p class="mx-auto">Poképage not found...</p>
      <button
        class="
          mx-auto
          mb-auto
          mt-5
          inline-flex
          items-center
          px-3
          py-2
          text-sm
          font-medium
          text-center
          rounded-lg
          bg-lime-800
          hover:bg-lime-900
          text-white
          cursor-pointer
        "
        @click="goToHome"
      >
        Home
      </button>
    </section>
  </div>
</template>

<style scoped>

</style>
