import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: localStorage.getItem('token') || null, // Cargar el token desde localStorage
    user: null, // Información del usuario, si la necesitas
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token); // Persistir el token
    },
    CLEAR_TOKEN(state) {
      state.token = null;
      localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
    },
    SET_USER(state, user) {
      state.user = user; // Guardar la información del usuario
    },
  },
  actions: {
    login({ commit }, data) {
      commit('SET_TOKEN', data.token);
      commit('SET_USER', data.user || null); // Puedes guardar más información del usuario si el API la envía
    },
    logout({ commit }) {
      commit('CLEAR_TOKEN');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token, // Verifica si el usuario está autenticado
  },
});

export default store;
