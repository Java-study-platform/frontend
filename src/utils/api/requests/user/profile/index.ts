import { instance } from '@/utils/api/instance'
import { AxiosResponse } from 'axios'

export const getUserProfile = ({ config }: RequestParams) =>
  instance.get<FIXME, AxiosResponse<FIXME>, FIXME>('/user/login', config)
