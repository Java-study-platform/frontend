import { TaskDTO } from '@/generated/core-api'
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
import { useDeleteTaskDialog } from './hooks/useDeleteTaskDialog'

interface DeleteCategoryDialogProps {
  task: TaskDTO
  trigger: JSX.Element
}

export const DeleteTaskDialog = ({ task, trigger }: DeleteCategoryDialogProps) => {
  const { functions, state } = useDeleteTaskDialog({ task })

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.deleteTask.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        {task.name && (
          <DialogDescription>
            <Typography>
              <I18nText path="dialog.deleteTask.description" values={{ name: task.name }} />
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
