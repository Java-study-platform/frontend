import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

interface QueryProviderProps {
  children: React.ReactNode
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const queryClient = React.useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
        queryCache: new QueryCache({
          onError: (error) => {
            toast.error(error.message)
          }
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            toast.error(error.message)
          }
        })
      }),
    []
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
