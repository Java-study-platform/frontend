import { TaskDTO } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePutLearningTasksByIdMutation } from '@/utils/api/hooks'
import { useI18n } from '@/utils/contexts'
import {
  deserializeEditorValue,
  getDocumentBodyFromHTMLString,
  serializeEditorValue
} from '@/utils/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { Value } from '@udecode/plate-common'
import { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { EditTaskSchema, editTaskSchema } from '../constants/editTaskSchema'

interface useEditTaskFormParams {
  task: TaskDTO
  onSubmitted: (name: string) => void
}

export const useEditTaskForm = ({ task, onSubmitted }: useEditTaskFormParams) => {
  const i18n = useI18n()
  const [description, setDescription] = React.useState<Value>(
    deserializeEditorValue(getDocumentBodyFromHTMLString(task.description ?? ''))
  )

  const editTaskForm = useForm<EditTaskSchema>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: {
      name: task.name ?? '',
      description: '',
      experienceAmount: task.experienceAmount ? String(task.experienceAmount) : '',
      timeLimit: task.timeLimit ? String(task.timeLimit) : ''
    }
  })

  const putLearningTasksByIdMutation = usePutLearningTasksByIdMutation({
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
    if (!description) {
      toast.error(i18n.formatMessage({ id: 'toast.descriptionRequired' }))
      return
    }

    await putLearningTasksByIdMutation.mutateAsync({
      ...values,
      description: serializeEditorValue(values.description),
      experienceAmount: +values.experienceAmount,
      timeLimit: +values.timeLimit,
      id: task.id
    })
    onSubmitted(values.name)
  })

  return {
    state: {
      description,
      isLoading: putLearningTasksByIdMutation.isPending || editTaskForm.formState.isSubmitting
    },
    form: editTaskForm,
    functions: { onSubmit, setDescription }
  }
}
