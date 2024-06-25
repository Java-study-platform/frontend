import { TaskDTO } from '@/generated/core-api'
import { useDeleteLearningTasksByIdMutation } from '@/utils/api/hooks'
import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

interface UseDeleteCategoryDialogParams {
  task: TaskDTO
}

export const useDeleteTaskDialog = ({ task }: UseDeleteCategoryDialogParams) => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const [open, setOpen] = React.useState(false)

  const deleteLearningTasksByIdMutation = useDeleteLearningTasksByIdMutation()

  const onConfirmDeleteClick = async () => {
    await deleteLearningTasksByIdMutation.mutateAsync({ id: task.id })
    setOpen(false)
    queryClient.invalidateQueries({ queryKey: ['getLearningTasks'] })
    if (task.name) toast.success(i18n.formatMessage({ id: 'toast.taskDeleted' }, { name: task.name }))
  }

  return {
    state: { open, loading: deleteLearningTasksByIdMutation.isPending },
    functions: { setOpen, onConfirmDeleteClick }
  }
}
