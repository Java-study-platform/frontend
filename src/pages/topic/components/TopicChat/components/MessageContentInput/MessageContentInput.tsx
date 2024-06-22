import { CheckIcon, XIcon } from 'lucide-react'
import { I18nText } from '@/components/common'
import { Button, Input, InputProps, Typography } from '@/components/ui'
import { useMessageContentInput } from './hooks/useMessageContentInput'

interface MessageContentInputProps extends InputProps {
  messageId: string
  content?: string
  isUserOwner: boolean
}

export const MessageContentInput = ({ content, messageId, ...props }: MessageContentInputProps) => {
  const { state, functions } = useMessageContentInput({ defaultContent: content, messageId })

  return (
    <div>
      <div className="flex items-center gap-2">
        <Typography tag="p" variant="body2">
          {content}
        </Typography>
        {/* {(!isUserOwner || !state.editingMode) && (

        )} */}
        {/* {isUserOwner && state.editingMode && (
          <Input
            className="h-[50px] text-lg disabled:text-primary"
            {...props}
            disabled={!isUserOwner || !state.editingMode}
            value={state.content}
            onChange={(event) => functions.setContent(event.target.value)}
          />
        )}
        {isUserOwner && state.editingMode && (
          <div className="flex gap-1">
            <Button size="icon" onClick={functions.onConfirmClick}>
              <CheckIcon className="h-4 w-4" />
            </Button>
            <Button size="icon" onClick={functions.onCancelClick}>
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
        )} */}
      </div>
      {/* {isUserOwner && (
        <Button
          variant="link"
          className="cursor-pointer underline"
          onClick={() => functions.setEditingMode(true)}
        >
          <I18nText path="button.editMessage" />
        </Button>
      )} */}
      {!state.replyMode && (
        <Button
          variant="link"
          className="cursor-pointer underline"
          onClick={() => functions.setReplyMode(true)}
        >
          <I18nText path="button.reply" />
        </Button>
      )}
      {state.replyMode && state.replyMode && (
        <div className="mt-5 flex items-center gap-1">
          <Typography tag="p" variant="body2">
            <I18nText path="topic.chat.reply" />:
          </Typography>
          <Input
            className="h-[50px] text-lg disabled:text-primary"
            {...props}
            value={state.replyContent}
            onChange={(event) => functions.setReplyContent(event.target.value)}
          />
          <div className="flex gap-1">
            <Button size="icon" onClick={functions.onCancelReplyClick}>
              <CheckIcon className="h-4 w-4" />
            </Button>
            <Button size="icon" onClick={functions.onCancelReplyClick}>
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
