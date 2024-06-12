import { useI18n } from '@/utils/contexts'
import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { Button, Input, Typography } from '@/components/ui'
import { CategoryCard } from './components/CategoryCard/CategoryCard'
import { CreateCategoryDialog } from './components/CreateCategoryDialog/CreateCategoryDialog'
import { useCategoriesPage } from './hooks/useCategoriesPage'

export const CategoriesPage = () => {
  const i18n = useI18n()
  const { state, functions } = useCategoriesPage()

  return (
    <div className="flex h-screen">
      <div className="container">
        <Typography tag="h1" variant="h1">
          <I18nText path="categories.title" />
        </Typography>
        <div className="mt-2 flex gap-4">
          <Input
            placeholder={i18n.formatMessage({ id: 'field.nameFilter.placeholder' })}
            defaultValue={state.nameFilter}
            onChange={(event) => functions.onNameFilterChange(event.target.value)}
            className="max-w-[180px]"
          />
          {/* // TODO only for admin */}
          <CreateCategoryDialog
            trigger={<Button>{i18n.formatMessage({ id: 'button.create' })}</Button>}
          />
        </div>
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {!!state.categories.length && (
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {state.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
