import { I18nText } from '@/components/common'
import { Typography } from '@/components/ui'
import { ProfileForm } from './components/ProfileForm/ProfileForm'
import { useProfilePage } from './hooks/useProfilePage'

export const ProfilePage = () => {
  const { query } = useProfilePage()

  return (
    <div className="flex h-screen">
      <div className="container max-w-[500px]">
        <Typography tag="h1" variant="h1">
          <I18nText path="profile.title" />
        </Typography>
        {/* // TODO loading state */}
        {query.data?.data.data && <ProfileForm profile={query.data.data.data} />}
      </div>
    </div>
  )
}
