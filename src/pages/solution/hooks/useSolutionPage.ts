import { useGetSolutionQuery } from '@/utils/api'
import { useParams } from 'react-router-dom'

export const useSolutionPage = () => {
  const params = useParams<{ id: string }>()
  const getSolutionQuery = useGetSolutionQuery({ solutionId: params.id! })

  return { state: { solution: getSolutionQuery.data?.data.data, loading: getSolutionQuery.isLoading } }
}
