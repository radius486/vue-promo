
import { computed } from 'vue'

import { promoCards } from './state'

export const getCards = computed(() => {
  return promoCards
})
