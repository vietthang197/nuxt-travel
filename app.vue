<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator [height]="6" color="#1C64F2" />
    <NuxtPage/>
  </NuxtLayout>
</template>