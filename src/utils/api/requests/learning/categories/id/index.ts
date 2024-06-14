import { DefaultResponseCategoryDTO, EditCategoryModel } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface PutLearningCategoriesByIdRequestParams extends EditCategoryModel {
  id: string
}

export const putLearningCategoriesById = ({
  params: { id, ...params },
  config
}: RequestOptions<PutLearningCategoriesByIdRequestParams>) =>
  instance.put<DefaultResponseCategoryDTO>(`/learning/categories/${id}`, params, config)

export interface DeleteLearningCategoriesByIdRequestParams {
  id: string
}

export const deleteLearningCategoriesById = ({
  params,
  config
}: RequestOptions<DeleteLearningCategoriesByIdRequestParams>) =>
  instance.delete<DefaultResponseCategoryDTO>(`/learning/categories/${params.id}`, config)
