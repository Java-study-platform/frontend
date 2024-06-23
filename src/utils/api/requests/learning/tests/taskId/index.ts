import { CreateTestModel, DefaultResponseTestCaseDto, TestCaseDto } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface GetLearningTestsByTaskIdRequestParams {
  taskId: string
}

export const getLearningTestsByTaskId = ({
  params,
  config
}: RequestOptions<GetLearningTestsByTaskIdRequestParams>) =>
  instance.get<TestCaseDto[]>(`/learning/tests/${params.taskId}`, config)

export interface PostLearningTestsByTaskIdRequestParams extends CreateTestModel {
  taskId: string
}

export const postLearningTestsByTaskId = ({
  params: { taskId, ...params },
  config
}: RequestOptions<PostLearningTestsByTaskIdRequestParams>) =>
  instance.post<DefaultResponseTestCaseDto>(`/learning/tests/${taskId}`, params, config)
