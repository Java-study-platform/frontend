import { CategoryDTO } from '@/generated/core-api'
import { useDeleteLearningCategoriesByIdMutation } from '@/utils/api/hooks'
import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

interface UseDeleteCategoryDialogParams {
  category: CategoryDTO
}

export const useDeleteCategoryDialog = ({ category }: UseDeleteCategoryDialogParams) => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const [open, setOpen] = React.useState(false)

  const deleteLearningCategoriesByIdMutation = useDeleteLearningCategoriesByIdMutation()

  const onConfirmDeleteClick = async () => {
    await deleteLearningCategoriesByIdMutation.mutateAsync({ id: category.id! })
    queryClient.invalidateQueries({ queryKey: ['getLearningCategories'] })
    if (category.name)
      toast.success(i18n.formatMessage({ id: 'toast.categoryDeleted' }, { name: category.name }))
  }

  return { state: { open }, functions: { setOpen, onConfirmDeleteClick } }
}
