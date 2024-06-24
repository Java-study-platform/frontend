export const ROUTES = {
  ROOT: '/',
  CATEGORIES: '/categories',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: (username?: string) => `/profile/${username ?? ':username'}`,
  TASKS: '/tasks',
  TOPIC: (id?: string) => `/topic/${id ?? ':id'}`,
  TASK: (id?: string) => `/task/${id ?? ':id'}`,
  SOLUTION: (id?: string) => `/solution/${id ?? ':id'}`,
  RATING: '/rating'
}
