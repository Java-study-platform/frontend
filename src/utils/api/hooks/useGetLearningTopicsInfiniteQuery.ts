import { DefaultResponsePageTopicDTO } from '@/generated/core-api'
import { InfiniteData, QueryKey, useInfiniteQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { getLearningTopics, GetLearningTopicsRequestParams } from '../requests'

export const useGetLearningTopicsInfiniteQuery = (
  params: GetLearningTopicsRequestParams,
  settings?: InfiniteQuerySettings<typeof getLearningTopics>
) =>
  useInfiniteQuery<
    AxiosResponse<DefaultResponsePageTopicDTO>,
    FIXME,
    InfiniteData<DefaultResponsePageTopicDTO>,
    QueryKey,
    number
  >({
    queryKey: ['getLearningTopics', params.page],
    initialPageParam: params.page ?? 1,
    queryFn: ({ pageParam }) =>
      getLearningTopics({
        params: { ...params, page: pageParam },
        config: settings?.config
      }),
    getNextPageParam: (lastPage, pages) =>
      (lastPage.data?.data?.totalPages ?? 1) > pages.length ? pages.length + 1 : undefined,
    ...settings?.options
  })
