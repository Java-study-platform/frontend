import { useGetLearningCategoriesQuery } from '@/utils/api/hooks'
import { useSearchParams } from 'react-router-dom'
import { useDebounceCallback } from 'usehooks-ts'

const DEFAULT_CATEGORIES_PAGE = 1
const CATEGORIES_PAGE_SIZE = 10
const NAME_FILTER_INPUT_DELAY = 200

export const useCategoriesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : DEFAULT_CATEGORIES_PAGE
  const nameFilter = searchParams.get('name') || undefined

  const getLearningCategoriesQuery = useGetLearningCategoriesQuery({
    page: page - 1,
    size: CATEGORIES_PAGE_SIZE,
    queryText: nameFilter
  })

  const onNameFilterChange = useDebounceCallback(
    (value: string) => setSearchParams((prev) => ({ ...prev, name: value, page: '0' })),
    NAME_FILTER_INPUT_DELAY
  )

  const onPaginationNumberClick = (pageNumber: number) => {
    setSearchParams((prev) => ({ ...prev, page: pageNumber.toString() }))
  }

  return {
    state: {
      categories: getLearningCategoriesQuery.data?.data.data?.content || [],
      pagination: {
        totalPages: getLearningCategoriesQuery.data?.data.data?.totalPages || 0,
        totalElements: getLearningCategoriesQuery.data?.data.data?.totalElements || 0,
        currentPage: page
      },
      nameFilter,
      loading: getLearningCategoriesQuery.isLoading
    },
    query: getLearningCategoriesQuery,
    functions: { onNameFilterChange, onPaginationNumberClick }
  }
}
