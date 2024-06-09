import { I18nText } from '@/components/common'
import { Typography } from '@/components/ui'
import { ProfileForm } from './components/ProfileForm/ProfileForm'
import { useProfilePage } from './hooks/useProfilePage'

export const ProfilePage = () => {
  const { state } = useProfilePage()

  if (state.loading) {
    // TODO skeleton
    return <div>Loading...</div>
  }

  return (
    <div>
      <Typography tag="h1" variant="h1">
        <I18nText path="profile.title" />
      </Typography>
      <ProfileForm />
    </div>
  )
}
