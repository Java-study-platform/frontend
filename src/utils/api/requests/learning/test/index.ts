import { DefaultResponseObject, DefaultResponseTestCaseDto, EditTestModel } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface PutLearningTestRequestParams extends EditTestModel {
  testId: string
}

export const putLearningTest = ({ params, config }: RequestOptions<PutLearningTestRequestParams>) =>
  instance.put<DefaultResponseTestCaseDto>(`/learning/test?testId=${params.testId}`, params, config)

export interface DeleteLearningTestRequestParams {
  testId: string
}

export const deleteLearningTest = ({
  params,
  config
}: RequestOptions<DeleteLearningTestRequestParams>) =>
  instance.delete<DefaultResponseObject>('/learning/test', {
    ...config,
    params: { ...config?.params, ...params }
  })
