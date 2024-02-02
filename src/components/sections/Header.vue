<template>
  <header id="header" ref="container" class="header border-b border-grey-300">
    <div class="fixed top-0 z-40 bg-white w-full border-b-2 border-gray-100">
      <div class="px-4 sm:px-8 header__container max-w-screen-xxl mx-auto h-14 sm:h-20 flex items-center justify-between gap-4 xl:gap-6">
        <div class="header__block flex items-center justify-start gap-4 xl:gap-6">
          <a href="/" class="header__logo">
            <BaseIcon name="VueIcon" />
          </a>
        </div>
        <p class="header__block text-lg text-pink justify-end font-bold hidden sm:block">
          {{ headerText }}
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>

import BaseIcon from '../elements/BaseIcon.vue'

const headerText = 'Some Header text'

</script>
