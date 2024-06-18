import { useGetSolutionTaskByTaskIdQuery } from '@/utils/api'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useDebounceCallback } from 'usehooks-ts'

const SEARCH_DELAY = 200

export const useSolutionsSection = () => {
  const params = useParams<{ id: string }>()
  const [username, setUsername] = React.useState<string>('')
  const debouncedSetUsername = useDebounceCallback(setUsername, SEARCH_DELAY)

  const [selectedSolution, setSelectedSolution] = React.useState<string | undefined>()

  const getSolutionTaskByTaskIdQuery = useGetSolutionTaskByTaskIdQuery(
    {
      taskId: params.id!,
      username: username
    },
    { options: { enabled: username.length > 3 } }
  )

  return {
    state: {
      taskId: params.id!,
      selectedSolution,
      username,
      loading: getSolutionTaskByTaskIdQuery.isLoading,
      solutions: getSolutionTaskByTaskIdQuery.data?.data.data
    },
    functions: { setSelectedSolution, setUsername: debouncedSetUsername }
  }
}
