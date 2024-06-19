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

  const onLikeClick = (messageId: string, currentUserReactions: ('LIKE' | 'DISLIKE')[]) => {
    chatMessagesContext.sendReaction(messageId, 'LIKE', currentUserReactions)
  }

  const onDislikeClick = (messageId: string, currentUserReactions: ('LIKE' | 'DISLIKE')[]) => {
    chatMessagesContext.sendReaction(messageId, 'DISLIKE', currentUserReactions)
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
