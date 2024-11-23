<template>
  <div>
    <!-- Barra de navegación -->
    <header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md py-4 px-6">
      <div class="flex justify-between items-center">
        <!-- Saludo del usuario -->
        <div class="flex items-center space-x-2">
          <span class="font-medium text-lg">Hola,</span>
          <span class="font-bold text-xl">{{ username }}</span>
        </div>

        <!-- Opciones del menú -->
        <nav class="flex space-x-6">
          <router-link
            to="/start"
            class="font-medium text-white hover:underline hover:opacity-90 transition"
          >
            Inicio
          </router-link>
          <router-link
            to="/audit"
            class="font-medium text-white hover:underline hover:opacity-90 transition"
          >
            Auditorías
          </router-link>
          <router-link
            to="/security"
            class="font-medium text-white hover:underline hover:opacity-90 transition"
          >
            Seguridad
          </router-link>
          <router-link
            to="/report"
            class="font-medium text-white hover:underline hover:opacity-90 transition"
          >
            Reportar Problema
          </router-link>
        </nav>

        <!-- Botón de cierre de sesión -->
        <div class="flex items-center space-x-3">
          <button
            @click="logout"
            class="font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition"
          >
            Salir
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white hover:text-gray-200 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-14v1m0 8l0-8"
            />
          </svg>
        </div>
      </div>
    </header>

    <!-- Contenido Principal -->
    <main class="p-6 bg-gray-50 min-h-screen">
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";

export default {
  setup() {
    // Recuperar el nombre del usuario
    const username = ref(store.state.nombreApellidos || "Usuario");

    const router = useRouter();

    // Función para cerrar sesión
    const logout = () => {
      // Limpiar estado y localStorage
      localStorage.clear();
      store.commit("CLEAR_TOKEN"); // Asegúrate de que la mutación esté correctamente configurada

      // Redirigir al login
      router.push("/login");
    };

    return {
      username,
      logout,
    };
  },
};
</script>

<style scoped>
/* Para mejorar aún más el diseño, puedes ajustar estos estilos */
</style>
