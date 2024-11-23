<template>
    <div class="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg space-y-6">
      <!-- Título del formulario -->
      <h2 class="text-2xl font-bold text-gray-300">Formulario de Reporte</h2>
  
      <!-- Descripción del problema -->
      <div>
        <label for="problemDescription" class="block text-gray-400 text-sm mb-2">
          Descripción del Problema
        </label>
        <textarea
          id="problemDescription"
          v-model="description"
          placeholder="Describe el problema que has encontrado..."
          rows="5"
          class="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>
  
      <!-- Archivo adjunto -->
      <div>
        <label for="fileUpload" class="block text-gray-400 text-sm mb-2">
          Adjuntar Captura (Opcional)
        </label>
        <input
          id="fileUpload"
          type="file"
          @change="handleFileUpload"
          class="block w-full text-gray-400 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-red-600 file:text-white file:cursor-pointer hover:file:bg-red-700"
        />
      </div>
  
      <!-- Botón para enviar -->
      <div class="text-center">
        <button
          @click="handleSubmit"
          class="bg-red-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-700 transition"
        >
          Enviar Reporte
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProblemReport",
    data() {
      return {
        description: "", // Descripción del problema
        attachedFile: null, // Archivo adjunto
      };
    },
    methods: {
      handleFileUpload(event) {
        this.attachedFile = event.target.files[0]; // Guardar el archivo adjunto seleccionado
        console.log("Archivo adjuntado:", this.attachedFile);
      },
      handleSubmit() {
        // Simulación de envío del formulario
        console.log("Descripción del problema:", this.description);
        console.log("Archivo adjunto:", this.attachedFile);
  
        // Limpiar los campos después de enviar
        this.description = "";
        this.attachedFile = null;
        alert("Reporte enviado con éxito (simulación)");
      },
    },
  };
  </script>
  