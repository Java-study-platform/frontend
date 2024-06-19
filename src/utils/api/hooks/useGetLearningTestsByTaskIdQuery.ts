import { useQuery } from '@tanstack/react-query'
import { getLearningTestsByTaskId, GetLearningTestsByTaskIdRequestParams } from '../requests'

export const useGetLearningTestsByTaskIdQuery = (
  params: GetLearningTestsByTaskIdRequestParams,
  settings?: QuerySettings<typeof getLearningTestsByTaskId>
) =>
  useQuery({
    queryKey: ['getLearningTestsByTaskId', params.taskId],
    queryFn: () =>
      getLearningTestsByTaskId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
