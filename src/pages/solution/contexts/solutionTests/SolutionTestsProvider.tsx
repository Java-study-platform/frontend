import {
  DefaultResponseListTestDto,
  DefaultResponseSolutionDto,
  TestDto
} from '@/generated/solution-api'
import { useUserContext } from '@/utils/contexts'
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
  const userContext = useUserContext()
  const [solutionId, setSolutionId] = React.useState(defaultSolutionId)

  const stomp = useStomp()

  const queryClient = useQueryClient()

  React.useEffect(() => {
    if (!stomp.isConnected) return () => {}

    stomp.subscribe<TestDto>(
      `/user/${userContext.user?.login}/solution/${solutionId}/test`,
      (messageData) => {
        queryClient.setQueryData<DefaultResponseListTestDto>(
          solutionTestsQueryKey(solutionId),
          (prevTests) => ({
            data: [...(prevTests?.data ?? []), messageData]
          })
        )
      }
    )

    stomp.subscribe<TestDto>(
      `/user/${userContext.user?.login}/solution/${solutionId}`,
      (messageData) => {
        queryClient.setQueryData<DefaultResponseSolutionDto>(solutionQueryKey(solutionId), () => ({
          data: messageData
        }))
      }
    )

    return () => {
      stomp.unsubscribe(`/user/${userContext.user?.login}/solution/${solutionId}`)
      stomp.unsubscribe(`/user/${userContext.user?.login}/solution/${solutionId}/test`)
    }
  }, [stomp.isConnected])

  const value = React.useMemo(() => ({ solutionId, setSolutionId }), [solutionId, setSolutionId])

  return <SolutionTestsContext.Provider value={value}>{children}</SolutionTestsContext.Provider>
}
