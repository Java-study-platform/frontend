import { useGetLearningTopicsByIdQuery } from '@/utils/api/hooks'
import { useParams } from 'react-router-dom'

export const useTopicPage = () => {
  const params = useParams<{ id: string }>()
  const getLearningTopicsByIdQuery = useGetLearningTopicsByIdQuery({ id: params.id })

  return {
    state: {
      topic: getLearningTopicsByIdQuery.data?.data.data,
      loading: getLearningTopicsByIdQuery.isLoading
    }
  }
}
