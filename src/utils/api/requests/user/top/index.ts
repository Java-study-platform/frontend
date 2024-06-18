import { DefaultResponseListUserTopDto } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export const getUserTop = (options?: RequestOptions) =>
  instance.get<DefaultResponseListUserTopDto>('/user/top', options?.config)
