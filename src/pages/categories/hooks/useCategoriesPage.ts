import { useGetLearningCategoriesQuery } from '@/utils/api/hooks'
import { useQuery } from '@/utils/hooks'
import { useDebounceCallback } from 'usehooks-ts'

const DEFAULT_CATEGORIES_PAGE = 0
const CATEGORIES_PAGE_SIZE = 10
const NAME_FILTER_INPUT_DELAY = 200

export const useCategoriesPage = () => {
  const query = useQuery()

  const page = query.get('page') ? Number(query.get('page')) : DEFAULT_CATEGORIES_PAGE
  const nameFilter = query.get('name') || undefined

  const getLearningCategoriesQuery = useGetLearningCategoriesQuery({
    page,
    size: CATEGORIES_PAGE_SIZE,
    queryText: nameFilter
  })

  const onNameFilterChange = useDebounceCallback((value: string) => {
    query.set('name', value)
    query.set('page', '1')
  }, NAME_FILTER_INPUT_DELAY)

  return {
    state: { nameFilter, loading: getLearningCategoriesQuery.isLoading },
    query: getLearningCategoriesQuery,
    functions: { onNameFilterChange }
  }
}
