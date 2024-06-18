import { useQuery } from '@tanstack/react-query'
import { getSolutionTests, GetSolutionTestsRequestParams } from '../requests'

export const useGetSolutionTestsQuery = (
  params: GetSolutionTestsRequestParams,
  settings?: QuerySettings<typeof getSolutionTests>
) =>
  useQuery({
    queryKey: ['getSolutionTests', params.solutionId],
    queryFn: () => getSolutionTests({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
