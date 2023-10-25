<template>
    <div class="font-sans flex flex-col min-h-screen dark:bg-gray-900">
      <CommonHeader />
      <main class="flex-grow mx-auto w-full max-w-screen-xl mt-27">
            <slot />
       </main>
      <CommonFooter />
   </div>
  </template>