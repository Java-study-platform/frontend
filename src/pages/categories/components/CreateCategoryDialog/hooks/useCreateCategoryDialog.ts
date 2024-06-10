import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useCreateCategoryDialog = () => {
  const i18n = useI18n()
  const queryClient = useQueryClient()
  const [open, setOpen] = React.useState(false)

  const onSubmitted = (categoryName: string) => {
    setOpen(false)
    queryClient.invalidateQueries({ queryKey: ['getLearningCategories'] })
    toast.success(i18n.formatMessage({ id: 'toast.categoryCreated' }, { name: categoryName }))
  }

  return { state: { open }, functions: { setOpen, onSubmitted } }
}
