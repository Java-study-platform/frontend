import { useUserContext } from '@/utils/contexts'
import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { Typography } from '@/components/ui'
import { ChangeUserRole } from './components/ChangeUserRole/ChangeUserRole'
import { ProfileForm } from './components/ProfileForm/ProfileForm'
import { UserAchievements } from './components/UserAchievements/UserAchievements'
import { useProfilePage } from './hooks/useProfilePage'

export const ProfilePage = () => {
  const userContext = useUserContext()
  const { state } = useProfilePage()

  return (
    <div className="flex">
      <div className="container max-w-[750px]">
        <Typography tag="h1" variant="h1">
          <I18nText path="profile.title" />
        </Typography>
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {state.profile && (
          <div>
            {userContext.user?.isAdmin && (
              <ChangeUserRole defaultRoles={state.profile.roles ?? []} userId={state.profile.id} />
            )}
            <ProfileForm profile={state.profile} />
            <UserAchievements />
          </div>
        )}
      </div>
    </div>
  )
}
