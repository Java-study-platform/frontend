import { useGetUserAchievementsQuery } from '@/utils/api'

export const useUserAchievements = () => {
  const getUserAchievementsQuery = useGetUserAchievementsQuery()

  return {
    state: {
      achievements: getUserAchievementsQuery.data?.data,
      loading: getUserAchievementsQuery.isLoading
    }
  }
}
