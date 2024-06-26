import { useGetSolutionTestsInfoByTestIdQuery } from '@/utils/api'

interface UseAccordionTestCardParams {
  testId: string
}

export const useAccordionTestCard = ({ testId }: UseAccordionTestCardParams) => {
  const getSolutionTestsInfoByTestIdQuery = useGetSolutionTestsInfoByTestIdQuery({ testId })

  return {
    state: {
      loading: getSolutionTestsInfoByTestIdQuery.isLoading,
      testInfo: getSolutionTestsInfoByTestIdQuery.data?.data.data
    }
  }
}
