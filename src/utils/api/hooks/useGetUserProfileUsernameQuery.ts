import { useQuery } from '@tanstack/react-query'
import { getUserProfileUsername, GetUserProfileUsernameRequestParams } from '../requests'

export const useGetUserProfileUsernameQuery = (
  params: GetUserProfileUsernameRequestParams,
  settings?: QuerySettings<typeof getUserProfileUsername>
) =>
  useQuery({
    queryKey: ['getUserProfileUsername'],
    queryFn: () =>
      getUserProfileUsername({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
