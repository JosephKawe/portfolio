<!-- ContentBlock.vue -->

<template>
    <div :class="{ 'opacity-100' : visible, [fadeClass]: false }">
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface Props {
    visible: boolean;
    fadeClass: string;
  }
  
  const { visible, fadeClass } = defineProps<Props>();
  
  // O bloco watch() não é necessário porque você já está usando o recurso de reatividade diretamente
  </script>
  
  <style scoped>
  /* Se precisar de estilos específicos para o ContentBlock */
  </style>
  