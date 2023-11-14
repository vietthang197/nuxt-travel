<script setup lang="ts">
import type {CategoryResponse} from "~/model/category-response";
import type { BasicResponse } from "~/model/basic-response";

  const runtimeConfig = useRuntimeConfig();
  const categoryPromise = await useFetch<BasicResponse<CategoryResponse>>(runtimeConfig.public.baseApiUrl + '/category')
  console.log(categoryPromise.data.value)
  const categoryList = categoryPromise?.data?.value?.data;

</script>
<template>
  <div class="container mx-auto" v-for="category in categoryList ">
    <div class="relative text-center">
      <div class="absolute top-0 left-0 right-0 border-t border-gray-400 h-2"></div>
      <div class="absolute top-1 left-0 right-0 border-t border-gray-400 h-2"></div>
      <h2 class="relative z-10 text-xl font-bold p-2">{{category?.name}}</h2>
      <div class="absolute bottom-0 left-0 right-0 border-t border-gray-400 h-1 bg-gray-900"></div>
    </div>
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1">
        <h1 class="text-xl font-bold text-gray-800 mb-8 dark:text-white">Nổi bật</h1>
        <div class="grid grid-cols-1 gap-4">
          <HomeBlogCardLargeByCategory :category-id="category?.id"/>
          <!-- Add more blog cards as needed -->
        </div>
      </div>
      <div class="col-span-1">
        <h1 class="text-xl font-bold text-gray-800 mb-8 dark:text-white">Khác</h1>
        <CommonBlogCardMini :post-title="'My Title'" :post-slug="'slug'" :avatar-url="'#'" :post-summary="'Post Summary'"/>
      </div>
    </div>
  </div>
</template>