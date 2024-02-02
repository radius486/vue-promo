<template>
  <div class="v-action inline-flex">
    <button ref="VButton" v-if="type === 'button'"
      class="v-action__button flex items-center transition-all select-none whitespace-nowrap w-full justify-center"
      :class='actionClasses'
      :disabled='disabled'
      @click.prevent='onClick'
    >
      <component v-if="theme === 'icon' || theme === 'flat-icon' || theme === 'menu-icon'"
        :is="iconComponent"
        class="w-6 h-6 flex-shrink-0"
        :class="iconClasses"
        role="icon"/>
      <div class="v-action__text  flex items-center justify-center w-full">
        <slot></slot>
      </div>
      <template v-if="theme === 'secondary'">
        <component v-if="iconName"
          :is="iconComponent"
          class="w-6 h-6 active:text-turquoise-800 flex-shrink-0"
          :class="iconClasses"
          role="icon"/>
        <PlusCircleIcon
          v-else
          class="w-6 h-6 active:text-turquoise-800 flex-shrink-0"
          :class="iconClasses"
        />
      </template>
    </button>
    <a ref="VLink" v-if="type === 'link'"
      :href="link"
      class="v-action__link flex items-center transition-all select-none whitespace-nowrap w-full justify-center"
      :class='actionClasses'
      :disabled='disabled'
    >
      <component v-if="theme === 'icon' || theme === 'flat-icon' || theme === 'menu-icon'"
        :is="iconComponent"
        class="w-6 h-6 flex-shrink-0"
        :class="iconClasses"
        role="icon"/>
      <div class="v-action__text flex items-center justify-center w-full">
        <slot></slot>
      </div>
      <template v-if="theme === 'secondary'">
        <component v-if="iconName"
          :is="iconComponent"
          class="w-6 h-6 active:text-turquoise-800 flex-shrink-0"
          :class="disabled ? 'text-grey-300': iconClass"
          role="icon"/>
        <PlusCircleIcon
          v-else
          class="w-6 h-6 active:text-turquoise-800 flex-shrink-0"
          :class="iconClasses"
        />
      </template>
    </a>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import {
  PlusCircleIcon,
  UserCircleIcon,
  GlobeAmericasIcon,
  Squares2X2Icon,
  Bars4Icon,
  XMarkIcon,
  CalculatorIcon,
  ShareIcon,
  HeartIcon,
  ArrowRightCircleIcon,
  SquaresPlusIcon,
  PhotoIcon,
  VideoCameraIcon,
  HomeModernIcon,
  MapIcon,
  ChatBubbleLeftIcon,
  PowerIcon,
  QueueListIcon,
  HomeIcon,
  FolderPlusIcon,
  DocumentCheckIcon,
  WalletIcon,
  InboxIcon,
  UserIcon,
  UserGroupIcon,
  XCircleIcon,
} from '@heroicons/vue/24/solid'

import {
  HeartIcon as OpenHeartIcon,
  MapIcon as OpenMapIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
    type: {
      type: String,
      default: 'button',
    },
    theme: {
      type: String,
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    textClass: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
      default: 'text-turquoise',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
})

const emit = defineEmits(['buttonClick'])

const icons = {
  UserCircleIcon,
  GlobeAmericasIcon,
  Squares2X2Icon,
  Bars4Icon,
  XMarkIcon,
  CalculatorIcon,
  ShareIcon,
  HeartIcon,
  OpenHeartIcon,
  ArrowRightCircleIcon,
  SquaresPlusIcon,
  PhotoIcon,
  VideoCameraIcon,
  MapIcon,
  HomeModernIcon,
  ChatBubbleLeftIcon,
  PowerIcon,
  QueueListIcon,
  HomeIcon,
  FolderPlusIcon,
  DocumentCheckIcon,
  WalletIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  UserIcon,
  UserGroupIcon,
  XCircleIcon,
}

const VButton = ref(null)
const VLink = ref(null)

function onClick() {
  emit('buttonClick')
}

const iconClasses = computed(() => {
  return [
    ...props.disabled
      ? ['text-grey-300']
      : [props.isActive ? 'text-turquoise' : props.iconClass],
  ]
})

const actionClasses = computed(() => {
  if (props.theme === 'primary') {
    return [
      ...props.disabled
        ? ['bg-grey-200', 'text-grey-300', 'pointer-events-none']
        : ['bg-dark-blue', 'hover:bg-info', props.textClass || 'text-white'],
      'active:bg-dark-blue-900',
      'text-base',
      'font-bold',
      'rounded-lg',
      'px-4',
      'py-2',
    ]
  }

  if (props.theme === 'large') {
    return [
      ...props.disabled
        ? ['bg-grey-200', 'text-grey-300', 'pointer-events-none']
        : ['bg-dark-blue', props.textClass || 'text-white'],
      'hover:bg-info',
      'active:bg-dark-blue-900',
      'text-base',
      'font-bold',
      'rounded-lg',
      'px-4',
      'h-14',
    ]
  }

  if (props.theme === 'menu') {
    return [
      ...props.disabled
        ? ['bg-grey-200', 'text-grey-300', 'pointer-events-none']
        : ['bg-turquoise', props.textClass || 'text-dark-purple'],
      'hover:bg-turquoise-200',
      'active:bg-turquoise-800',
      'rounded-lg',
      'font-bold',
      'text-sm',
      'leading-4',
      'font-bold',
      'p-2',
    ]
  }

  if (props.theme === 'secondary') {
    return [
      ...props.disabled
        ? ['pointer-events-none', 'text-grey-300']
        : [props.textClass || 'text-dark-purple'],
      'hover:decoration-turquoise',
      'hover:decoration-dashed',
      'active:decoration-turquoise-800',
      'underline',
      'text-sm',
      'font-bold',
      'gap-1',
    ]
  }

  if (props.theme === 'icon') {
    return [
      ...props.disabled
        ? ['bg-grey-200', 'border-grey-200', 'text-grey-300', 'pointer-events-none']
        : ['bg-white', 'border-grey-300'],
      'hover:bg-grey-200',
      'active:bg-grey-300',
      'text-sm',
      'leading-4',
      'text-dark-purple',
      'border',
      'border-grey-300',
      'rounded',
      'gap-2',
      'h-8',
      'px-2',
    ]
  }

  if (props.theme === 'flat-icon') {
    return [
      ...props.disabled
        ? ['text-grey-300', 'pointer-events-none']
        : ['bg-transparent'],
      'hover:bg-grey-200',
      'active:bg-grey-300',
      'text-sm',
      'leading-4',
      'text-dark-purple',
      'rounded',
      'gap-2',
      'h-8',
      'px-2',
    ]
  }

  if (props.theme === 'menu-icon') {
    return [
      ...props.disabled ? ['text-grey-300', 'pointer-events-none'] : [],
      ...props.isActive && !props.disabled
          ? ['sm:bg-dark-blue', 'sm:hover:bg-dark-blue', 'sm:text-white', 'pointer-events-none']
          : ['bg-transparent', 'hover:bg-grey-200', 'text-dark-purple'],
      'active:bg-grey-300',
      'text-sm',
      'leading-4',
      'sm:rounded-l-lg',
      'gap-4',
      'h-10',
      'sm:h-14',
      'py-2',
      'sm:px-6',
      'sm:py-4',
      '!justify-start',
    ]
  }
})

const iconComponent = computed(() => {
  return icons[props.iconName]
})

defineExpose({ VButton, VLink })
</script>

<style scoped lang="css">
.v-action__icon {
  min-width: 1.5rem;
}
</style>
