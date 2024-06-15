import { useI18n, useUserContext } from '@/utils/contexts'
import { getPageIndex, getPaginationNumbers } from '@/utils/helpers'
import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import {
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
import { CreateTaskDialog } from './components/CreateTaskDialog/CreateTaskDialog'
import { TaskCard } from './components/TaskCard/TaskCard'
import { useTasksPage } from './hooks/useTasksPage'

export const TasksPage = () => {
  const i18n = useI18n()
  const userContext = useUserContext()
  const { state, functions } = useTasksPage()

  return (
    <div className="flex h-screen">
      <div className="container max-w-[750px] mdx:mx-auto mdx:max-w-[300px]">
        <Typography tag="h1" variant="h1">
          <I18nText path="tasks.title" />
        </Typography>
        <div className="mt-2 flex gap-4 mdx:flex-col">
          <Input
            placeholder={i18n.formatMessage({ id: 'field.nameFilter.placeholder' })}
            defaultValue={state.nameFilter}
            onChange={(event) => functions.onNameFilterChange(event.target.value)}
            className="max-w-[200px] mdx:max-w-[300px]"
          />
          {userContext.user?.isAdmin && (
            <CreateTaskDialog trigger={<Button>{i18n.formatMessage({ id: 'button.create' })}</Button>} />
          )}
        </div>
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {!!state.tasks.length && (
          <div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {state.tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
            {state.pagination.totalPages > 1 && (
              <Pagination>
                <PaginationContent className="mt-7 flex flex-wrap justify-center">
                  <PaginationPrevious
                    variant="outline"
                    size="icon"
                    disabled={state.pagination.currentPage <= 1}
                    onClick={() => functions.onPaginationNumberClick(state.pagination.currentPage - 1)}
                    className="mr-1 size-8 border-none"
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
                    className="mr-1 size-8 border-none"
                  />
                </PaginationContent>
              </Pagination>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
