import { DefaultResponseObject } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export const postUserLogout = (options?: RequestOptions) =>
  instance.post<DefaultResponseObject>('/user/logout', null, options?.config)
