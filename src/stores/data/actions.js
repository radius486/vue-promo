import { mockedPromoCards } from '../../stubs'

import {
  promoCards,
} from './state'

export function setPromoCards() {
  Object.assign(promoCards, mockedPromoCards)
}
