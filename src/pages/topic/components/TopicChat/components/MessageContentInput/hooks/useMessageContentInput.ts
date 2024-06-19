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
  const [replyMode, setReplyMode] = React.useState(false)
  const [replyContent, setReplyContent] = React.useState('')

  const onCancelClick = () => {
    setContent(defaultContent)
    setEditingMode(false)
  }

  const onCancelReplyClick = () => {
    setReplyContent('')
    setReplyMode(false)
  }

  const onConfirmReplyClick = () => {
    if (replyContent.length) {
      setReplyMode(false)
      chatMessagesContext.sendMessage(replyContent, messageId)
    }
  }

  return {
    state: { content, editingMode, replyMode, replyContent },
    functions: {
      setContent,
      setEditingMode,
      onCancelClick,
      setReplyMode,
      onCancelReplyClick,
      onConfirmReplyClick,
      setReplyContent
    }
  }
}
