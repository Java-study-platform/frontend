import { useQuery } from '@tanstack/react-query'
import { getLearningTopics, GetLearningTopicsRequestParams } from '../requests'

export const useGetLearningTopicsQuery = (
  params: GetLearningTopicsRequestParams,
  settings?: QuerySettings<typeof getLearningTopics>
) =>
  useQuery({
    queryKey: ['getLearningTopics', params.page, params.size, params.sort, params.queryText],
    queryFn: () => getLearningTopics({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
