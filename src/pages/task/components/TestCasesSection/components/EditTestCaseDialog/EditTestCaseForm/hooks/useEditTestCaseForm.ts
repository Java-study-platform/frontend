import { TestCaseDto } from '@/generated/core-api'
import { DefaultResponseObject } from '@/generated/user-api'
import { usePutLearningTestMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { EditTestCaseSchema, editTestCaseSchema } from '../constants/editTestCaseSchema'

interface useEditTestCaseFormParams {
  testCase: TestCaseDto
  onSubmitted: () => void
}

export const useEditTestCaseForm = ({ testCase, onSubmitted }: useEditTestCaseFormParams) => {
  const editTaskForm = useForm<EditTestCaseSchema>({
    resolver: zodResolver(editTestCaseSchema),
    defaultValues: {
      expectedInput: testCase.expectedInput ?? '',
      expectedOutput: testCase.expectedOutput ?? ''
    }
  })

  const putLearningTestMutation = usePutLearningTestMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            editTaskForm.setError(errorKey as keyof EditTestCaseSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = editTaskForm.handleSubmit(async (values) => {
    await putLearningTestMutation.mutateAsync({
      ...values,
      testId: testCase.id
    })
    onSubmitted()
  })

  return {
    state: {
      isLoading: putLearningTestMutation.isPending || editTaskForm.formState.isSubmitting
    },
    form: editTaskForm,
    functions: { onSubmit }
  }
}
