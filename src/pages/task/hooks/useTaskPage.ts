import { useGetLearningTasksByIdQuery } from '@/utils/api'
import { useParams } from 'react-router-dom'

export const useTaskPage = () => {
  const params = useParams<{ id: string }>()
  const getLearningTasksByIdQuery = useGetLearningTasksByIdQuery({ id: params.id })

  return {
    state: {
      task: getLearningTasksByIdQuery.data?.data.data,
      loading: getLearningTasksByIdQuery.isLoading
    }
  }
}
