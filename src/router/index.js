import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/books',
      name: 'BooksIndex',
      component: () => import('../views/books/BooksIndex.vue')
    },
    {
      path: '/books/create',
      name: 'BooksCreate',
      component: () => import('../views/books/BooksCreate.vue')
    },
    {
      path: '/books/:id/edit',
      name: 'BooksEdit',
      component: () => import('../views/books/BooksEdit.vue'),
      props: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },        
  ]
})

export default router
