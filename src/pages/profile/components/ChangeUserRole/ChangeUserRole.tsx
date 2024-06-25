import { useI18n } from '@/utils/contexts'
import React from 'react'
import { I18nText } from '@/components/common'
import {
  Button,
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from '@/components/ui'
import { useChangeUserRoles } from './hooks/useChangeUserRoles'

const roleOptions = [
  { label: 'Админ', value: 'ADMIN' },
  { label: 'Ментор', value: 'MENTOR' },
  { label: 'Юзер', value: 'USER' }
]

interface ChangeUserRoleProps {
  userId: string
  defaultRoles: string[]
}

export const ChangeUserRole = ({ userId, defaultRoles }: ChangeUserRoleProps) => {
  const i18n = useI18n()
  const { state, functions } = useChangeUserRoles({ defaultRoles })

  return (
    <div className="flex w-[300px] flex-col">
      <MultiSelector values={state.roles} onValuesChange={functions.setRoles} loop={false}>
        <MultiSelectorTrigger>
          <MultiSelectorInput placeholder={i18n.formatMessage({ id: 'select.roles.placeholder' })} />
        </MultiSelectorTrigger>
        <MultiSelectorContent>
          <MultiSelectorList>
            {roleOptions.map((role, i) => (
              <MultiSelectorItem key={i} value={role.value}>
                {role.label}
              </MultiSelectorItem>
            ))}
          </MultiSelectorList>
        </MultiSelectorContent>
      </MultiSelector>
      <Button loading={state.loading} onClick={() => functions.onChangeRolesClick(userId)}>
        <I18nText path="button.set" />
      </Button>
    </div>
  )
}
