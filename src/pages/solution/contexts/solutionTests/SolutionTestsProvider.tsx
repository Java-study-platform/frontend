import { DefaultResponseListTestDto } from '@/generated/solution-api'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import useWebSocket from 'react-use-websocket'
import { SolutionTestsContext } from './SolutionTestsContext'

interface SolutionTestsProviderProps {
  children: React.ReactNode
  defaultSolutionId: string
}

const SOCKET_URL = import.meta.env.VITE_WEB_SOCKET_URL

const MESSAGE_TYPE = {
  INITIAL_DATA: 'INITIAL_DATA',
  NEW_TEST: 'NEW_TEST'
}

export const solutionTestsQueryKey = (solutionId?: string) => ['getSolutionTests', solutionId]

export const SolutionTestsProvider = ({ defaultSolutionId, children }: SolutionTestsProviderProps) => {
  const [solutionId, setSolutionId] = React.useState(defaultSolutionId)

  const webSocket = useWebSocket(SOCKET_URL)

  const queryClient = useQueryClient()
  // const canSendMessages = webSocket.readyState === ReadyState.OPEN

  React.useEffect(() => {
    if (webSocket.lastMessage && webSocket.lastMessage.data) {
      const { type, payload } = JSON.parse(webSocket.lastMessage.data)

      if (type === MESSAGE_TYPE.INITIAL_DATA) {
        queryClient.setQueryData(solutionTestsQueryKey(solutionId), () => payload)
      } else if (type === MESSAGE_TYPE.NEW_TEST) {
        queryClient.setQueryData<DefaultResponseListTestDto>(
          solutionTestsQueryKey(solutionId),
          (oldData) => ({
            data: [payload.data, ...(oldData?.data ?? [])]
          })
        )
      }
    }
  }, [webSocket.lastMessage])

  React.useEffect(() => {
    console.log('#solutionId', solutionId)
  }, [solutionId])

  const value = React.useMemo(() => ({ solutionId, setSolutionId }), [solutionId, setSolutionId])

  return <SolutionTestsContext.Provider value={value}>{children}</SolutionTestsContext.Provider>
}
