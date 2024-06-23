import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { Typography } from '@/components/ui'
import { AchievementCard } from './components/AchievementCard/AchievementCard'
import { useUserAchievements } from './hooks/useUserAchievements'

export const UserAchievements = () => {
  const { state } = useUserAchievements()

  return (
    <section className="mt-10">
      <Typography tag="h2" variant="h2">
        <I18nText path="profile.userAchievements" />
      </Typography>
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      <div className="mt-5 flex flex-wrap ">
        {state.achievements?.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  )
}
