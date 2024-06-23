import {
  DefaultResponseListSolutionDto,
  DefaultResponseSolutionDto,
  SendTestSolutionRequest
} from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export interface GetSolutionRequestParams {
  solutionId: string
}

export const getSolution = ({ params, config }: RequestOptions<GetSolutionRequestParams>) =>
  instance.get<DefaultResponseSolutionDto>('/solution', {
    ...config,
    params: { ...config?.params, ...params }
  })

export type PostSolutionRequestParams = SendTestSolutionRequest

export const postSolution = ({
  params: { taskId, ...params },
  config
}: RequestOptions<PostSolutionRequestParams>) =>
  instance.post<DefaultResponseListSolutionDto>(`/solution?taskId=${taskId}`, params, config)
