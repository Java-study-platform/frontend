import { CategoryDTO } from '@/generated/core-api'
import { FilePenIcon, PlusIcon, TrashIcon } from 'lucide-react'
import { I18nText } from '@/components/common'
import { Button, Card, CardContent, CardHeader, CardTitle, Typography } from '@/components/ui'
import { CategoryTopicsDialog } from '../CategoryTopicsDialog/CategoryTopicsDialog'
import { CreateCategoryTopicDialog } from '../CreateCategoryTopicDialog/CreateCategoryTopicDialog'
import { DeleteCategoryDialog } from '../DeleteCategoryDialog/DeleteCategoryDialog'
import { EditCategoryDialog } from '../EditCategoryDialog/EditCategoryDialog'

interface CategoryCardProps {
  category: CategoryDTO
}

export const CategoryCard = ({ category }: CategoryCardProps) => (
  <Card className="w-52">
    <CardHeader className="flex items-center justify-between">
      <CardTitle>
        <Typography tag="p" variant="body1" className="w-40 truncate">
          {category.name}
        </Typography>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {!category.topics?.length && (
        <Typography>
          <I18nText path="categories.noTopics" />
        </Typography>
      )}
      {/* // TODO */}
      {!!category.topics?.length && <CategoryTopicsDialog topics={category.topics} />}
      {/* // TODO only for admin */}
      <div className="flex gap-2">
        <EditCategoryDialog
          category={category}
          trigger={
            <Button variant="secondary" size="icon" aria-label="Edit" className="w-full">
              <FilePenIcon className="h-4 w-4" />
            </Button>
          }
        />
        <DeleteCategoryDialog
          category={category}
          trigger={
            <Button variant="destructive" size="icon" aria-label="Delete" className="w-full">
              <TrashIcon className="h-4 w-4" />
            </Button>
          }
        />
        {/* // TODO */}
        <CreateCategoryTopicDialog />
        <Button size="icon" aria-label="Delete" className="w-full">
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
)
