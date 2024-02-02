<template>
  <div class="promo-card relative group/card max-w-81">
    <h4 class="promo-card__title absolute bottom-20 md:top-2/3 lg:group-hover/card:top-12 xl:group-hover/card:top-24 text-center z-10 text-white text-2xl w-full transition-all duration-300 whitespace-pre-wrap px-8 lg:px-5 xl:px-12">
      {{ title }}
    </h4>
    <img :src="image" class="opacity-100 lg:group-hover/card:opacity-0 transition-all duration-300">
    <div class="promo-card__action-container hidden lg:block absolute left-0 top-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
      <img :src="shape" class="opacity-100 rotate-180 group-hover/card:rotate-0 transition-all duration-300 pointer-events-none">
      <VAction
        class="absolute bottom-1/3 xl:bottom-36 left-1/2 -translate-x-1/2 z-20"
        type="button"
        theme="primary"
        @buttonClick="showOverlay">
        {{ buttonText }}
      </VAction>
    </div>
    <VAction
      class="absolute bottom-4 left-1/2 -translate-x-1/2 lg:hidden"
      type="button"
      theme="primary"
      @buttonClick="showOverlay">
      {{ buttonText }}
    </VAction>
  </div>
</template>

<script setup>
import VAction from '../inputs/VAction.vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  shape: {
    type: String,
    default: '',
  },
  slide: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['onAction'])

function showOverlay() {
  emit('onAction', props.slide)
}
</script>
