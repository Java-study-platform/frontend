import { useGetSolutionTaskByTaskIdQuery } from '@/utils/api'
import React from 'react'
import { useDebounceCallback } from 'usehooks-ts'
import { Combobox, type ComboboxProps } from '@/components/ui'
import { defaultConvertUsers } from './helpers/defaultConvertUsers'

interface UsersComboboxProps extends Omit<ComboboxProps, 'items' | 'onSearchChange' | 'loading'> {
  taskId: string
}

const SEARCH_DELAY = 200

export const UsersCombobox = ({ taskId, ...props }: UsersComboboxProps) => {
  const [query, setQuery] = React.useState('')
  const debouncedSetQuery = useDebounceCallback(setQuery, SEARCH_DELAY)
  const getSolutionTaskByTaskIdQuery = useGetSolutionTaskByTaskIdQuery({ taskId, username: query })

  return (
    <Combobox
      {...props}
      items={defaultConvertUsers(getSolutionTaskByTaskIdQuery.data?.data.data ?? [])}
      onSearchChange={debouncedSetQuery}
      loading={getSolutionTaskByTaskIdQuery.isLoading}
    />
  )
}
