<template>
    <form @submit.prevent="onSubmit" class="space-y-6">
      <!-- Usuario -->
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">
          Usuario
        </label>
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <i class="mdi mdi-account-outline w-5 h-5"></i>
          </span>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            class="w-full mt-1 p-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ingresa tu usuario"
          />
        </div>
      </div>
  
      <!-- Contraseña -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <div class="relative">
          <!-- Ícono de candado -->
          <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <i class="mdi mdi-lock-outline w-5 h-5"></i>
          </span>
          <!-- Campo de contraseña -->
          <input
            :type="passwordVisible ? 'text' : 'password'"
            id="password"
            v-model="password"
            required
            class="w-full mt-1 p-3 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ingresa tu contraseña"
          />
          <!-- Botón de ojito -->
          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <i :class="passwordVisible ? 'mdi mdi-eye-outline' : 'mdi mdi-eye-off-outline'"></i>
          </button>
        </div>
      </div>
  
      <!-- Botón de inicio de sesión -->
      <button
        type="submit"
        class="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Iniciar Sesión
      </button>
    </form>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "FormLogin",
    emits: ["submit-login"],
    setup(_, { emit }) {
      const username = ref("");
      const password = ref("");
      const passwordVisible = ref(false);
  
      const onSubmit = () => {
        const payload = {
          username: username.value,
          password: password.value,
        };
        emit("submit-login", payload);
      };
  
      const togglePasswordVisibility = () => {
        passwordVisible.value = !passwordVisible.value;
      };
  
      return {
        username,
        password,
        passwordVisible,
        onSubmit,
        togglePasswordVisibility,
      };
    },
  });
  </script>
  
  <style>
  /* Ajustar el tamaño de los íconos */
  .mdi-icon {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
  }
  </style>
  