<script setup></script>

<template>
  <div class="bg-gradient-to-r from-black to-[#1C2734] h-[60px]">
    <div
      class="max-w-[1135px] mx-auto text-white text-lg flex justify-between items-center h-full"
    >
      <div class="flex">
        <Logo class="mr-7.5" />

        <ul class="flex space-x-7.5">
          <li>
            <NuxtLink class="hover:text-white/65" to="tarif">Тарифы</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover:text-white/65" to="contacts"
              >Конакты</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div class="flex space-x-7.5">
        <a class="font-bold hover:text-white/65" href="tel:+74951184422"
          >+7 495 118-44-22</a
        >
        <ul class="flex space-x-7.5">
          <li>
            <NuxtLink class="hover:text-white/65" to="signin">Вход</NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="register"
              class="text-[15px] bg-primary hover:bg-primary/70 rounded-lg px-[18px] py-[9px]"
              >Регистрация</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
