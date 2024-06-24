import { DefaultResponseUserDto } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export interface GetUserProfileUsernameRequestParams {
  username: string
}

export const getUserProfileUsername = ({
  params,
  config
}: RequestOptions<GetUserProfileUsernameRequestParams>) =>
  instance.get<DefaultResponseUserDto>(`/user/profile/${params.username}`, config)
