import { TopicDTO } from '@/generated/core-api'
import { I18nText } from '@/components/common'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Typography
} from '@/components/ui'
import { useDeleteTopicDialog } from './hooks/useDeleteTopicDialog'

interface DeleteTopicDialogProps {
  topic: TopicDTO
  trigger: JSX.Element
}

export const DeleteTopicDialog = ({ topic, trigger }: DeleteTopicDialogProps) => {
  const { functions, state } = useDeleteTopicDialog({ topic })

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-screen w-[90%] overflow-y-scroll md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.deleteTopic.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        {topic.name && (
          <DialogDescription>
            <Typography>
              <I18nText path="dialog.deleteTopic.description" values={{ name: topic.name }} />
            </Typography>
          </DialogDescription>
        )}
        <DialogFooter>
          <Button loading={state.loading} variant="ghost" onClick={() => functions.setOpen(false)}>
            <I18nText path="button.cancel" />
          </Button>
          <Button loading={state.loading} variant="destructive" onClick={functions.onConfirmDeleteClick}>
            <I18nText path="button.confirmDelete" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
