import { TestCaseDto } from '@/generated/core-api'
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
import { EditTestCaseForm } from './EditTestCaseForm/EditTestCaseForm'
import { useEditTestCaseDialog } from './hooks/useEditTestCaseDialog'

interface EditTestCaseDialogProps {
  testCase: TestCaseDto
  trigger: JSX.Element
}

export const EditTestCaseDialog = ({ testCase, trigger }: EditTestCaseDialogProps) => {
  const { functions, state } = useEditTestCaseDialog()

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
        <EditTestCaseForm testCase={testCase} onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
