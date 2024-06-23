import { useDeleteLearningTestMutation, useGetLearningTestsByTaskIdQuery } from '@/utils/api'
import { useI18n } from '@/utils/contexts'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

export const useTestCasesSection = () => {
  const i18n = useI18n()
  const params = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const getLearningTestsByTaskIdQuery = useGetLearningTestsByTaskIdQuery({ taskId: params.id! })
  const deleteLearningTestMutation = useDeleteLearningTestMutation()

  const onDeleteTestCaseClick = async (id: string) => {
    await deleteLearningTestMutation.mutateAsync({ testId: id })
    queryClient.invalidateQueries({ queryKey: ['getLearningTestsByTaskId', params.id] })
    toast.success(i18n.formatMessage({ id: 'toast.testCaseDeleted' }))
  }

  return {
    state: {
      taskId: params.id!,
      loading: getLearningTestsByTaskIdQuery.isLoading,
      testCases: getLearningTestsByTaskIdQuery.data?.data
    },
    functions: { onDeleteTestCaseClick }
  }
}
