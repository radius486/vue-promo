<template>
  <VOverlay
    :show="isOverlayVisible"
    theme="promo"
    :backgroundClass="backgroundClass"
    @close="closeOverlay">
    <div class="promo-overlay__container text-white grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 sm:px-14">
      <div class="promo-overlay__left lg:col-span-2">
        <h2 v-if="title"
          class="promo-overlay__title text-4xl md:text-5xl lg:text-7xl lg:leading-20 mb-8">
          {{ title }}
        </h2>
        <ul v-if="list.length" class="promo-overlay__list mb-8">
          <li v-for="listItem, index in list"
            :key="`list-item_${index}`"
            class="promo-overlay__list-item text-lg leading-6 mb-6 flex items-start justify-start gap-4">
            <CheckBadgeIcon class="w-6 h-6 text-dark-purple flex-shrink-0"
              :class="listIconClass"/>
            {{ listItem }}
          </li>
        </ul>
        <p v-if="description"
          class="promo-overlay__description text-base mb-8 whitespace-pre-wrap">
          {{ description }}
        </p>
        <VAction
          class="w-full sm:w-auto"
          v-if="buttonText"
          type="button"
          theme="primary">
          {{ buttonText }}
        </VAction>
      </div>
      <div class="promo-overlay__right hidden md:flex items-start justify-center">
        <img v-if="image" :src="image" class="promo-overlay__image w-1/3 lg:w-auto h-auto">
      </div>
    </div>
  </VOverlay>
</template>

<script setup>
import VOverlay from './VOverlay.vue'
import VAction from '../inputs/VAction.vue'

import {
  CheckBadgeIcon,
} from '@heroicons/vue/24/solid'

const props = defineProps({
  isOverlayVisible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
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
  list: {
    type: Array,
    default: () => [],
  },
  backgroundClass: {
    type: String,
    default: '',
  },
  listIconClass: {
    type: String,
    default: 'text-dark-purple',
  },
})

const emit = defineEmits(['update:isOverlayVisible', 'onClose'])

function closeOverlay() {
  emit('update:isOverlayVisible', false)
  emit('onClose')
}
</script>
