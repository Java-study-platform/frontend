import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useEditTaskDialog = () => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const [open, setOpen] = React.useState(false)

  const onSubmitted = (taskName: string) => {
    setOpen(false)
    queryClient.invalidateQueries({ queryKey: ['getLearningTasks'] })
    toast.success(i18n.formatMessage({ id: 'toast.TaskEdited' }, { name: taskName }))
  }

  return { state: { open }, functions: { setOpen, onSubmitted } }
}
