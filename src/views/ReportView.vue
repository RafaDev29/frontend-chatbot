<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div class="max-w-4xl mx-auto">
        <!-- Título principal -->
        <h1 class="text-4xl font-extrabold text-center mb-12 text-red-500">
          Reportar Problema
        </h1>
  
        <!-- Componente de Reporte -->
        <ProblemReport />
      </div>
    </div>
  </template>
  
  <script>
  import ProblemReport from "@/components/report/ProblemReport.vue";
  
  export default {
    name: "ReportView",
    components: {
      ProblemReport,
    },
  };
  </script>
  