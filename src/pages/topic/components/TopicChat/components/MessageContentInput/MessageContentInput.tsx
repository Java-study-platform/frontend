import { CheckIcon, XIcon } from 'lucide-react'
import { I18nText } from '@/components/common'
import { Button, Input, InputProps, Typography } from '@/components/ui'
import { useMessageContentInput } from './hooks/useMessageContentInput'

interface MessageContentInputProps extends InputProps {
  messageId: string
  content?: string
  isUserOwner: boolean
}

export const MessageContentInput = ({
  content,
  isUserOwner,
  messageId,
  ...props
}: MessageContentInputProps) => {
  const { state, functions } = useMessageContentInput({ defaultContent: content, messageId })

  return (
    <div>
      <div className="flex items-center gap-2">
        {!isUserOwner && (
          <Typography tag="p" variant="body2">
            {content}
          </Typography>
        )}
        {isUserOwner && (
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
        )}
      </div>
      {isUserOwner && (
        <Button
          variant="link"
          className="cursor-pointer underline"
          onClick={() => functions.setEditingMode(true)}
        >
          <I18nText path="button.editMessage" />
        </Button>
      )}
    </div>
  )
}
