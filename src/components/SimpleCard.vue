<script setup lang="ts">
const props = defineProps({
  imageUrl: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: 'Click me!',
  },
  buttonAction: {
    type: Function,
    default: () => {}
  }
})

function handleButtonAction() {
  props.buttonAction()
}
</script>

<template>
  <div
    class="
      bg-gray-500
      border
      border-gray-500
      rounded-lg
      shadow
    "
  >
    <div class="rounded-t-lg bg-orange-100">
      <img
        class="
          m-auto
          w-6/12
        "
        :src="imageUrl"
        :alt="title"
      />
    </div>
    <div class="p-5">
      <h5
        class="
          mb-2
          text-2xl
          font-semibold
          tracking-tight
          text-orange-100
          capitalize
        "
      >
        {{ title }}
      </h5>
      <button
        class="
          inline-flex
          items-center
          px-3
          py-2
          text-sm
          font-medium
          text-center
          text-white
          rounded-lg
          bg-lime-800
          hover:bg-lime-900
        "
        @click="handleButtonAction"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
