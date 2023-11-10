<template>
    <div class="flex font-kanit h-screen bg-main-bg bg-left items-center flex-col bg-cover bg-fixed w-full">
      <div v-if="loading">Carregando...</div>
      <div class="bg-fourth/50 flex items-start backdrop-blur-md w-10/12 rounded-lg mt-[10%] h-3/5" v-else>
        <img class="h-[50%] bg-blue-50 object-contain rounded-md mt-[5%] ml-[5%]" :src="'/src/assets/' + project.imageUrl" />
        <div class="bg-blue-500 w-full h-[50%] mt-[5%] flex items-center flex-col">
          <h2>{{ project ? project.name : 'Projeto não encontrado' }}</h2>
        </div>
      </div>
      <div class="flex justify-center items-center h-7 w-7 rounded-full" v-for="language in filteredLanguages" :key="language.id">
    <img class="h-[50%] w-[50%] object-contain" :src="'/src/assets/icons/' + language.path">
    <h2>{{ language.name }}</h2>
</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import dataJson from '../assets/data.json';
  
  const projectId = ref<number | null>(null);
  const project = ref<any>(null);
  const loading = ref(true);
  
  const route = useRoute();
  
  onMounted(() => {
    watch(
      () => route.params.id,
      (newId) => {
        if (typeof newId === 'string') {
          const numId = parseInt(newId, 10);
          projectId.value = isNaN(numId) ? null : numId;
        } else if (typeof newId === 'number') {
          projectId.value = newId;
        } else {
          projectId.value = null;
        }
  
        loadProject();
      },
      { immediate: true }
    );
  });
  
  const loadProject = () => {
    loading.value = true; // Inicia o carregamento
  
    // Em vez de usar find, utilize um tratamento de erro mais robusto
    try {
      const foundProject = dataJson.projects.find((p) => p.id === projectId.value);
  
      if (foundProject) {
        project.value = foundProject;
      } else {
        console.error('Projeto não encontrado');
      }
    } catch (error) {
      console.error('Erro ao carregar o projeto', error);
    } finally {
      loading.value = false; // Marca o carregamento como concluído, independentemente do resultado
    }
  };

  const filteredLanguages = ref<{ id: number; name: string; path: string }[]>([]);

  const filterLanguageIcons = (projectLanguages: string[]): { id: number; name: string; path: string }[] => {
    return dataJson.languageIcons.filter((icon) => projectLanguages.includes(icon.name));
  };

  watch(() => project.value, () => {
      if (project.value) {
          // Atualiza as linguagens filtradas sempre que o projeto é alterado
          filteredLanguages.value = filterLanguageIcons(project.value.languages);
      }
  });

  </script>
  