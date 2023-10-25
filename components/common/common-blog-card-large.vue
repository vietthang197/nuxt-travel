<script setup lang="ts">
  defineProps({
    avatarUrl: String ,
    postTitle: String,
    postSummary: String,
    postSlug: String
  })
</script>
<template>
    <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <NuxtLink v-bind:to="'post/' + postSlug">
            <img class="rounded-t-lg" v-bind:src="avatarUrl" alt="" />
          </NuxtLink>
          <div class="p-5">
            <NuxtLink to="'post/' + postSlug">
              <h5 class="mb-2 text-MD font-bold tracking-tight text-gray-900 dark:text-white">{{postTitle}}</h5>
            </NuxtLink>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{postSummary}}</p>
            <NuxtLink v-bind:to="'post/' + postSlug" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Chi tiết
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
</template>