import { DefaultResponseObject } from '@/generated/user-api'
import { usePostLearningTasksByTopicIdMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { CreateTaskSchema, createTaskSchema } from '../constants/createTaskSchema'

interface useCreateTaskFormParams {
  onSubmitted: (name: string) => void
}

export const useCreateTaskForm = ({ onSubmitted }: useCreateTaskFormParams) => {
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
    await postLearningTasksByTopicIdMutation.mutateAsync({
      ...values,
      timeLimit: +values.timeLimit,
      experienceAmount: +values.experienceAmount
    })
    onSubmitted(values.name)
  })

  return {
    state: {
      isLoading: postLearningTasksByTopicIdMutation.isPending || createTaskForm.formState.isSubmitting
    },
    form: createTaskForm,
    functions: { onSubmit }
  }
}
