<template>
  <section class="main pt-20">
    <PromoBlock />
    <div class="px-4 sm:px-8 sm:container sm:mx-auto my-16">
      <CallToAction
        title="What is Lorem Ipsum?"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        actionText="Action"
        actionType="button"
        image="/img/lotus.png"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

import PromoBlock from './PromoBlock.vue'
import CallToAction from '../elements/CallToAction.vue'

import { useDataStore } from '../../stores/data'

const dataStore = useDataStore()

const {
  setPromoCards,
} = dataStore

onMounted(() => {
  setPromoCards()
})
</script>
