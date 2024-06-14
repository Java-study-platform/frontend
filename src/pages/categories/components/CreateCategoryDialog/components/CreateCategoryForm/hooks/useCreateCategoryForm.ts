import { DefaultResponseObject } from '@/generated/user-api'
import { usePostLearningCategoriesMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { CreateCategorySchema, createCategorySchema } from '../constants/createCategorySchema'

interface useCreateCategoryFormParams {
  onSubmitted: (name: string) => void
}

export const useCreateCategoryForm = ({ onSubmitted }: useCreateCategoryFormParams) => {
  const createCategoryForm = useForm<CreateCategorySchema>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  const postLearningCategoriesMutation = usePostLearningCategoriesMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            createCategoryForm.setError(errorKey as keyof CreateCategorySchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = createCategoryForm.handleSubmit(async (values) => {
    await postLearningCategoriesMutation.mutateAsync(values)
    onSubmitted(values.name)
  })

  return {
    state: {
      isLoading: postLearningCategoriesMutation.isPending || createCategoryForm.formState.isSubmitting
    },
    form: createCategoryForm,
    functions: { onSubmit }
  }
}
