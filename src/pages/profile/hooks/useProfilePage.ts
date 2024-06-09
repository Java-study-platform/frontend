import { useGetUserProfileQuery } from '@/utils/api/hooks'

export const useProfilePage = () => {
  const getUserProfileQuery = useGetUserProfileQuery()

  return { state: { loading: getUserProfileQuery.isLoading } }
}
