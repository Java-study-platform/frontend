import { DefaultResponseUserDto } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export const getUserProfile = (options?: RequestOptions) =>
  instance.get<DefaultResponseUserDto>('/user/profile', options?.config)
