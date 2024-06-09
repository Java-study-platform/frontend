import { useMutation } from '@tanstack/react-query'
import { postUserLogin, PostUserLoginRequestParams } from '../requests'

export const usePostUserLoginMutation = (
  settings?: MutationSettings<PostUserLoginRequestParams, typeof postUserLogin>
) =>
  useMutation({
    mutationKey: ['postUserLogin'],
    mutationFn: (params) =>
      postUserLogin({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
