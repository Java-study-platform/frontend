import { useQuery } from '@tanstack/react-query'
import { getLearningTasksById, GetLearningTasksByIdRequestParams } from '../requests'

export const useGetLearningTasksByIdQuery = (
  params: GetLearningTasksByIdRequestParams,
  settings?: QuerySettings<typeof getLearningTasksById>
) =>
  useQuery({
    queryKey: ['getLearningTasksById', params.id],
    queryFn: () =>
      getLearningTasksById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
