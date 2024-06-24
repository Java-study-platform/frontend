import { usePostSolutionMutation } from '@/utils/api'
import { useI18n } from '@/utils/contexts'
import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

export const useUploadSolutionSection = () => {
  const params = useParams<{ id: string }>()
  const i18n = useI18n()
  const [code, setCode] = React.useState<string>('')
  const postSolutionMutation = usePostSolutionMutation()

  const onUploadSolutionClick = async () => {
    await postSolutionMutation.mutateAsync({ code, taskId: params.id! })
    toast.success(i18n.formatMessage({ id: 'toast.solutionUploaded' }))
    setCode('')
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
