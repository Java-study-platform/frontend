import { useGetSolutionByTaskIdQuery } from '@/utils/api'
import React from 'react'

interface UseUserSolutionsSectionParams {
  taskId: string
}

export const useUserSolutionsSection = ({ taskId }: UseUserSolutionsSectionParams) => {
  const getSolutionByTaskIdQuery = useGetSolutionByTaskIdQuery({ taskId })

  const [selectedSolutionId, setSelectedSolutionId] = React.useState<string | undefined>()

  return {
    state: {
      selectedSolutionId,
      solutions: getSolutionByTaskIdQuery.data?.data.data,
      loading: getSolutionByTaskIdQuery.isLoading
    },
    functions: {
      setSelectedSolutionId
    }
  }
}