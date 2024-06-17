import { useGetSolutionTestsQuery } from '@/utils/api'

interface UseSolutionTestsSectionParams {
  solutionId: string
}

export const useSolutionTestsSection = ({ solutionId }: UseSolutionTestsSectionParams) => {
  const getSolutionTestsQuery = useGetSolutionTestsQuery({ solutionId })

  return {
    state: { tests: getSolutionTestsQuery.data?.data.data, loading: getSolutionTestsQuery.isLoading }
  }
}
