import { DefaultResponseListSolutionDto, SendTestSolutionRequest } from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export type PostSolutionRequestParams = SendTestSolutionRequest

export const postSolution = ({ params, config }: RequestOptions<PostSolutionRequestParams>) =>
  instance.post<DefaultResponseListSolutionDto>('/solution', params, config)
