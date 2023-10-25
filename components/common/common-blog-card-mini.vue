<script setup lang="ts">
  defineProps({
    avatarUrl: String ,
    postTitle: String,
    postSummary: String,
    postSlug: String
  })
</script>
<template>
  <div class="blog-card bg-white p-4 shadow rounded flex items-start dark:bg-gray-800">
    <div class="image-wrapper rounded-tl rounded-tr overflow-hidden">
      <img v-bind:src="avatarUrl" alt="" class="w-32 h-auto">
    </div>
    <div class="flex flex-col ml-4">
      <NuxtLink v-bind:to="'post/' + postSlug" class="text-md font-bold text-gray-800 mb-2 dark:text-white">{{postTitle}}</NuxtLink>
      <p class="text-gray-600 dark:text-white">{{postSummary}}</p>
    </div>
  </div>
</template>