<template>
  <span className="font-bold text-5xl text-yellow-300">
    {{ d }}:{{ h }}:{{ m }}:{{ s }}
  </span>
</template>

<script setup>
let difference = +new Date(`10/10/2023`) - +new Date();

const d = Math.floor(difference / (1000 * 60 * 60 * 24));
const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
const m = Math.floor((difference / 1000 / 60) % 60);
const s = Math.floor((difference / 1000) % 60);
</script>

<style lang="scss" scoped>
</style>