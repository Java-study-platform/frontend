import { useQuery } from '@tanstack/react-query'
import { getSolutionByTaskId, GetSolutionByTaskIdRequestParams } from '../requests'

export const useGetSolutionByTaskIdQuery = (
  params: GetSolutionByTaskIdRequestParams,
  settings?: QuerySettings<typeof getSolutionByTaskId>
) =>
  useQuery({
    queryKey: ['getSolutionByTaskId', params.taskId],
    queryFn: () => getSolutionByTaskId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
