<template>
  <component
    :is="iconComponent"
    role="icon"
  />
</template>

<script setup>
import { computed } from 'vue'

const icons = {
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
