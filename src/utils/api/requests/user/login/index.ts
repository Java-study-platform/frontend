import { DefaultResponseTokenResponse, UserLoginModel } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export type PostUserLoginRequestParams = UserLoginModel

export const postUserLogin = ({ params }: RequestParams<PostUserLoginRequestParams>) =>
  instance.post<DefaultResponseTokenResponse>('/user/login', params)
