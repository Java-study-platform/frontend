import React from 'react'
import { useChatMessagesContext } from '../../../contexts'

interface UseMessageContentInputParams {
  defaultContent?: string
  messageId: string
}

export const useMessageContentInput = ({
  defaultContent = '',
  messageId
}: UseMessageContentInputParams) => {
  const chatMessagesContext = useChatMessagesContext()
  const [content, setContent] = React.useState(defaultContent)
  const [editingMode, setEditingMode] = React.useState(false)

  const onCancelClick = () => {
    setContent(defaultContent)
    setEditingMode(false)
  }

  const onConfirmClick = () => {
    if (content.length) {
      setEditingMode(false)
      chatMessagesContext.sendEditMessage(messageId, content)
    }
  }

  return {
    state: { content, editingMode },
    functions: { setContent, setEditingMode, onCancelClick, onConfirmClick }
  }
}
