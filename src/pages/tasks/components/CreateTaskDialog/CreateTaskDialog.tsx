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
import { CreateTaskForm } from './components/CreateTaskForm/CreateTaskForm'
import { useCreateTaskDialog } from './hooks/useCreateTaskDialog'

interface CreateTaskDialogProps {
  trigger: JSX.Element
}

export const CreateTaskDialog = ({ trigger }: CreateTaskDialogProps) => {
  const { functions, state } = useCreateTaskDialog()

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="h-[350px] w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.createTask.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <CreateTaskForm onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
