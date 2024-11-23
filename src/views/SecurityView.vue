<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div class="max-w-6xl mx-auto">
        <!-- Título principal -->
        <h1 class="text-4xl font-extrabold text-center mb-12 text-green-500">
          Políticas de Seguridad
        </h1>
  
        <!-- Componente de Políticas -->
        <SecurityPolicies />
      </div>
    </div>
  </template>
  
  <script>
  import SecurityPolicies from "@/components/security/SecurityPolicies.vue";
  
  export default {
    name: "SecurityView",
    components: {
      SecurityPolicies,
    },
  };
  </script>
  