import { instance } from '@/utils/api/instance'
import { AxiosResponse } from 'axios'

export type PostUserRegisterRequestParams = Record<string, FIXME>

export const postUserRegister = ({ params }: RequestParams<PostUserRegisterRequestParams>) =>
  instance.post<FIXME, AxiosResponse<FIXME>, FIXME>('/user/register', params)
