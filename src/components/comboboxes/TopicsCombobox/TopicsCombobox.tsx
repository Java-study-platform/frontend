import { useGetLearningTopicsInfiniteQuery } from '@/utils/api'
import React from 'react'
import { useDebounceCallback, useIntersectionObserver } from 'usehooks-ts'
import { Combobox, type ComboboxProps } from '@/components/ui'
import { defaultConvertTopics } from './helpers/defaultConvertTopics'

interface TopicsComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {}

const ACTIVITY_SEARCH_DELAY = 200

export const TopicsCombobox = (props: TopicsComboboxProps) => {
  const [query, setQuery] = React.useState('')
  const debouncedSetQuery = useDebounceCallback(setQuery, ACTIVITY_SEARCH_DELAY)
  const getLearningTopicsInfiniteQuery = useGetLearningTopicsInfiniteQuery({
    queryText: query ? query : undefined
  })

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5
  })

  React.useEffect(() => {
    if (isIntersecting) getLearningTopicsInfiniteQuery.fetchNextPage()
  }, [isIntersecting])

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(getLearningTopicsInfiniteQuery.data?.pages[0].data?.data?.content)
  }, [getLearningTopicsInfiniteQuery.data])

  return (
    <>
      <Combobox
        {...props}
        items={
          getLearningTopicsInfiniteQuery.data
            ? defaultConvertTopics(
                getLearningTopicsInfiniteQuery.data?.pages?.flatMap(
                  (page) =>
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    page.data.data?.content ?? []
                ) ?? []
              )
            : []
        }
        onSearchChange={debouncedSetQuery}
        loading={getLearningTopicsInfiniteQuery.isFetchingNextPage}
      />
      <div ref={ref} />
    </>
  )
}
