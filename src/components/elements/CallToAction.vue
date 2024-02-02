<template>
  <div class="call-to-action rounded-2xl border border-grey-300"
    :class="backgroundClass">
    <div class="call-to-action__container sm:grid gap-4"
      :class="type === 'small' ? ['grid-cols-4', 'p-4', 'sm:p-10'] : ['grid-cols-2']">
      <div class="call-to-action__block flex flex-col items-start h-full"
        :class="type === 'small' ? ['col-span-3', allignmentClass] : ['p-4', 'sm:p-10', allignmentClass]">
        <div class="call-to-action__info">
          <h3 class="call-to-action__title text-lg sm:text-2xl mb-4"
            :class="titleClass">
            {{ title }}
          </h3>
          <p v-if="subtitle"
            class="call-to-action__subtitle text-lg mb-4 whitespace-pre-wrap">
            {{ subtitle }}
          </p>
        </div>
        <VAction
          class="w-full sm:w-auto"
          :type="actionType"
          :theme="actionTheme"
          :textClass="actionTheme === 'secondary' ? 'text-white' : ''"
          :link="actionLink"
          @buttonClick="emit('onAction')">
          {{ actionText }}
        </VAction>
      </div>
      <div class="call-to-action__block max-w-full max-h-full flex mt-6 sm:mt-0"
        :class="type === 'small' ? ['justify-center', 'sm:justify-end', 'items-center'] : 'justify-center'">
        <img :src="image"
          class="call-to-action__image object-contain w-96 h-auto"
          :class="type === 'small' ? 'max-h-44' : 'max-h-full'">
      </div>
    </div>
  </div>
  </template>

  <script setup>
  import VAction from '../inputs/VAction.vue'

  const emit = defineEmits(['onAction'])

  const props = defineProps({
    type: {
      type: String,
      default: 'big',
    },
    actionType: {
      type: String,
      default: 'link',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    backgroundClass: {
      type: String,
      default: 'bg-grey-100',
    },
    titleClass: {
      type: String,
      default: 'text-dark-blue',
    },
    image: {
      type: String,
      default: '',
    },
    actionText: {
      type: String,
      default: '',
    },
    actionLink: {
      type: String,
      default: '#',
    },
    actionTheme: {
      type: String,
      default: 'primary',
    },
    allignmentClass: {
      type: String,
      default: 'justify-between'
    }
  })
  </script>
