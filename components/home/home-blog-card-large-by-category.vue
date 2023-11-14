<script setup lang="ts">
import type {BasicResponse} from "~/model/basic-response";
import type {CategoryResponse} from "~/model/category-response";

const props  = defineProps({
  categoryId: String
})

const runtimeConfig = useRuntimeConfig();
const postsPromise = await useFetch<BasicResponse<CategoryResponse>>(runtimeConfig.public.baseApiUrl + '/post', {
  method: 'get',
  params: {
    category:  props.categoryId
  }
})
const postsList = postsPromise?.data?.value?.data;
</script>
<template>
  <CommonBlogCardLarge v-for="posts in postsList" :post-title="posts?.title" :post-slug="posts?.slug" :avatar-url="posts?.avatarUrl" :post-summary="posts?.summary"/>
</template>