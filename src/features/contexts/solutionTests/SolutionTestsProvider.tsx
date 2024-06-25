import {
  DefaultResponseListSolutionDto,
  DefaultResponseListTestDto,
  SolutionDto,
  TestDto
} from '@/generated/solution-api'
import { useStomp } from '@/utils/hooks'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { SolutionTestsContext } from './SolutionTestsContext'

interface SolutionTestsProviderProps {
  children: React.ReactNode
  defaultSolutionId: string
  taskId: string
}

export const solutionTestsQueryKey = (solutionId: string) => ['getSolutionTests', solutionId]
export const solutionsQueryKey = (taskId: string) => ['getSolutionByTaskId', taskId]

export const SolutionTestsProvider = ({
  taskId,
  defaultSolutionId,
  children
}: SolutionTestsProviderProps) => {
  const [solutionId, setSolutionId] = React.useState(defaultSolutionId)

  const stomp = useStomp()

  const queryClient = useQueryClient()

  React.useEffect(() => {
    if (!stomp.isConnected) return () => {}

    stomp.subscribe<TestDto>(`/solution/${solutionId}/test`, (messageData) => {
      queryClient.setQueryData<{ data: DefaultResponseListTestDto }>(
        solutionTestsQueryKey(solutionId),
        (oldData) => {
          const prevTestsArray = oldData?.data.data ?? []
          if (prevTestsArray.find((test) => test.id === messageData.id)) {
            return {
              ...oldData,
              data: {
                ...oldData?.data,
                data: prevTestsArray.map((test) =>
                  test.id === messageData.id ? { ...test, ...messageData } : test
                )
              }
            }
          }

          return {
            ...oldData,
            data: { ...oldData?.data, data: [...prevTestsArray, messageData] }
          }
        }
      )
    })

    stomp.subscribe<SolutionDto>(`/solution/${solutionId}`, (messageData) => {
      queryClient.setQueryData<{ data: DefaultResponseListSolutionDto }>(
        solutionsQueryKey(taskId),
        (oldData) => {
          const prevSolutions = oldData?.data.data ?? []

          return {
            ...oldData,
            data: {
              ...oldData?.data,
              data: prevSolutions.map((solution) =>
                solution.id === messageData.id ? { ...solution, ...messageData } : solution
              )
            }
          }
        }
      )
    })

    return () => {
      stomp.unsubscribe(`/solution/${solutionId}`)
      stomp.unsubscribe(`/solution/${solutionId}/test`)
    }
  }, [stomp.isConnected, solutionId, taskId])

  const value = React.useMemo(() => ({ solutionId, setSolutionId }), [solutionId, setSolutionId])

  return <SolutionTestsContext.Provider value={value}>{children}</SolutionTestsContext.Provider>
}
