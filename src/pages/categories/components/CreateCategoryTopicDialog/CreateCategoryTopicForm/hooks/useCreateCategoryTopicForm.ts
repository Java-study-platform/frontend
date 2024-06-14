import { CategoryDTO } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePostLearningTopicsByCategoryIdMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import {
  CreateCategoryTopicSchema,
  createCategoryTopicSchema
} from '../constants/createCategoryTopicSchema'

interface useCreateCategoryTopicFormParams {
  onSubmitted: (name: string) => void
  category: CategoryDTO
}

export const useCreateCategoryTopicForm = ({
  category,
  onSubmitted
}: useCreateCategoryTopicFormParams) => {
  const createCategoryTopicForm = useForm<CreateCategoryTopicSchema>({
    resolver: zodResolver(createCategoryTopicSchema),
    defaultValues: {
      name: ''
    }
  })

  const postLearningTopicsByCategoryIdMutation = usePostLearningTopicsByCategoryIdMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            createCategoryTopicForm.setError(errorKey as keyof CreateCategoryTopicSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = createCategoryTopicForm.handleSubmit(async (values) => {
    await postLearningTopicsByCategoryIdMutation.mutateAsync({
      name: values.name,
      categoryId: category.id!
    })
    onSubmitted(values.name)
  })

  return {
    state: {
      isLoading:
        postLearningTopicsByCategoryIdMutation.isPending ||
        createCategoryTopicForm.formState.isSubmitting
    },
    form: createCategoryTopicForm,
    functions: { onSubmit }
  }
}
