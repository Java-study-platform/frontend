import { AssignUserRoleModel, DefaultResponseObject } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export interface PutUserByUserIdRequestParams extends AssignUserRoleModel {
  userId: string
}

export const putUserByUserId = ({
  params: { userId, ...params },
  config
}: RequestOptions<PutUserByUserIdRequestParams>) =>
  instance.put<DefaultResponseObject>(`/user/${userId}`, params, config)
