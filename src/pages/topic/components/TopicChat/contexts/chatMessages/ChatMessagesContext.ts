import React from 'react'

interface ChatMessagesContext {
  sendMessage: (content: string, parentMessageId?: string) => void
  sendReaction: (
    messageId: string,
    reactionType: 'LIKE' | 'DISLIKE',
    currentUserReactions: ('LIKE' | 'DISLIKE')[]
  ) => void
}

export const ChatMessagesContext = React.createContext<ChatMessagesContext>({
  sendMessage: () => {},
  sendReaction: () => {}
})
