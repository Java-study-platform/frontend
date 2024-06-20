import { DefaultResponseListSolutionDto } from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export interface GetSolutionByTaskIdRequestParams {
  taskId: string
}

export const getSolutionByTaskId = ({
  params,
  config
}: RequestOptions<GetSolutionByTaskIdRequestParams>) =>
  instance.get<DefaultResponseListSolutionDto>(`/solution/${params.taskId}`, {
    ...config,
    params: { ...config?.params, ...params }
  })
