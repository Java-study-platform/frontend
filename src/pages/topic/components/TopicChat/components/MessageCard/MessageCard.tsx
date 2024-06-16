import { MessageDTO } from '@/generated/core-api'
import * as fns from 'date-fns'
import { CircleUserRoundIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import { Button, Typography } from '@/components/ui'
import { MessageContentInput } from '../MessageContentInput/MessageContentInput'

interface MessageCardProps {
  message: MessageDTO
  isUserOwner: boolean
  hasUserLike: boolean
  hasUserDislike: boolean
  likesCount: number
  dislikesCount: number
  onLikeClick: (messageId: string) => void
  onDislikeClick: (messageId: string) => void
}

export const MessageCard = ({
  message,
  likesCount,
  dislikesCount,
  hasUserDislike,
  hasUserLike,
  isUserOwner,
  onLikeClick,
  onDislikeClick
}: MessageCardProps) => (
  <div className="flex items-start gap-2">
    <div className="grid items-start gap-1 text-sm">
      <div className="flex items-center gap-2">
        <CircleUserRoundIcon className="h-6 w-6 fill-purple-300" />
        <Typography tag="p" variant="large">
          {message.senderLogin}
        </Typography>
        {message.sentAt && (
          <Typography tag="p" variant="sub1">
            {!fns.isToday(message.sentAt) && fns.format(message.sentAt, 'dd.MM.yyyy ')}
            {fns.format(message.sentAt, 'HH:mm')}
          </Typography>
        )}
      </div>
      <div>
        <MessageContentInput
          content={message.content}
          isUserOwner={isUserOwner}
          messageId={message.id!}
        />
      </div>
      <div className="mt-1 flex items-center gap-2">
        <Button
          variant={hasUserLike ? 'secondary' : 'ghost'}
          disabled={hasUserDislike}
          onClick={() => {
            if (!hasUserLike) onLikeClick(message.id!)
          }}
          className="p-2"
        >
          <ThumbsUpIcon className="mr-1 h-4 w-4" />
          {likesCount}
        </Button>
        <Button
          variant={hasUserDislike ? 'secondary' : 'ghost'}
          disabled={hasUserLike}
          onClick={() => {
            if (!hasUserDislike) onDislikeClick(message.id!)
          }}
          className="p-2"
        >
          <ThumbsDownIcon className="mr-1 h-4 w-4" />
          {dislikesCount}
        </Button>
      </div>
    </div>
  </div>
)