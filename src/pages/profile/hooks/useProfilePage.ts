import { useGetUserProfileUsernameQuery } from '@/utils/api'
import { useParams } from 'react-router-dom'

export const useProfilePage = () => {
  const params = useParams<{ username: string }>()
  const getUserProfileUsernameQuery = useGetUserProfileUsernameQuery({
    username: params.username!
  })

  return {
    state: {
      loading: getUserProfileUsernameQuery.isLoading,
      profile: getUserProfileUsernameQuery.data?.data.data
    }
  }
}
