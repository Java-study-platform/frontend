import { CategoryDTO } from '@/generated/core-api'
import { Button } from '@/components/ui'
import { EditCategoryDialog } from '../EditCategoryDialog/EditCategoryDialog'

interface CategoryCardProps {
  category: CategoryDTO
}

export const CategoryCard = ({ category }: CategoryCardProps) => (
  <div className="">
    {category.name}
    <EditCategoryDialog category={category} trigger={<Button></Button>} />
  </div>
)
