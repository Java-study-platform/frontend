import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '../requests'

export const useGetUserProfileQuery = (settings?: QuerySettings<typeof getUserProfile>) =>
  useQuery({
    queryKey: ['getUserProfile'],
    queryFn: () => getUserProfile({ ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
