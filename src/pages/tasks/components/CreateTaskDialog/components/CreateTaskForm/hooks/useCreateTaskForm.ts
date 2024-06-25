import { DefaultResponseObject } from '@/generated/user-api'
import { usePostLearningTasksByTopicIdMutation } from '@/utils/api/hooks'
import { useI18n } from '@/utils/contexts'
import { serializeEditorValue } from '@/utils/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { Value } from '@udecode/plate-common'
import { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { CreateTaskSchema, createTaskSchema } from '../constants/createTaskSchema'

interface useCreateTaskFormParams {
  onSubmitted: (name: string) => void
}

export const useCreateTaskForm = ({ onSubmitted }: useCreateTaskFormParams) => {
  const i18n = useI18n()
  const [description, setDescription] = React.useState<Value>()

  const createTaskForm = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      name: '',
      description: '',
      experienceAmount: '',
      timeLimit: '',
      topicId: ''
    }
  })

  const postLearningTasksByTopicIdMutation = usePostLearningTasksByTopicIdMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            createTaskForm.setError(errorKey as keyof CreateTaskSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = createTaskForm.handleSubmit(async (values) => {
    if (!description) {
      toast.error(i18n.formatMessage({ id: 'toast.descriptionRequired' }))
      return
    }

    await postLearningTasksByTopicIdMutation.mutateAsync({
      ...values,
      description: serializeEditorValue({ children: description }),
      timeLimit: +values.timeLimit,
      experienceAmount: +values.experienceAmount
    })
    onSubmitted(values.name)
  })

  return {
    state: {
      description,
      isLoading: postLearningTasksByTopicIdMutation.isPending || createTaskForm.formState.isSubmitting
    },
    form: createTaskForm,
    functions: { onSubmit, setDescription }
  }
}
