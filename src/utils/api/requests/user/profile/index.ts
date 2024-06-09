import { DefaultResponseUserRepresentation } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export const getUserProfile = (options?: RequestOptions) =>
  instance.get<DefaultResponseUserRepresentation>('/user/login', options?.config)
