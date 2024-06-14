import { useI18n } from '@/utils/contexts'
import { getPageIndex, getPaginationNumbers } from '@/utils/helpers'
import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import {
  Accordion,
  Button,
  Input,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Typography
} from '@/components/ui'
import { TopicCard } from './components/TopicCard/TopicCard'
import { useTopicsPage } from './hooks/useTopicsPage'

export const TopicsPage = () => {
  const i18n = useI18n()
  const { state, functions } = useTopicsPage()

  return (
    <div className="flex h-screen">
      <div className="container max-w-[750px]">
        <Typography tag="h1" variant="h1">
          <I18nText path="topics.title" />
        </Typography>
        <div className="mt-2 flex gap-4">
          <Input
            placeholder={i18n.formatMessage({ id: 'field.nameFilter.placeholder' })}
            defaultValue={state.nameFilter}
            onChange={(event) => functions.onNameFilterChange(event.target.value)}
            className="max-w-[200px]"
          />
        </div>
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {!!state.topics.length && (
          <div>
            <Accordion type="multiple" className="mt-10 flex max-w-[400px] flex-col gap-4">
              {state.topics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </Accordion>
            <Pagination>
              <PaginationContent className="mt-7 flex flex-wrap justify-center">
                <PaginationPrevious
                  variant="outline"
                  size="icon"
                  disabled={state.pagination.currentPage <= 1}
                  onClick={() => functions.onPaginationNumberClick(state.pagination.currentPage - 1)}
                  className="mr-3 size-8 border-none"
                />

                {getPaginationNumbers({
                  current: state.pagination.currentPage,
                  pageCount: state.pagination.totalPages
                }).map((page) => (
                  <PaginationItem key={page}>
                    {page === '...' && <PaginationEllipsis />}
                    {page !== '...' && (
                      <Button
                        key={page}
                        variant={state.pagination.currentPage === page ? 'secondary' : 'outline'}
                        size="sm"
                        className="h-8 w-8 rounded-lg border border-secondary font-normal"
                        onClick={() => functions.onPaginationNumberClick(page)}
                      >
                        {getPageIndex(page)}
                      </Button>
                    )}
                  </PaginationItem>
                ))}

                <PaginationNext
                  variant="outline"
                  size="icon"
                  disabled={state.pagination.currentPage >= state.pagination.totalPages}
                  onClick={() => functions.onPaginationNumberClick(state.pagination.currentPage + 1)}
                  className="mr-3 size-8 border-none"
                />
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  )
}
