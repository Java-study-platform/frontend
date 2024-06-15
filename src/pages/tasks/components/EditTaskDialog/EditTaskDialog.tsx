import { TaskDTO } from '@/generated/core-api'
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
import { EditTaskForm } from './components/EditTaskForm/EditTaskForm'
import { useEditTaskDialog } from './hooks/useEditTaskDialog'

interface EditTaskDialogProps {
  task: TaskDTO
  trigger: JSX.Element
}

export const EditTaskDialog = ({ task, trigger }: EditTaskDialogProps) => {
  const { functions, state } = useEditTaskDialog()

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="h-[350px] w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.editTask.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <EditTaskForm task={task} onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
