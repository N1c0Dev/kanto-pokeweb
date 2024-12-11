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
  buttonTextDisabled: {
    type: String,
    default: 'Disabled!',
  },
  disabled: {
    type: Boolean,
    default: false,
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
      rounded-lg
      rounded-t-xl
      shadow
    "
  >
    <div
      class="
        rounded-t-lg
        bg-orange-100
      "
    >
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
          rounded-lg
        "
        :class="[
          !disabled ?
          'bg-lime-800 hover:bg-lime-900 text-white cursor-pointer' :
          'bg-slate-300 text-gray-500 cursor-not-allowed'
         ]"
        :disabled="disabled"
        @click="handleButtonAction"
      >
        {{ !disabled ? buttonText : buttonTextDisabled }}
      </button>
    </div>
  </div>
</template>
