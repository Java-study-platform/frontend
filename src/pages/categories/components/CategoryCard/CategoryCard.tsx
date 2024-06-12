import { CategoryDTO } from '@/generated/core-api'
import { FilePenIcon, LinkIcon, PlusIcon, TrashIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { I18nText } from '@/components/common'
import { Button, Card, CardContent, CardHeader, CardTitle, Typography } from '@/components/ui'
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
      {/* // TODO only for admin */}
    </CardHeader>
    <CardContent className="space-y-4">
      {!category.topics?.length && (
        <Typography>
          <I18nText path="categories.noTopics" />
        </Typography>
      )}
      {!!category.topics?.length && (
        <div className="flex flex-col gap-2">
          {category.topics?.map((topic) => (
            <Link to="#" className="flex items-center gap-2 text-sm">
              <LinkIcon className="h-4 w-4" />
              {topic.name}
            </Link>
          ))}
        </div>
      )}
      {/* // TODO only for admin */}
      <div className="flex gap-2">
        <EditCategoryDialog
          category={category}
          trigger={
            <Button variant="secondary" size="icon" aria-label="Edit" className="w-full">
              <FilePenIcon className="h-4 w-4" />
              {/* <I18nText path="button.edit" /> */}
            </Button>
          }
        />
        <DeleteCategoryDialog
          category={category}
          trigger={
            <Button variant="destructive" size="icon" aria-label="Delete" className="w-full">
              <TrashIcon className="h-4 w-4" />
              {/* <I18nText path="button.delete" /> */}
            </Button>
          }
        />
        <Button size="icon" aria-label="Delete" className="w-full">
          <PlusIcon className="h-4 w-4" />
          {/* <I18nText path="button.createTopic" /> */}
        </Button>
      </div>
    </CardContent>
  </Card>
)
