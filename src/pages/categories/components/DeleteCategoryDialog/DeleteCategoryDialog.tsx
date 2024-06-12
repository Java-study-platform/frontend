import { CategoryDTO } from '@/generated/core-api'
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
import { useDeleteCategoryDialog } from './hooks/useDeleteCategoryDialog'

interface DeleteCategoryDialogProps {
  category: CategoryDTO
  trigger: JSX.Element
}

export const DeleteCategoryDialog = ({ category, trigger }: DeleteCategoryDialogProps) => {
  const { functions, state } = useDeleteCategoryDialog({ category })

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="h-[200px] w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.deleteCategory.title" />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        {category.name && (
          <DialogDescription>
            <Typography>
              <I18nText path="dialog.deleteCategory.description" values={{ name: category.name }} />
            </Typography>
          </DialogDescription>
        )}
        <DialogFooter>
          <Button variant="ghost" onClick={() => functions.setOpen(false)}>
            <I18nText path="button.cancel" />
          </Button>
          <Button variant="destructive" onClick={functions.onConfirmDeleteClick}>
            <I18nText path="button.confirmDelete" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
