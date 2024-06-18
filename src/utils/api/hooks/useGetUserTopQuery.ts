import { useQuery } from '@tanstack/react-query'
import { getUserTop } from '../requests'

export const useGetUserTopQuery = (settings?: QuerySettings<typeof getUserTop>) =>
  useQuery({
    queryKey: ['getUserTop'],
    queryFn: () => getUserTop({ ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
