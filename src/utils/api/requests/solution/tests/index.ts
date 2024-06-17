import { DefaultResponseListTestDto } from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export interface GetSolutionTestsRequestParams {
  solutionId: string
}

export const getSolutionTests = ({ params, config }: RequestOptions<GetSolutionTestsRequestParams>) =>
  instance.get<DefaultResponseListTestDto>('/solution/tests', {
    ...config,
    params: { ...config?.params, ...params }
  })
