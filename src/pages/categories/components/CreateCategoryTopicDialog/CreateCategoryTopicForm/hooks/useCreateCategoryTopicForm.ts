import { CategoryDTO } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePostLearningTopicsByCategoryIdMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlateEditor } from '@udecode/plate-common'
import { AxiosError } from 'axios'
import React from 'react'
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
  const materialEditorRef = React.useRef<PlateEditor | null>(null)
  const createCategoryTopicForm = useForm<CreateCategoryTopicSchema>({
    resolver: zodResolver(createCategoryTopicSchema),
    defaultValues: {
      name: '',
      material: ''
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
    // TODO get raw value
    // console.log(materialEditorRef?.current.norma)
    await postLearningTopicsByCategoryIdMutation.mutateAsync({
      ...values,
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
    ref: { materialEditor: materialEditorRef },
    form: createCategoryTopicForm,
    functions: { onSubmit }
  }
}
