<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white border-[#AE0900] bg-[#AE0900] hover:bg-[#AE0900] transition-colors"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
