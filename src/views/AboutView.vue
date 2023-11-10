<template>
  <div class="flex h-screen flex-col font-kanit w-full bg-main-bg bg-cover bg-fixed bg-center">
    <NavbarView idPage="about" color="#C699C6" navColor="rgb(40, 90, 200, 0.4)" textShadow="text-shadow-fourth" />
      <main class="flex flex-col mt-[20%] items-center h-full">
        <section class="bg-fourth/30 w-full px-[10%] flex flex-col justify-center items-center backdrop-blur-3xl">
          <img class="w-52 h-52 object-contain" src="../assets/logo.png" alt="">
          <h2>Olá, me chamo Joseph e sou um Programador Full-Stack</h2>
        </section>
        <h1 class="mt-[10%] uppercase tracking-wider">Tecnologias:</h1>
        <section class="h-auto w-10/12 flex justify-center flex-wrap items-center">
          <div v-for="language in dataJson.languageIcons" :key="language.id" class="group inline-block origin-center">
            <div class="group relative flex justify-center items-center h-10 w-10 rounded-full">
              <img class="h-[50%] w-[50%] object-contain" :src="'/src/assets/icons/' + language.path" :alt="language.name" @click="togglePopover(language.id.toString())" />
            </div>
          </div>
        </section>
      </main>
    </div>

</template>

<script setup lang="ts">
import NavbarView from "../components/NavbarView.vue";
import dataJson from '../assets/data.json';

const togglePopover = (languageId: string) => {
  // Lógica para exibir ou ocultar o popover
  console.log(`Clicou no ícone de linguagem com ID ${languageId}`);
};
</script>
