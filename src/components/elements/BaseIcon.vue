<template>
  <component
    :is="iconComponent"
    role="icon"
  />
</template>

<script setup>
import { computed } from 'vue'

import VueIcon from '../icons/VueIcon.vue'

const icons = {
  VueIcon,
}

const props = defineProps ({
  name: {
    type: String,
    required: true,
  }
})

const iconComponent = computed(() => {
  return icons[props.name]
})
</script>
