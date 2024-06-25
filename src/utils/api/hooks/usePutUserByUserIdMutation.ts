import { useMutation } from '@tanstack/react-query'
import { putUserByUserId, PutUserByUserIdRequestParams } from '../requests'

export const usePutUserByUserIdMutation = (
  settings?: MutationSettings<PutUserByUserIdRequestParams, typeof putUserByUserId>
) =>
  useMutation({
    mutationKey: ['putUserByUserId'],
    mutationFn: (params) =>
      putUserByUserId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
