<template>
    <div class="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
      <!-- Filtros -->
      <div class="mb-6 space-y-4">
        <h2 class="text-2xl font-bold text-gray-300">Filtros</h2>
        <div class="flex space-x-4">
          <div>
            <label class="block text-gray-400 text-sm mb-1" for="startDate">Fecha Inicio</label>
            <input
              id="startDate"
              type="date"
              class="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <div>
            <label class="block text-gray-400 text-sm mb-1" for="endDate">Fecha Fin</label>
            <input
              id="endDate"
              type="date"
              class="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <div>
            <label class="block text-gray-400 text-sm mb-1" for="ipAddress">IP</label>
            <input
              id="ipAddress"
              type="text"
              placeholder="Ej: 192.168.1.1"
              class="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            />
          </div>
        </div>
      </div>
  
      <!-- Lista de Auditorías -->
      <div>
        <h2 class="text-2xl font-bold text-gray-300 mb-4">Historial de Actividad</h2>
        <table class="w-full bg-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr class="bg-gray-600">
              <th class="py-2 px-4 text-left text-gray-300">Fecha</th>
              <th class="py-2 px-4 text-left text-gray-300">Usuario</th>
              <th class="py-2 px-4 text-left text-gray-300">IP</th>
              <th class="py-2 px-4 text-left text-gray-300">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(audit, index) in auditData" :key="index" class="even:bg-gray-800 odd:bg-gray-700">
              <td class="py-2 px-4">{{ audit.date }}</td>
              <td class="py-2 px-4">{{ audit.user }}</td>
              <td class="py-2 px-4">{{ audit.ip }}</td>
              <td class="py-2 px-4">{{ audit.action }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AuditRecords",
    data() {
      return {
        // Datos estáticos para mostrar la auditoría
        auditData: [
          { date: "2024-11-22", user: "admin", ip: "192.168.0.1", action: "Inicio de sesión" },
          { date: "2024-11-22", user: "user1", ip: "192.168.0.2", action: "Cambio de contraseña" },
          { date: "2024-11-21", user: "admin", ip: "192.168.0.1", action: "Creación de usuario" },
          { date: "2024-11-21", user: "user2", ip: "192.168.0.3", action: "Actualización de perfil" },
        ],
      };
    },
  };
  </script>
  