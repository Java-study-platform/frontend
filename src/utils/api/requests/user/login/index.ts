import { instance } from '@/utils/api/instance'
import { AxiosResponse } from 'axios'

export type PostUserLoginRequestParams = Record<string, FIXME>

export const postUserLogin = ({ params }: RequestParams<PostUserLoginRequestParams>) =>
  instance.post<FIXME, AxiosResponse<FIXME>, FIXME>('/user/login', params)
