import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

interface UseEditTopicDialogParams {
  topicId: string
}

export const useEditTopicDialog = ({ topicId }: UseEditTopicDialogParams) => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const [open, setOpen] = React.useState(false)

  const onSubmitted = (topicName: string) => {
    setOpen(false)
    queryClient.invalidateQueries({ queryKey: ['getLearningTopicsById', topicId] })
    toast.success(i18n.formatMessage({ id: 'toast.topicEdited' }, { name: topicName }))
  }

  return { state: { open }, functions: { setOpen, onSubmitted } }
}
