import { useGetUserProfileQuery } from '@/utils/api/hooks'

// import { useParams } from 'react-router-dom'

export const useTopicPage = () => {
  // const params = useParams<{ id: string }>()
  // TODO get topic
  const getUserProfileQuery = useGetUserProfileQuery()

  return {
    state: {
      loading: getUserProfileQuery.isLoading
    },
    query: getUserProfileQuery
  }
}
