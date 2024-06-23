import { DefaultResponseObject } from '@/generated/user-api'
import { usePostLearningTestsByTaskIdMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { CreateTestCaseSchema, createTestCaseSchema } from '../constants/createTestCaseSchema'

interface useCreateTestCaseFormParams {
  onSubmitted: () => void
}

export const useCreateTestCaseForm = ({ onSubmitted }: useCreateTestCaseFormParams) => {
  const params = useParams<{ id: string }>()
  const createTestCaseForm = useForm<CreateTestCaseSchema>({
    resolver: zodResolver(createTestCaseSchema),
    defaultValues: {
      expectedInput: '',
      expectedOutput: ''
    }
  })

  const postLearningTestsByTaskIdMutation = usePostLearningTestsByTaskIdMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            createTestCaseForm.setError(errorKey as keyof CreateTestCaseSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = createTestCaseForm.handleSubmit(async (values) => {
    await postLearningTestsByTaskIdMutation.mutateAsync({ ...values, taskId: params.id! })
    onSubmitted()
  })

  return {
    state: {
      isLoading: postLearningTestsByTaskIdMutation.isPending || createTestCaseForm.formState.isSubmitting
    },
    form: createTestCaseForm,
    functions: { onSubmit }
  }
}
