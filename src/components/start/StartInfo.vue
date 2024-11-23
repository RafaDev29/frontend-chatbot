<template>
    <div class="space-y-12">
      <!-- Auditorías -->
      <section class="flex flex-col items-center bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div class="mb-4">
          <i class="mdi mdi-shield-search text-5xl text-blue-400"></i>
        </div>
        <h2 class="text-2xl font-bold text-blue-300 mb-2">Auditorías</h2>
        <p class="text-center text-gray-300">
          Las auditorías son un proceso fundamental para identificar vulnerabilidades y garantizar la integridad de la información. Revisamos regularmente los sistemas para prevenir posibles brechas de seguridad.
        </p>
      </section>
  
      <!-- Políticas de seguridad -->
      <section class="flex flex-col items-center bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div class="mb-4">
          <i class="mdi mdi-file-document-outline text-5xl text-green-400"></i>
        </div>
        <h2 class="text-2xl font-bold text-green-300 mb-2">Políticas de Seguridad</h2>
        <p class="text-center text-gray-300">
          Las políticas de seguridad establecen las reglas y procedimientos necesarios para proteger la confidencialidad, integridad y disponibilidad de los datos en el sistema.
        </p>
      </section>
  
      <!-- Reporte de problemas -->
      <section class="flex flex-col items-center bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div class="mb-4">
          <i class="mdi mdi-alert-circle-outline text-5xl text-red-400"></i>
        </div>
        <h2 class="text-2xl font-bold text-red-300 mb-2">Reporte de Problemas</h2>
        <p class="text-center text-gray-300">
          Reportar problemas es esencial para garantizar una respuesta rápida y efectiva a incidentes. Nuestro sistema facilita la notificación de cualquier anomalía en tiempo real.
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "StartInfo",
  };
  </script>
  