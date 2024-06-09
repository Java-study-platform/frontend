import { instance } from '@/utils/api/instance'
import { AxiosResponse } from 'axios'

export type PostUserLogoutRequestParams = Record<string, FIXME>

export const postUserLogout = ({ params }: RequestParams<PostUserLogoutRequestParams>) =>
  instance.post<FIXME, AxiosResponse<FIXME>, FIXME>('/user/logout', params)
