import { useQuery } from '@tanstack/react-query'
import { getSolution, GetSolutionRequestParams } from '../requests'

export const useGetSolutionQuery = (
  params: GetSolutionRequestParams,
  settings?: QuerySettings<typeof getSolution>
) =>
  useQuery({
    queryKey: ['getSolution', params.solutionId],
    queryFn: () => getSolution({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
