import { DefaultResponseListSolutionDto } from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export interface GetSolutionByTaskIdRequestParams {
  taskId: string
}

export const getSolutionByTaskId = ({
  params: { taskId, ...params },
  config
}: RequestOptions<GetSolutionByTaskIdRequestParams>) =>
  instance.get<DefaultResponseListSolutionDto>(`/solution/${taskId}`, {
    ...config,
    params: { ...config?.params, ...params }
  })
