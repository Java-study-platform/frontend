import { TaskDTO } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePutLearningCategoriesByIdMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { EditTaskSchema, editTaskSchema } from '../constants/editTaskSchema'

interface useEditTaskFormParams {
  task: TaskDTO
  onSubmitted: (name: string) => void
}

export const useEditTaskForm = ({ task, onSubmitted }: useEditTaskFormParams) => {
  const editTaskForm = useForm<EditTaskSchema>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: {
      name: task.name ?? '',
      description: task.description ?? '',
      experienceAmount: task.experienceAmount ? String(task.experienceAmount) : '',
      topicId: task.topicId
    }
  })

  const putLearningCategoriesByIdMutation = usePutLearningCategoriesByIdMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            editTaskForm.setError(errorKey as keyof EditTaskSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = editTaskForm.handleSubmit(async (values) => {
    await putLearningCategoriesByIdMutation.mutateAsync({ ...values, id: task.id! })
    onSubmitted(values.name)
  })

  return {
    state: {
      isLoading: putLearningCategoriesByIdMutation.isPending || editTaskForm.formState.isSubmitting
    },
    form: editTaskForm,
    functions: { onSubmit }
  }
}
