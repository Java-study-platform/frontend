import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { useTopicPage } from './hooks/useTopicPage'

export const TopicPage = () => {
  const { state } = useTopicPage()

  return (
    <div>
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
    </div>
  )
}
