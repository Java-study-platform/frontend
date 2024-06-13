import { useGetLearningTopicsQuery } from '@/utils/api/hooks'
import { useSearchParams } from 'react-router-dom'
import { useDebounceCallback } from 'usehooks-ts'

const DEFAULT_CATEGORIES_PAGE = 1
const CATEGORIES_PAGE_SIZE = 10
const NAME_FILTER_INPUT_DELAY = 200

export const useTopicsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : DEFAULT_CATEGORIES_PAGE
  const nameFilter = searchParams.get('name') || undefined

  const getLearningTopicsQuery = useGetLearningTopicsQuery({
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
      topics: getLearningTopicsQuery.data?.data.data?.content || [],
      pagination: {
        totalPages: getLearningTopicsQuery.data?.data.data?.totalPages || 0,
        totalElements: getLearningTopicsQuery.data?.data.data?.totalElements || 0,
        currentPage: page
      },
      nameFilter,
      loading: getLearningTopicsQuery.isLoading
    },
    query: getLearningTopicsQuery,
    functions: { onNameFilterChange, onPaginationNumberClick }
  }
}
