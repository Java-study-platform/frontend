import { TaskDTO } from '@/generated/core-api'
import { useDeleteLearningTasksByIdMutation } from '@/utils/api/hooks'
import { ROUTES } from '@/utils/constants'
import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

interface UseDeleteCategoryDialogParams {
  task: TaskDTO
}

export const useDeleteTaskDialog = ({ task }: UseDeleteCategoryDialogParams) => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const deleteLearningTasksByIdMutation = useDeleteLearningTasksByIdMutation()

  const onConfirmDeleteClick = async () => {
    await deleteLearningTasksByIdMutation.mutateAsync({ id: task.id })
    queryClient.invalidateQueries({ queryKey: ['getLearningTasks'] })
    if (task.name) toast.success(i18n.formatMessage({ id: 'toast.taskDeleted' }, { name: task.name }))
    if (location.pathname.includes('task')) navigate(ROUTES.TASKS)
  }

  return {
    state: { open, loading: deleteLearningTasksByIdMutation.isPending },
    functions: { setOpen, onConfirmDeleteClick }
  }
}
