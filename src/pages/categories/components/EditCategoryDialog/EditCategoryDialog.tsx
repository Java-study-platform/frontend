import { CategoryDTO } from '@/generated/core-api'
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
import { EditCategoryForm } from './components/EditCategoryForm/EditCategoryForm'
import { useEditCategoryDialog } from './hooks/useEditCategoryDialog'

interface EditCategoryDialogProps {
  category: CategoryDTO
  trigger: JSX.Element
}

export const EditCategoryDialog = ({ category, trigger }: EditCategoryDialogProps) => {
  const { functions, state } = useEditCategoryDialog()

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="h-[350px] w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.editCategory.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <EditCategoryForm category={category} onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
