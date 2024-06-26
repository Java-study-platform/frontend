import { TopicDTO } from '@/generated/core-api'
import { I18nText } from '@/components/common'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Typography
} from '@/components/ui'
import { EditTopicForm } from './components/EditTopicForm/EditTopicForm'
import { useEditTopicDialog } from './hooks/useEditTopicDialog'

interface EditTopicDialogProps {
  topic: TopicDTO
  trigger: JSX.Element
}

export const EditTopicDialog = ({ topic, trigger }: EditTopicDialogProps) => {
  const { functions, state } = useEditTopicDialog({ topicId: topic.id })

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-screen w-[90%] overflow-y-scroll md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.editTopic.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <EditTopicForm topic={topic} onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
