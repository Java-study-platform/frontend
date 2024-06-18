import { DefaultResponseListMessageDTO } from '@/generated/core-api'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { ChatMessagesContext } from './ChatMessagesContext'

const SOCKET_URL = import.meta.env.VITE_WEB_SOCKET_URL

const MESSAGE_TYPE = {
  INITIAL_DATA: 'INITIAL_DATA',
  SEND_MESSAGE: 'SEND_MESSAGE',
  SEND_LIKE: 'SEND_LIKE',
  SEND_DISLIKE: 'SEND_DISLIKE',
  SEND_EDIT_MESSAGE: 'SEND_EDIT_MESSAGE',
  SEND_DELETE_MESSAGE: 'SEND_DELETE_MESSAGE',
  NEW_MESSAGE: 'NEW_MESSAGE'
}

export const chatQueryKey = (chatId: string) => ['getLearningChatsById', chatId]

interface ChatMessagesProviderProps {
  children: React.ReactNode
  chatId: string
}

export const ChatMessagesProvider = ({ children, chatId }: ChatMessagesProviderProps) => {
  const webSocket = useWebSocket(SOCKET_URL)

  const queryClient = useQueryClient()
  const canSendMessages = webSocket.readyState === ReadyState.OPEN

  React.useEffect(() => {
    if (webSocket.lastMessage && webSocket.lastMessage.data) {
      const { type, payload } = JSON.parse(webSocket.lastMessage.data)

      if (type === MESSAGE_TYPE.INITIAL_DATA) {
        queryClient.setQueryData(chatQueryKey(chatId), () => payload)
      } else if (type === MESSAGE_TYPE.NEW_MESSAGE && payload.data.eventType === 'NEW') {
        queryClient.setQueryData<DefaultResponseListMessageDTO>(chatQueryKey(chatId), (oldData) => ({
          data: [payload.data, ...(oldData?.data ?? [])]
        }))
      }
    }
  }, [webSocket.lastMessage])

  const sendMessage = React.useCallback(
    (content: string) => {
      if (canSendMessages) {
        webSocket.sendMessage(
          JSON.stringify({
            type: MESSAGE_TYPE.SEND_MESSAGE,
            content
          })
        )
      }
    },
    [canSendMessages]
  )

  const sendLike = React.useCallback(() => {
    if (canSendMessages) {
      webSocket.sendMessage(
        JSON.stringify({
          type: MESSAGE_TYPE.SEND_LIKE
        })
      )
    }
  }, [canSendMessages])

  const sendDislike = React.useCallback(() => {
    if (canSendMessages) {
      webSocket.sendMessage(
        JSON.stringify({
          type: MESSAGE_TYPE.SEND_DISLIKE
        })
      )
    }
  }, [canSendMessages])

  const sendEditMessage = React.useCallback(() => {
    if (canSendMessages) {
      webSocket.sendMessage(
        JSON.stringify({
          type: MESSAGE_TYPE.SEND_EDIT_MESSAGE
        })
      )
    }
  }, [canSendMessages])

  const sendDeleteMessage = React.useCallback(() => {
    if (canSendMessages) {
      webSocket.sendMessage(
        JSON.stringify({
          type: MESSAGE_TYPE.SEND_DELETE_MESSAGE
        })
      )
    }
  }, [canSendMessages])

  const value = React.useMemo(
    () => ({ sendMessage, sendLike, sendDislike, sendEditMessage, sendDeleteMessage }),
    [canSendMessages]
  )

  return <ChatMessagesContext.Provider value={value}>{children}</ChatMessagesContext.Provider>
}
