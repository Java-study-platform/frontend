import { DefaultResponseListMessageDTO, MessageDTO } from '@/generated/core-api'
import { useStomp } from '@/utils/hooks'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { ChatMessagesContext } from './ChatMessagesContext'

export const chatQueryKey = (chatId: string) => ['getLearningChatsById', chatId]

interface ChatMessagesProviderProps {
  children: React.ReactNode
  chatId: string
}

export const ChatMessagesProvider = ({ children, chatId }: ChatMessagesProviderProps) => {
  const queryClient = useQueryClient()
  const stomp = useStomp()

  React.useEffect(() => {
    if (!stomp.isConnected) return () => {}

    stomp.subscribe<MessageDTO>(`/topic/chats/${chatId}`, (messageData) => {
      if (messageData.eventType === 'UPDATE') {
        queryClient.setQueryData<{ data: DefaultResponseListMessageDTO }>(
          chatQueryKey(chatId),
          (oldData) => {
            const prevMessagesArray = oldData?.data.data ?? []

            if (!!messageData.parentMessageId) {
              return {
                ...oldData,
                data: {
                  ...oldData?.data,
                  data: prevMessagesArray.map((message) => {
                    const isParentMessage = message.id === messageData.parentMessageId

                    if (isParentMessage) {
                      return {
                        ...message,
                        replies: message?.replies?.map((reply) =>
                          reply.id === messageData.id ? { ...reply, ...messageData } : reply
                        )
                      }
                    }

                    return message
                  })
                }
              }
            }

            return {
              ...oldData,
              data: {
                ...oldData?.data,
                data: prevMessagesArray.map((message) =>
                  message.id === messageData.id ? { ...message, ...messageData } : message
                )
              }
            }
          }
        )
        return
      }

      queryClient.setQueryData<{ data: DefaultResponseListMessageDTO }>(
        chatQueryKey(chatId),
        (oldData) => {
          const prevMessagesArray = oldData?.data.data ?? []
          if (!messageData.parentMessageId) {
            return {
              ...oldData,
              data: {
                ...oldData?.data,
                data: [...prevMessagesArray, messageData]
              }
            }
          }

          return {
            ...oldData,
            data: {
              ...oldData?.data,
              data: prevMessagesArray.map((message) => {
                const isParentMessage = message.id === messageData.parentMessageId
                if (!isParentMessage) return message

                const prevMessageReplies = message?.replies ?? []
                return { ...message, replies: [...prevMessageReplies, messageData] }
              })
            }
          }
        }
      )
    })

    return () => {
      stomp.unsubscribe(`/topic/chats/${chatId}`)
    }
  }, [stomp.isConnected])

  const sendMessage = React.useCallback(
    (content: string, parentMessageId?: string) => {
      if (stomp.isConnected) {
        stomp.send(`/app/chat/${chatId}`, {
          content,
          parentMessageId
        })
      }
    },
    [stomp.isConnected]
  )

  const sendReaction = React.useCallback(
    (
      messageId: string,
      reactionType: 'LIKE' | 'DISLIKE',
      currentUserReactions: ('LIKE' | 'DISLIKE')[]
    ) => {
      if (stomp.isConnected) {
        if (currentUserReactions.includes(reactionType)) {
          stomp.send(`/app/chat/${chatId}/unreact`, {
            messageId,
            reactionType
          })
          return
        }

        stomp.send(`/app/chat/${chatId}/react`, {
          messageId,
          reactionType
        })
      }
    },
    [stomp.isConnected]
  )

  const value = React.useMemo(() => ({ sendMessage, sendReaction }), [stomp.isConnected])

  return <ChatMessagesContext.Provider value={value}>{children}</ChatMessagesContext.Provider>
}
