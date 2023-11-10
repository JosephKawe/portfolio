<template>
    <section class="bg-gradient-to-bl to-[#330e90] from-[#981c5680] flex-col pt-4 px-2 backdrop-blur-md flex items-center lg:px-[8%] justify-start lg:justify-center w-full rounded lg:py-20 h-[24%]">
      <h2 class="text-sm animShadowText font-bold md:text-xl text-center my-2 text-primary">{{ props.title }}</h2>
      <p class="text-[0.70rem] md:text-base lg:text-sm text-center text-cyan-50/70 lg:pb-6 text-shadow-primary">{{ props.content }}</p>
    </section>
  </template>
  
  <script setup lang="ts">
  
  interface Props {
    title: string;
    content: string;
  }
  
  const props = defineProps<Props>()
  
  
  </script>
  

  <style scoped>
  
  .animShadowText {
  animation: textPulse 4s ease-in-out 0s infinite normal forwards;
}

@keyframes textPulse {
  0%, 50%, 100% {
    text-shadow: 0px 0px 0px rgba(233, 98, 173, 0.2);
  } 25%, 75% {
    text-shadow: 0px 0px 10px rgba(233, 98, 173, 1);
  }
}

</style>