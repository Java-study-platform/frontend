import { DefaultResponseMentorTestDto } from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export interface GetSolutionTestsInfoByTestIdRequestParams {
  testId: string
}

export const getSolutionTestsInfoByTestId = ({
  params,
  config
}: RequestOptions<GetSolutionTestsInfoByTestIdRequestParams>) =>
  instance.get<DefaultResponseMentorTestDto>(`/solution/tests/info/${params.testId}`, config)
