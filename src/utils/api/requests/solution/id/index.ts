import { DefaultResponseListSolutionDto } from '@/generated/solution-api'
import { instance } from '@/utils/api/instance'

export interface GetSolutionByIdRequestParams {
  solutionId: string
}

export const getSolutionById = ({ params, config }: RequestOptions<GetSolutionByIdRequestParams>) =>
  instance.get<DefaultResponseListSolutionDto>('/solution', {
    ...config,
    params: { ...config?.params, ...params }
  })
