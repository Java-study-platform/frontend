import {
  DefaultResponseListTestDto,
  DefaultResponseSolutionDto,
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
}

export const solutionTestsQueryKey = (solutionId: string) => ['getSolutionTests', solutionId]
export const solutionQueryKey = (solutionId: string) => ['getSolution', solutionId]

export const SolutionTestsProvider = ({ defaultSolutionId, children }: SolutionTestsProviderProps) => {
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
                data: prevTestsArray.map((test) =>
                  test.id === messageData.id ? { ...test, ...messageData } : test
                )
              }
            }
          }

          return {
            ...oldData,
            data: { data: [...prevTestsArray, messageData] }
          }
        }
      )
    })

    stomp.subscribe<SolutionDto>(`/solution/${solutionId}`, (messageData) => {
      queryClient.setQueryData<{ data: DefaultResponseSolutionDto }>(
        solutionQueryKey(solutionId),
        (oldData) => ({
          ...oldData,
          data: { data: messageData }
        })
      )
    })

    return () => {
      stomp.unsubscribe(`/solution/${solutionId}`)
      stomp.unsubscribe(`/solution/${solutionId}/test`)
    }
  }, [stomp.isConnected, solutionId])

  const value = React.useMemo(() => ({ solutionId, setSolutionId }), [solutionId, setSolutionId])

  return <SolutionTestsContext.Provider value={value}>{children}</SolutionTestsContext.Provider>
}
