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
import { CreateCategoryForm } from './components/CreateCategoryForm/CreateCategoryForm'
import { useCreateCategoryDialog } from './hooks/useCreateCategoryDialog'

interface CreateCategoryDialogProps {
  trigger: JSX.Element
}

export const CreateCategoryDialog = ({ trigger }: CreateCategoryDialogProps) => {
  const { functions, state } = useCreateCategoryDialog()

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-screen w-[90%] overflow-y-scroll md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.createCategory.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <CreateCategoryForm onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
