import { DefaultResponseObject, UserRegistrationModel } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export type PostUserRegisterRequestParams = UserRegistrationModel

export const postUserRegister = ({ params }: RequestOptions<PostUserRegisterRequestParams>) =>
  instance.post<DefaultResponseObject>('/user/register', params)
