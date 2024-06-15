import { CategoryDTO } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePutLearningCategoriesByIdMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { EditCategorySchema, editCategorySchema } from '../constants/editCategorySchema'

interface useEditCategoryFormParams {
  category: CategoryDTO
  onSubmitted: (name: string) => void
}

export const useEditCategoryForm = ({ category, onSubmitted }: useEditCategoryFormParams) => {
  const editCategoryForm = useForm<EditCategorySchema>({
    resolver: zodResolver(editCategorySchema),
    defaultValues: {
      name: category.name ?? '',
      description: category.description ?? ''
    }
  })

  const putLearningCategoriesByIdMutation = usePutLearningCategoriesByIdMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            editCategoryForm.setError(errorKey as keyof EditCategorySchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = editCategoryForm.handleSubmit(async (values) => {
    await putLearningCategoriesByIdMutation.mutateAsync({ ...values, id: category.id! })
    onSubmitted(values.name)
  })

  return {
    state: {
      isLoading: putLearningCategoriesByIdMutation.isPending || editCategoryForm.formState.isSubmitting
    },
    form: editCategoryForm,
    functions: { onSubmit }
  }
}
