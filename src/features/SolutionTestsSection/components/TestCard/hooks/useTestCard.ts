import { useGetSolutionTestsInfoByTestIdQuery } from '@/utils/api'

interface UseTestCardParams {
  testId: string
}

export const useTestCard = ({ testId }: UseTestCardParams) => {
  const getSolutionTestsInfoByTestIdQuery = useGetSolutionTestsInfoByTestIdQuery({ testId })

  return {
    state: {
      loading: getSolutionTestsInfoByTestIdQuery.isLoading,
      testInfo: getSolutionTestsInfoByTestIdQuery.data?.data.data
    }
  }
}
