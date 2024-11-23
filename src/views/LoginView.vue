<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
      <FormLogin @submit-login="handleLogin" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FormLogin from "@/components/login/FormLogin.vue";
import { vocationalApi } from "@/api/loginService.js";

export default {
  name: "LoginView",
  components: {
    FormLogin,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleLogin = async (payload) => {
      try {
        const response = await vocationalApi(payload);
        if (response.data.status) {
          // Guardar el token y redirigir
          store.dispatch("login", {
            token: response.data.data.token,
          });
          router.push("/"); // Redirigir al Home
        } else {
          alert("Error en el inicio de sesión. Verifica tus credenciales.");
        }
      } catch (error) {
        console.error("Login failed:", error);
        alert("Ocurrió un error. Intenta nuevamente.");
      }
    };

    return {
      handleLogin,
    };
  },
};
</script>
