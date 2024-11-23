<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal -->
        <h1 class="text-4xl font-extrabold text-center mb-12 text-blue-500">
          Seguridad del Sistema
        </h1>
  
        <!-- Contenedor del contenido -->
        <StartInfo />
      </div>
    </div>
  </template>
  
  <script>
  import StartInfo from "@/components/start/StartInfo.vue";
  
  export default {
    name: "StartView",
    components: {
      StartInfo,
    },
  };
  </script>
  