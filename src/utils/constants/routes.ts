export const ROUTES = {
  ROOT: '/',
  CATEGORIES: '/categories',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  TASKS: '/tasks',
  TOPIC: (id: string) => `/topic/${id}`,
  TASK: (id: string) => `/task/${id}`
}
