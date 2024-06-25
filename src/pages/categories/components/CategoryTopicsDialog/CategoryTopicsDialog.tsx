import { CategoryDTO, TopicDTO } from '@/generated/core-api'
import { ROUTES } from '@/utils/constants'
import { LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
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
import { useCategoryTopicsDialog } from './hooks/useCategoryTopicsDialog'

interface CategoryTopicsDialogProps {
  trigger: JSX.Element
  topics: TopicDTO[]
  category: CategoryDTO
}

export const CategoryTopicsDialog = ({ trigger, category, topics }: CategoryTopicsDialogProps) => {
  const { state, functions } = useCategoryTopicsDialog()

  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[400px] w-[90%] md:max-w-[500px]">
        <DialogClose />
        <DialogHeader>
          <DialogTitle asChild>
            <Typography tag="h2" variant="h2">
              <I18nText path="dialog.topicsInCategory.title" values={{ name: category.name }} />
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className="h-full">
          <div className="flex flex-col gap-2">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                to={ROUTES.TOPIC(topic.id)}
                className="flex items-center gap-2 text-sm underline"
              >
                <LinkIcon className="h-3 w-3" />
                {topic.name}
              </Link>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
