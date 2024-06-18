import { useGetUserTopQuery } from '@/utils/api'

export const useRatingPage = () => {
  const getUserTopQuery = useGetUserTopQuery()

  return {
    state: { users: getUserTopQuery.data?.data.data, loading: getUserTopQuery.isLoading },
    functions: {}
  }
}
