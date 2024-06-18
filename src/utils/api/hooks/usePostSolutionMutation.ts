import { useMutation } from '@tanstack/react-query'
import { postSolution, PostSolutionRequestParams } from '../requests'

export const usePostSolutionMutation = (
  settings?: MutationSettings<PostSolutionRequestParams, typeof postSolution>
) =>
  useMutation({
    mutationKey: ['postSolution'],
    mutationFn: (params) =>
      postSolution({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
