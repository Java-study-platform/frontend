import { useGetLearningChatsByIdQuery } from '@/utils/api'
import React from 'react'
import { useChatMessagesContext } from '../contexts'

interface UseTopicChatParams {
  chatId: string
}

export const useTopicChat = ({ chatId }: UseTopicChatParams) => {
  const [newMessage, setNewMessage] = React.useState('')
  const chatMessagesContext = useChatMessagesContext()
  const getLearningChatsByIdQuery = useGetLearningChatsByIdQuery({ id: chatId })

  const onSendMessageClick = () => {
    chatMessagesContext.sendMessage(newMessage)
  }

  const onLikeClick = (messageId: string) => {
    chatMessagesContext.sendLike(messageId)
  }

  const onDislikeClick = (messageId: string) => {
    chatMessagesContext.sendDislike(messageId)
  }

  return {
    state: {
      chat: getLearningChatsByIdQuery.data?.data.data,
      loading: getLearningChatsByIdQuery.isLoading,
      newMessage
    },
    functions: {
      setNewMessage,
      onSendMessageClick,
      onLikeClick,
      onDislikeClick
    }
  }
}
