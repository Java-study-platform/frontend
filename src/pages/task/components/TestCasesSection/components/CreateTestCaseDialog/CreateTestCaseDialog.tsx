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
import { CreateTestCaseForm } from './CreateTestCaseForm/CreateTestCaseForm'
import { useCreateTestCaseDialog } from './hooks/useCreateTestCaseDialog'

interface CreateTestCaseDialogProps {
  trigger: JSX.Element
}

export const CreateTestCaseDialog = ({ trigger }: CreateTestCaseDialogProps) => {
  const { functions, state } = useCreateTestCaseDialog()

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.editTestCase.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <CreateTestCaseForm onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
