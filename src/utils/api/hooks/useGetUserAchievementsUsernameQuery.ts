import { useQuery } from '@tanstack/react-query'
import { getUserAchievementsUsername, GetUserAchievementsUsernameRequestParams } from '../requests'

export const useGetUserAchievementsUsernameQuery = (
  params: GetUserAchievementsUsernameRequestParams,
  settings?: QuerySettings<typeof getUserAchievementsUsername>
) =>
  useQuery({
    queryKey: ['getUserAchievementsUsername'],
    queryFn: () =>
      getUserAchievementsUsername({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
