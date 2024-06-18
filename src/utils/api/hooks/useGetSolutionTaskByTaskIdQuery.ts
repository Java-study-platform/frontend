import { useQuery } from '@tanstack/react-query'
import { getSolutionTaskByTaskId, GetSolutionTaskByTaskIdRequestParams } from '../requests'

export const useGetSolutionTaskByTaskIdQuery = (
  params: GetSolutionTaskByTaskIdRequestParams,
  settings?: QuerySettings<typeof getSolutionTaskByTaskId>
) =>
  useQuery({
    queryKey: ['getSolutionTaskByTaskId', params.taskId, params.username],
    queryFn: () =>
      getSolutionTaskByTaskId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
