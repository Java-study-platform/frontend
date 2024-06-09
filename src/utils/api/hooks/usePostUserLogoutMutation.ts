import { useMutation } from '@tanstack/react-query'
import { postUserLogout } from '../requests'

export const usePostUserLogoutMutation = (settings?: MutationSettings<never, typeof postUserLogout>) =>
  useMutation({
    mutationKey: ['postUserLogout'],
    mutationFn: () => postUserLogout({ ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
