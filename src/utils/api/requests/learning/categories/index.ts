import {
  CreateCategoryModel,
  DefaultResponseCategoryDTO,
  DefaultResponsePageCategoryDTO
} from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface GetLearningCategoriesRequestParams {
  queryText?: string
  page?: number
  size?: number
  sort?: string[]
}

export const getLearningCategories = (options?: RequestOptions<GetLearningCategoriesRequestParams>) =>
  instance.get<DefaultResponsePageCategoryDTO>('/learning/categories', options)

export type PostLearningCategoriesRequestParams = CreateCategoryModel

export const postLearningCategories = ({
  params,
  config
}: RequestOptions<PostLearningCategoriesRequestParams>) =>
  instance.post<DefaultResponseCategoryDTO>('/learning/categories', params, config)
