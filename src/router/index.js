import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      meta: {
        title: "Home",
        requiresAuth: true, // Ruta protegida
      },
      path: "/",
      component: () => import("@/layouts/MasterLayout.vue"),
      children: [
        {
          meta: {
            title: "start",
          },
          path: "start",
          name: "start",
          component: () => import("@/views/StartView.vue"), // Aquí se añade StartView
        },
        {
          meta: {
            title: "Auditorías",
          },
          path: "audit",
          name: "audit",
          component: () => import("@/views/AuditView.vue"), // Vista de Auditorías
        },
        {
          meta: {
            title: "Seguridad",
          },
          path: "security",
          name: "security",
          component: () => import("@/views/SecurityView.vue"), // Vista de Auditorías
        },
        {
          meta: {
            title: "Reportar Problema",
          },
          path: "report",
          name: "report",
          component: () => import("@/views/ReportView.vue"),
        },
        
      ],
    },
    {
      meta: {
        title: "Login",
      },
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login',
    },
  ],
});

// Guard de navegación
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si la ruta requiere autenticación y no está autenticado
    next({ name: 'login' });
  } else if (to.name === 'login' && isAuthenticated) {
    // Si está autenticado y trata de ir al login, redirigir al Home
    next({ path: '/start' });
  } else {
    next(); // Permitir acceso
  }
});

export default router;
