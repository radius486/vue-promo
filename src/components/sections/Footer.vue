<template>
  <footer class="footer bg-turquoise pt-14">
    <div class="footer__container px-4 sm:px-8 sm:container sm:mx-auto">
      <div class="footer__top border-b border-white border-dashed bg-turquoise ">
        <div class="footer__columns grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-16">

        </div>
        <p class="footer__text text-lg text-white text-center font-bold mb-8">
          {{ footerText }}
        </p>
      </div>
      <div class="footer__bottom flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 py-9">
        <ul class="footer__info-links grid grid-rows-2 grid-flow-col sm:flex items-center justify-start gap-4 sm:gap-12">
          <li class="footer__copyright text-xs leading-4 text-dark-purple text-center">
            {{ copyright }}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const footerText = 'SOME FOOTER TEXT'

const copyright = computed(() => {
  return `© ${new Date().getFullYear()} VuePromo`
})
</script>
