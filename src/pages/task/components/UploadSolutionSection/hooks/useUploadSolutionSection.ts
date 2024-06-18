import { usePostSolutionMutation } from '@/utils/api'
import { useI18n } from '@/utils/contexts'
import React from 'react'
import { toast } from 'sonner'

export const useUploadSolutionSection = () => {
  const i18n = useI18n()
  const [code, setCode] = React.useState<string>('')
  const postSolutionMutation = usePostSolutionMutation()

  const onUploadSolutionClick = async () => {
    await postSolutionMutation.mutateAsync({ code })
    toast.success(i18n.formatMessage({ id: 'toast.solutionUploaded' }))
    setCode('')
  }

  return {
    state: { code, loading: postSolutionMutation.isPending },
    functions: { setCode, onUploadSolutionClick }
  }
}
