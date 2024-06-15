import { TopicDTO } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePutLearningTopicsByIdMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlateEditor } from '@udecode/plate-common'
import { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { EditTopicSchema, editTopicSchema } from '../constants/EditTopicSchema'

interface useEditTopicFormParams {
  topic: TopicDTO
  onSubmitted: (name: string) => void
}

export const useEditTopicForm = ({ topic, onSubmitted }: useEditTopicFormParams) => {
  const materialEditorRef = React.useRef<PlateEditor | null>(null)
  const editTopicForm = useForm<EditTopicSchema>({
    resolver: zodResolver(editTopicSchema),
    defaultValues: {
      name: topic.name ?? '',
      material: topic.material ?? ''
    }
  })

  const putLearningTopicsByIdMutation = usePutLearningTopicsByIdMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            editTopicForm.setError(errorKey as keyof EditTopicSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = editTopicForm.handleSubmit(async (values) => {
    await putLearningTopicsByIdMutation.mutateAsync({
      ...values,
      id: topic.id!
    })
    onSubmitted(values.name)
  })

  return {
    state: {
      isLoading: putLearningTopicsByIdMutation.isPending || editTopicForm.formState.isSubmitting
    },
    ref: { materialEditor: materialEditorRef },
    form: editTopicForm,
    functions: { onSubmit }
  }
}
