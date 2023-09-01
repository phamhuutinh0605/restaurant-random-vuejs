<template>
  <div
    class="h-screen flex flex-col md:flex-row md:justify-between md:h-[40vh] py-9"
  >
    <div
      class="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6"
    >
      <h1 class="text-black text-5xl font-bold xl:text-6xl">
        Delicious Burger & French Fry
      </h1>
      <p class="text-black xl:text-xl">
        Progressively simplify effective e-toilers and process-centric methods
        of empowerment. Quickly pontificate parallel.
      </p>
      <CountDown />
      <button class="bg-[#AE0900] text-white rounded-md py-3 px-6">
        Order Now
      </button>
    </div>
    <div class="flex-1 w-full relative md:h-full">
      <img src="/offerProduct.png" alt="" fill class="object-contain" />
    </div>
  </div>
</template>

<script setup>
import CountDown from "./CountDown.vue";
</script>

<style lang="scss" scoped>
</style>