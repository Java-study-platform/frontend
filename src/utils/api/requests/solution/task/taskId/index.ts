import { DefaultResponseListSolutionDto } from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export interface GetSolutionTaskByTaskIdRequestParams {
  taskId: string
  username: string
}

export const getSolutionTaskByTaskId = ({
  params: { taskId, ...params },
  config
}: RequestOptions<GetSolutionTaskByTaskIdRequestParams>) =>
  instance.get<DefaultResponseListSolutionDto>(`/solution/task/${taskId}`, {
    ...config,
    params: { ...config?.params, ...params }
  })
