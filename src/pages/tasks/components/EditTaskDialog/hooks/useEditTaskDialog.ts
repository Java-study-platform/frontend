import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

interface UseEditTaskDialogParams {
  taskId: string
}

export const useEditTaskDialog = ({ taskId }: UseEditTaskDialogParams) => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const [open, setOpen] = React.useState(false)

  const onSubmitted = (taskName: string) => {
    setOpen(false)
    queryClient.invalidateQueries({ queryKey: ['getLearningTasks'] })
    queryClient.invalidateQueries({ queryKey: ['getLearningTasksById', taskId] })
    toast.success(i18n.formatMessage({ id: 'toast.taskEdited' }, { name: taskName }))
  }

  return { state: { open }, functions: { setOpen, onSubmitted } }
}
