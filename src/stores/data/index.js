import { defineStore } from 'pinia'
import * as state from './state'
import * as getters from './getters'
import * as actions from './actions'


export const useDataStore = defineStore('data', () => {
  return {
    ...state,
    ...getters,
    ...actions,
  }
})
