<template>
  <Teleport to="body">
    <Transition :name="transitionName">
    <div v-if="show"
      tabindex="0"
      v-focus
      class="v-overlay fixed left-0 right-0 bottom-0 top-0 z-40 outline-none"
      :class="overlayClasses"
      @keyup.esc="close">
      <VAction
        v-if="theme === 'default'"
        class="absolute right-1 top-2"
        theme="flat-icon"
        @buttonClick="close">
        <XMarkIcon  class="w-8 h-8 text-grey-900" />
      </VAction>
      <button
        v-if="theme === 'promo'"
        class="v-overlay__close absolute right-3 sm:right-6 top-3 sm:top-6"
        @click.prevent="close">
        <XCircleIcon  class="w-10 sm:w-12 h-10 sm:h-12 text-white" />
      </button>
      <div class="v-overlay__content overflow-y-scroll h-full">
        <slot></slot>
      </div>
    </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, computed } from 'vue'

import VAction from '../inputs/VAction.vue'

import {
  XMarkIcon,
} from '@heroicons/vue/24/solid'

import {
  XCircleIcon,
} from '@heroicons/vue/24/outline'

const emit = defineEmits(['close'])

const props = defineProps ({
  show: {
    type: Boolean,
    required: true,
  },
  theme: {
    type: String,
    default: 'default',
  },
  backgroundClass: {
    type: String,
    default: 'bg-white',
  },
})

const overlayClasses = computed(() => {
  return [
    props.backgroundClass,
    ...props.theme !== 'promo' ? ['py-10'] : ['py-16', 'sm:py-20']
  ]
})

const transitionName = computed(() => {
  if (props.theme === 'promo') {
    return props.show ? 'slide-up' : 'slide-down'
  }

  return 'fade'
})

function close() {
  emit('close')
}

function toggleBodyScrolling(scroll) {
  const body = document.body
  if (scroll) {
    body.classList.add('noscroll')
  } else {
    body.classList.remove('noscroll')
  }
}

watch(() => props.show, (value) => {
  toggleBodyScrolling(value)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>

<style>
.noscroll {
  overflow: hidden;
}
</style>
