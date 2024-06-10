<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const slides = [
  {
    title: 'Лицензионный договор',
    description:
      'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ',
  },
  {
    title: 'Политика обработки персональных данных',
    description:
      'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
  },
  {
    title: 'Информация об оплате',
    description:
      'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
  },
  {
    title: 'Политика обработки персональных данных',
    description:
      'Десятипозиционный переключатель дозировки расположен на ручке',
  },
  {
    title: 'Десятипозиционный переключатель',
    description:
      'ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
  },
];
</script>

<template>
  <swiper
    class="!p-7.5"
    :slides-per-view="3"
    :space-between="35"
    :modules="[Navigation, Pagination]"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="slide in slides">
      <div
        class="shadow-xl rounded-[10px] border border-[#EEEFF1] p-[25px] h-[450px] flex flex-col justify-between"
      >
        <div>
          <h2
            class="text-[#1253A2] text-[31px] font-bold leading-[32px] mb-[15px]"
          >
            {{ slide.title }}
          </h2>
          <p>{{ slide.description }}</p>
        </div>

        <NuxtLink
          to="slide"
          class="bg-primary hover:bg-primary/70 rounded-lg px-[18px] py-[9px] text-white w-full text-center"
          type="button"
        >
          Перейти
        </NuxtLink>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
:root {
  --swiper-navigation-size: 23px;
  --swiper-navigation-color: #fff;
}
.swiper-button-prev {
  @apply w-10 h-10 rounded-full;
  width: 30px;
  height: 60px;
  background-color: #3490dc;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}
.swiper-button-next {
  @apply w-10 h-10 rounded-full;
  width: 30px;
  height: 60px;
  background-color: #3490dc;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}
</style>
