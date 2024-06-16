import React from 'react'
import { ChatMessagesContext } from './ChatMessagesContext'

export const useChatMessagesContext = () => React.useContext(ChatMessagesContext)
