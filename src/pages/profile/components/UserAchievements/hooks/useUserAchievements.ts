import { useGetUserAchievementsUsernameQuery } from '@/utils/api'
import { useParams } from 'react-router-dom'

export const useUserAchievements = () => {
  const params = useParams<{ username: string }>()
  const getUserAchievementsUsernameQuery = useGetUserAchievementsUsernameQuery({
    username: params.username!
  })

  return {
    state: {
      achievements: getUserAchievementsUsernameQuery.data?.data,
      loading: getUserAchievementsUsernameQuery.isLoading
    }
  }
}
