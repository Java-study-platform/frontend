import { ROUTES } from '@/utils/constants'
import { useI18n, useUserContext } from '@/utils/contexts'
import { ReloadIcon } from '@radix-ui/react-icons'
import { LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { I18nText } from '@/components/common'
import { Button, RichTextEditor, ScrollArea, Typography } from '@/components/ui'
import { CreateTaskDialog } from './components/CreateTaskDialog/CreateTaskDialog'
import { EditTopicDialog } from './components/EditTopicDialog/EditTopicDialog'
import { TopicChat } from './components/TopicChat/TopicChat'
import { useTopicPage } from './hooks/useTopicPage'

export const TopicPage = () => {
  const i18n = useI18n()
  const userContext = useUserContext()
  const { state } = useTopicPage()

  return (
    <div className="flex h-screen">
      <div className="container max-w-[750px] mdx:mx-auto mdx:max-w-[300px]">
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {state.topic && (
          <div>
            <Typography tag="h1" variant="h1">
              <I18nText path="topic.title" values={{ name: state.topic.name }} />
            </Typography>
            {userContext.user?.isAdmin && (
              <div className="mt-5 flex items-center gap-2">
                <EditTopicDialog
                  topic={state.topic}
                  trigger={
                    <Button variant="secondary">{i18n.formatMessage({ id: 'button.edit' })}</Button>
                  }
                />
                <CreateTaskDialog
                  topic={state.topic}
                  trigger={
                    <Button className="">{i18n.formatMessage({ id: 'button.createTopicTask' })}</Button>
                  }
                />
              </div>
            )}
            {state.topic.tasks?.length && (
              <div className="mt-5 ">
                <Typography tag="h2" variant="h2">
                  <I18nText path="topic.tasks" />
                </Typography>

                <ScrollArea className="mt-5 max-h-[500px] ">
                  <div className="flex flex-col gap-2">
                    {state.topic.tasks?.map((task) => (
                      <Link
                        key={task.id!}
                        to={ROUTES.TASK(task.id!)}
                        className="flex items-center gap-2 text-sm underline"
                      >
                        <LinkIcon className="h-3 w-3" />
                        {task.name}
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            )}
            {/* // TODO desearialize */}
            {state.topic.material && (
              <div className="mt-5">
                <RichTextEditor
                  value={[{ type: 'p', children: [{ text: state.topic.material ?? '' }] }]}
                  readOnly
                />
              </div>
            )}
            {state.topic.chatId && <TopicChat />}
          </div>
        )}
      </div>
    </div>
  )
}
