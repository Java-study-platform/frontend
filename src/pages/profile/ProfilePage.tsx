import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { Typography } from '@/components/ui'
import { ProfileForm } from './components/ProfileForm/ProfileForm'
import { UserAchievements } from './components/UserAchievements/UserAchievements'
import { useProfilePage } from './hooks/useProfilePage'

export const ProfilePage = () => {
  const { state, query } = useProfilePage()

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
        {query.data?.data.data && (
          <div>
            <ProfileForm profile={query.data.data.data} />
            <UserAchievements />
          </div>
        )}
      </div>
    </div>
  )
}
