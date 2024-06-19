import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useCreateTestCaseDialog = () => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const [open, setOpen] = React.useState(false)

  const onSubmitted = () => {
    setOpen(false)
    queryClient.invalidateQueries({ queryKey: ['getLearningTestsByTaskId'] })
    toast.success(i18n.formatMessage({ id: 'toast.testCaseCreated' }))
  }

  return { state: { open }, functions: { setOpen, onSubmitted } }
}
