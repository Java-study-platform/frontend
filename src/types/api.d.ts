/* eslint-disable @typescript-eslint/no-explicit-any */
export {}

declare global {
  interface MutationSettings<Params = void, Func = unknown> {
    config?: RequestOptions
    options?: import('@tanstack/react-query').UseMutationOptions<
      Awaited<ReturnType<Func>>,
      any,
      Params,
      any
    >
  }

  interface QuerySettings<Func = unknown> {
    config?: ApiRequestConfig
    options?: Omit<
      import('@tanstack/react-query').UseQueryOptions<
        Awaited<ReturnType<Func>>,
        any,
        Awaited<ReturnType<Func>>,
        any
      >,
      'queryKey'
    >
  }

  interface InfiniteQuerySettings<Func = unknown> {
    config?: RequestOptions
    options?: Omit<
      import('@tanstack/react-query').UseInfiniteQueryOptions<
        Awaited<ReturnTyp<Func>>,
        any,
        Awaited<ReturnTyp<Func>>,
        any,
        import('@tanstack/react-query').QueryKey,
        number
      >,
      'queryKey'
    >
  }

  type RequestOptions<Params = undefined> = Params extends undefined
    ? {
        config?: AxiosRequestConfig
      }
    : {
        params: Params
        config?: AxiosRequestConfig
      }
}
