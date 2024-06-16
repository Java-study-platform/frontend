import { useQuery } from '@tanstack/react-query'
import { getLearningChatsById, GetLearningChatsByIdRequestParams } from '../requests'

export const useGetLearningChatsByIdQuery = (
  params: GetLearningChatsByIdRequestParams,
  settings?: QuerySettings<typeof getLearningChatsById>
) =>
  useQuery({
    queryKey: ['getLearningChatsById', params.id],
    queryFn: () =>
      getLearningChatsById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
