<template>
  <div class="p-8 pb-0 text-[#AE0900]">
    <!-- <h1 class="text-4xl font-bold mb-4">Random Meals</h1> -->
  </div>
  <div class="py-8"><Offer /></div>
  <Meals :meals="meals" />
  <div
    class="h-12 md:h-24 p-4 lg:px-20 xl:px-10 text-red-500 flex items-center justify-between"
  >
    <router-link :to="{ name: 'home' }" class="font-bold text-xl">
      RANDOM RESTAURANT
    </router-link>
    <p>© ALL RIGHTS RESERVED.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Meals from "../components/Meals.vue";
import Offer from "../components/Offer.vue";
const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(({ data }) => {
        return meals.value.push(data.meals[0]);
      });
  }
});
</script>
