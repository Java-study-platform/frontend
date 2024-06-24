import { useQuery } from '@tanstack/react-query'
import { getSolutionTestsInfoByTestId, GetSolutionTestsInfoByTestIdRequestParams } from '../requests'

export const useGetSolutionTestsInfoByTestIdQuery = (
  params: GetSolutionTestsInfoByTestIdRequestParams,
  settings?: QuerySettings<typeof getSolutionTestsInfoByTestId>
) =>
  useQuery({
    queryKey: ['getSolutionTestsInfoByTestId', params.testId],
    queryFn: () =>
      getSolutionTestsInfoByTestId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
