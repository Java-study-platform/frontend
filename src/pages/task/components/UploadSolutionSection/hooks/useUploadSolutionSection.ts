import { usePostSolutionMutation } from '@/utils/api'
import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

export const useUploadSolutionSection = () => {
  const i18n = useI18n()
  const params = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const [code, setCode] = React.useState<string>('')
  const postSolutionMutation = usePostSolutionMutation()

  const onUploadSolutionClick = async () => {
    if (!code) {
      toast.error(i18n.formatMessage({ id: 'toast.codeRequired' }))
      return
    }
    await postSolutionMutation.mutateAsync({ code, taskId: params.id! })
    setCode('')
    queryClient.invalidateQueries({ queryKey: ['getSolutionByTaskId', params.id] })
    toast.success(i18n.formatMessage({ id: 'toast.solutionUploaded' }))
  }

  return {
    state: {
      code,
      loading: postSolutionMutation.isPending,
      solutionId: postSolutionMutation.data?.data.data?.id
    },
    functions: { setCode, onUploadSolutionClick }
  }
}
