import { I18nText } from '@/components/common'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
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
      <DialogContent className="h-screen w-screen lg:max-h-[700px] lg:max-w-[700px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h4" variant="h4">
              <I18nText path="dialog.createCategory.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[90vh] p-6">
          <CreateCategoryForm onSubmitted={functions.onSubmitted} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
