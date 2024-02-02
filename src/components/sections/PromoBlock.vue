<template>
  <div class="promo-block bg-turquoise py-20">
    <div class="promo-block__container container mx-auto px-8">
      <h1 class="promo-block__title text-4xl sm:text-5xl md:text-7xl text-dark-blue mb-8 whitespace-pre-wrap">
        {{ title }}
      </h1>
      <div class="promo-block__cards lg:mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <PromoCard
          v-for="card, index in promoCards"
          :key="`promo-card-${index}`"
          :title="card.title"
          :buttonText="card.buttonText"
          :image="card.image"
          :shape="card.shape"
          :slide="card.slide"
          @onAction="showOverlay"
        />
      </div>
    </div>
    <PromoOverlay
      v-model:isOverlayVisible="isOverlayVisible"
      :title="currentSlide.title"
      :description="currentSlide.description"
      :buttonText="currentSlide.buttonText"
      :list="currentSlide.list"
      :image="currentSlide.image"
      :backgroundClass="currentSlide.backgroundClass"
      :listIconClass="currentSlide.listIconClass"
      @onClose="resetCurrentSlide"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'

import PromoCard from '../elements/PromoCard.vue'
import PromoOverlay from '../elements/PromoOverlay.vue'

import { useDataStore } from '../../stores/data'

const dataStore = useDataStore()

const {
  title,
  getCards
} = storeToRefs(dataStore)

const promoCards = ref(getCards)

const isOverlayVisible = ref(false)

const currentSlide = reactive({
  title: '',
  description: '',
  image: '',
  buttonText: '',
  list: [],
  backgroundClass: '',
  listIconClass: '',
})

function showOverlay(slide) {
  Object.assign(currentSlide, slide)
  isOverlayVisible.value = true
}

function resetCurrentSlide() {
  Object.assign(currentSlide, {
    title: '',
    description: '',
    image: '',
    buttonText: '',
    list: [],
    backgroundClass: '',
    listIconClass: '',
  })
}
</script>
