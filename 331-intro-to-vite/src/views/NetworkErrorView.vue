<template>
  <div class="network-error text-center p-[50px] max-w-2xl mx-auto">
    <h1 class="text-4xl font-bold text-red-600 mb-6">Uh-Oh!</h1>
    <h3 class="text-xl text-gray-700 mb-4">
      It looks like you're experiencing some network issues, please take a breath and
      <a href="#" @click="$router.go(-1)" class="text-blue-500 hover:text-blue-700 underline">click here</a> to try again.
    </h3>
    <div class="mt-8">
      <button @click="$router.go(-1)" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
        Go Back
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 移除了所有自定义CSS，全部使用Tailwind CSS */
</style>
