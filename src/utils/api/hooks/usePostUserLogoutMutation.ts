import { useMutation } from '@tanstack/react-query'
import { postUserLogout, PostUserLogoutRequestParams } from '../requests'

export const usePostUserLogoutMutation = (
  settings?: MutationSettings<PostUserLogoutRequestParams, typeof postUserLogout>
) =>
  useMutation({
    mutationKey: ['postUserLogout'],
    mutationFn: (params) =>
      postUserLogout({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
