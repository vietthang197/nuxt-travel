<script setup lang="ts">
import SearchBar from "~/components/home/SearchBar.vue";
import Carousel from "~/components/home/Carousel.vue";

useHead({
  title: 'Trang chủ',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {

  },
  script: [  ]
})
</script>
<template>
  <Carousel/>
  <SearchBar/>
</template>