<template>
    <div class="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg space-y-6">
      <!-- Texto Explicativo -->
      <div>
        <h2 class="text-2xl font-bold text-gray-300 mb-4">¿Por qué son importantes?</h2>
        <p class="text-gray-300">
          Las políticas de seguridad de datos son fundamentales para garantizar la protección de la información sensible. Estas políticas establecen normas claras sobre cómo manejar, almacenar y compartir los datos dentro del sistema, minimizando riesgos y asegurando la confidencialidad.
        </p>
      </div>
  
      <!-- Contenido de las Políticas -->
      <div class="bg-gray-700 p-4 rounded-lg shadow-md">
        <h3 class="text-xl font-bold text-gray-300 mb-4">Políticas de Seguridad</h3>
        <div class="text-gray-300 space-y-2">
          <p>
            <strong>1. Confidencialidad:</strong> Toda la información sensible está cifrada y protegida contra accesos no autorizados.
          </p>
          <p>
            <strong>2. Integridad:</strong> Los datos no pueden ser alterados sin los permisos adecuados y quedan registrados en auditorías.
          </p>
          <p>
            <strong>3. Disponibilidad:</strong> Nuestro sistema está diseñado para garantizar el acceso continuo a los datos esenciales.
          </p>
          <p>
            <strong>4. Gestión de accesos:</strong> Se aplican políticas estrictas para el control de cuentas de usuario y contraseñas.
          </p>
        </div>
      </div>
  
      <!-- Botón de Descarga -->
      <div class="text-center">
        <a
          href="@/assets/policies.html"
          download="policies.pdf"
          class="inline-block bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-700 transition"
        >
          Descargar Políticas
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SecurityPolicies",
  };
  </script>
  