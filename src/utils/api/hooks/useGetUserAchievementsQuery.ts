import { useQuery } from '@tanstack/react-query'
import { getUserAchievements } from '../requests'

export const useGetUserAchievementsQuery = (settings?: QuerySettings<typeof getUserAchievements>) =>
  useQuery({
    queryKey: ['getUserAchievements'],
    queryFn: () => getUserAchievements({ ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
