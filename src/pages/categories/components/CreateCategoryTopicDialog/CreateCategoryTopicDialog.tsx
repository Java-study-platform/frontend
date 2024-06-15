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
import { CreateCategoryTopicForm } from './CreateCategoryTopicForm/CreateCategoryTopicForm'
import { useCreateCategoryTopicDialog } from './hooks/useCreateCategoryTopicDialog'

interface CreateCategoryTopicDialogProps {
  category: CategoryDTO
  trigger: JSX.Element
}

export const CreateCategoryTopicDialog = ({ category, trigger }: CreateCategoryTopicDialogProps) => {
  const { functions, state } = useCreateCategoryTopicDialog()

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.createTopic.title" values={{ name: category.name }} />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <CreateCategoryTopicForm category={category} onSubmitted={functions.onSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
