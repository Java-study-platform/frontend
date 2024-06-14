import { useGetLearningTasksQuery } from '@/utils/api'
import { useSearchParams } from 'react-router-dom'
import { useDebounceCallback } from 'usehooks-ts'

const DEFAULT_CATEGORIES_PAGE = 1
const CATEGORIES_PAGE_SIZE = 10
const NAME_FILTER_INPUT_DELAY = 200

export const useTasksPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : DEFAULT_CATEGORIES_PAGE
  const nameFilter = searchParams.get('name') || undefined

  const getLearningTasksQuery = useGetLearningTasksQuery({
    page: page - 1,
    size: CATEGORIES_PAGE_SIZE,
    queryText: nameFilter
  })

  const onNameFilterChange = useDebounceCallback(
    (value: string) => setSearchParams((prev) => ({ ...prev, name: value, page: '1' })),
    NAME_FILTER_INPUT_DELAY
  )

  const onPaginationNumberClick = (pageNumber: number) => {
    setSearchParams((prev) => ({ ...prev, page: pageNumber.toString() }))
  }

  return {
    state: {
      tasks: getLearningTasksQuery.data?.data.data?.content || [],
      pagination: {
        totalPages: getLearningTasksQuery.data?.data.data?.totalPages || 0,
        totalElements: getLearningTasksQuery.data?.data.data?.totalElements || 0,
        currentPage: page
      },
      nameFilter,
      loading: getLearningTasksQuery.isLoading
    },
    query: getLearningTasksQuery,
    functions: { onNameFilterChange, onPaginationNumberClick }
  }
}
