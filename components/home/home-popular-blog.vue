<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold text-gray-800 mb-8 dark:text-white">Tìm bài viết</h1>
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul class="sm:flex -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent"
          role="tablist">
        <li class="w-full" role="presentation">
          <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile"
                  type="button" role="tab" aria-controls="profile" aria-selected="false">
            <span>Xem nhiều nhất</span>
          </button>
        </li>
        <li class="w-full" role="presentation">
          <button
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
              aria-selected="false">
            <span>Bài mới</span>
          </button>
        </li>
      </ul>
    </div>
    <div id="myTabContent">
      <div id="profile" class="container mx-auto">
        <div class="blog-card bg-white p-4 shadow rounded flex items-start dark:bg-gray-800">
          <div class="image-wrapper rounded-tl rounded-tr overflow-hidden">
            <img src="https://static.recruitery.co/uploads/images/1275d5e5bf1b403b83762e54b255725d_20230210041605.png"
                 alt="Featured Blog Image" class="w-32 h-auto">
          </div>
          <div class="flex flex-col ml-4">
            <h2 class="text-md font-bold text-gray-800 mb-2 dark:text-white">Blog Post 1</h2>
            <p class="text-gray-600 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="blog-card bg-white p-4 shadow rounded flex items-start dark:bg-gray-800">
          <div class="image-wrapper rounded-tl rounded-tr overflow-hidden">
            <img src="https://static.recruitery.co/uploads/images/1275d5e5bf1b403b83762e54b255725d_20230210041605.png"
                 alt="Featured Blog Image" class="w-32 h-auto">
          </div>
          <div class="flex flex-col ml-4">
            <h2 class="text-md font-bold text-gray-800 mb-2 dark:text-white">Blog Post 1</h2>
            <p class="text-gray-600 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="blog-card bg-white p-4 shadow rounded flex items-start dark:bg-gray-800">
          <div class="image-wrapper rounded-tl rounded-tr overflow-hidden">
            <img src="https://static.recruitery.co/uploads/images/1275d5e5bf1b403b83762e54b255725d_20230210041605.png"
                 alt="Featured Blog Image" class="w-32 h-auto">
          </div>
          <div class="flex flex-col ml-4">
            <h2 class="text-md font-bold text-gray-800 mb-2 dark:text-white">Blog Post 1</h2>
            <p class="text-gray-600 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="blog-card bg-white p-4 shadow rounded flex items-start dark:bg-gray-800">
          <div class="image-wrapper rounded-tl rounded-tr overflow-hidden">
            <img src="https://static.recruitery.co/uploads/images/1275d5e5bf1b403b83762e54b255725d_20230210041605.png"
                 alt="Featured Blog Image" class="w-32 h-auto">
          </div>
          <div class="flex flex-col ml-4">
            <h2 class="text-md font-bold text-gray-800 mb-2 dark:text-white">Blog Post 1</h2>
            <p class="text-gray-600 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div id="dashboard" class="container mx-auto"></div>
    </div>
  </div>
</template>