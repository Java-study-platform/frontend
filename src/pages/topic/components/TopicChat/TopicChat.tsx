import { useI18n, useUserContext } from '@/utils/contexts'
import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { Button, Input, Typography } from '@/components/ui'
import { MessageCard } from './components/MessageCard/MessageCard'
import { useTopicChat } from './hooks/useTopicChat'

interface TopicChatProps {
  chatId: string
}

export const TopicChat = ({ chatId }: TopicChatProps) => {
  const i18n = useI18n()
  const userContext = useUserContext()
  const { state, functions } = useTopicChat({ chatId })

  return (
    <div className="mt-10">
      <Typography tag="h2" variant="h2">
        <I18nText path="topic.chat.title" />
      </Typography>
      <Input
        className="mt-5 w-full"
        value={state.newMessage}
        onChange={(event) => functions.setNewMessage(event.target.value)}
        placeholder={i18n.formatMessage({ id: 'field.newMessage.placeholder' })}
      />
      <Button loading={state.loading} onClick={functions.onSendMessageClick} className="mt-5">
        <I18nText path="button.send" />
      </Button>
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      {state.chat && (
        <div className="mt-5 flex flex-col gap-5">
          {state.chat.map((message) => (
            <MessageCard
              key={message.id}
              message={message}
              likesCount={message.reactions?.LIKE ?? 0}
              dislikesCount={message.reactions?.DISLIKE ?? 0}
              hasUserLike={message.currentUserReactions?.includes('LIKE') ?? false}
              hasUserDislike={message.currentUserReactions?.includes('DISLIKE') ?? false}
              isUserOwner={message.senderLogin === userContext.user?.login}
              onLikeClick={functions.onLikeClick}
              onDislikeClick={functions.onDislikeClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}