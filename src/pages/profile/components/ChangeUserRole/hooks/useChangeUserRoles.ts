import { usePutUserByUserIdMutation } from '@/utils/api'
import React from 'react'

interface UseChangeUserRolesParams {
  defaultRoles: string[]
}

export const useChangeUserRoles = ({ defaultRoles }: UseChangeUserRolesParams) => {
  const [roles, setRoles] = React.useState<string[]>(defaultRoles)

  const putUserByUserIdMutation = usePutUserByUserIdMutation()

  const onChangeRolesClick = async (userId: string) => {
    await putUserByUserIdMutation.mutateAsync({ roles, userId })
    setRoles([])
  }

  return {
    state: { roles, loading: putUserByUserIdMutation.isPending },
    functions: { onChangeRolesClick, setRoles }
  }
}
