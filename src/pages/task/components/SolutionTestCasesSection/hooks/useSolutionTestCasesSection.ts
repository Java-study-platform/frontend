import { useGetSolutionTestsQuery } from '@/utils/api'

interface UseSolutionTestCasesSectionParams {
  solutionId: string
}

export const useSolutionTestCasesSection = ({ solutionId }: UseSolutionTestCasesSectionParams) => {
  const getSolutionTestsQuery = useGetSolutionTestsQuery({ solutionId })

  return {
    state: { tests: getSolutionTestsQuery.data?.data.data, loading: getSolutionTestsQuery.isLoading }
  }
}
