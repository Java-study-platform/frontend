import React from 'react'

interface ChatMessagesContext {
  sendMessage: (content: string, parentMessageId?: string) => void
  sendEditMessage: (messageId: string, content: string) => void
  sendLike: (messageId: string) => void
  sendDislike: (messageId: string) => void
  sendDeleteMessage: (messageId: string) => void
}

export const ChatMessagesContext = React.createContext<ChatMessagesContext>({
  sendMessage: () => {},
  sendEditMessage: () => {},
  sendLike: () => {},
  sendDislike: () => {},
  sendDeleteMessage: () => {}
})
