import { useMutation } from '@tanstack/react-query'
import { postUserRegister, PostUserRegisterRequestParams } from '../requests'

export const usePostUserRegisterMutation = (
  settings?: MutationSettings<PostUserRegisterRequestParams, typeof postUserRegister>
) =>
  useMutation({
    mutationKey: ['postUserRegister'],
    mutationFn: (params) =>
      postUserRegister({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
