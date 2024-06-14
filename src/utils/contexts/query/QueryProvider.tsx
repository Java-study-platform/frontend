import { DefaultResponseObject } from '@/generated/user-api'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import React from 'react'
import { toast } from 'sonner'

interface QueryProviderProps {
  children: React.ReactNode
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const queryClient = React.useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
        queryCache: new QueryCache({
          onError: (cause) => {
            if (cause instanceof AxiosError) {
              const error = (cause as AxiosError<DefaultResponseObject>).response?.data
              const errors = error?.errors || {}

              if (error?.message && !Object.keys(errors).length) toast.error(error.message)
            }
          }
        }),
        mutationCache: new MutationCache({
          onError: (cause) => {
            if (cause instanceof AxiosError) {
              const error = (cause as AxiosError<DefaultResponseObject>).response?.data
              const errors = error?.errors || {}

              if (error?.message && !Object.keys(errors).length) toast.error(error.message)
            }
          }
        })
      }),
    []
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
