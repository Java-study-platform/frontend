import { TopicDTO } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePutLearningTopicsByIdMutation } from '@/utils/api/hooks'
import { deserializeEditorValue, serializeEditorValue } from '@/utils/helpers'
import { getDocumentBodyFromHTMLString } from '@/utils/helpers/getDocumentBodyFromHTMLString'
import { zodResolver } from '@hookform/resolvers/zod'
import { Value } from '@udecode/plate-common'
import { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { EditTopicSchema, editTopicSchema } from '../constants/EditTopicSchema'

interface useEditTopicFormParams {
  topic: TopicDTO
  onSubmitted: (name: string) => void
}

export const useEditTopicForm = ({ topic, onSubmitted }: useEditTopicFormParams) => {
  const [material, setMaterial] = React.useState<Value>(
    deserializeEditorValue(getDocumentBodyFromHTMLString(topic.material ?? ''))
  )
  const editTopicForm = useForm<EditTopicSchema>({
    resolver: zodResolver(editTopicSchema),
    defaultValues: {
      name: topic.name ?? '',
      material: ''
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
      material: serializeEditorValue({ children: material }),
      id: topic.id
    })
    onSubmitted(values.name)
  })

  return {
    state: {
      isLoading: putLearningTopicsByIdMutation.isPending || editTopicForm.formState.isSubmitting,
      material
    },
    form: editTopicForm,
    functions: { onSubmit, setMaterial }
  }
}
