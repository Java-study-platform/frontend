import { useQuery } from '@tanstack/react-query'
import { getLearningTopicsById, GetLearningTopicsByIdRequestParams } from '../requests'

export const useGetLearningTopicsByIdQuery = (
  params: GetLearningTopicsByIdRequestParams,
  settings?: QuerySettings<typeof getLearningTopicsById>
) =>
  useQuery({
    queryKey: ['getLearningTopicsById', params.id],
    queryFn: () =>
      getLearningTopicsById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
