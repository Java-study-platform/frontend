import { ROUTES } from '@/utils/constants'
import { useUserContext } from '@/utils/contexts'
import { ReloadIcon } from '@radix-ui/react-icons'
import { LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { I18nText } from '@/components/common'
import { Typography } from '@/components/ui'
import { SolutionsSection } from './components/SolutionsSection/SolutionsSection'
import { TestCasesSection } from './components/TestCasesSection/TestCasesSection'
import { UploadSolutionSection } from './components/UploadSolutionSection/UploadSolutionSection'
import { UserSolutionsSection } from './components/UserSolutionsSection/UserSolutionsSection'
import { useTaskPage } from './hooks/useTaskPage'

export const TaskPage = () => {
  const userContext = useUserContext()
  const { state } = useTaskPage()

  return (
    <div className="flex">
      <div className="container max-w-[750px] mdx:mx-auto">
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {state.task && (
          <div>
            <Typography tag="h2" variant="h2">
              <I18nText path="task.title" values={{ name: state.task.name }} />
            </Typography>
            <Link to={ROUTES.TOPIC(state.task.topicId!)} className="flex">
              <Typography
                tag="span"
                variant="sub1"
                className="mt-2 flex items-center gap-2 hover:underline"
              >
                <LinkIcon className="h-3 w-3" />
                <I18nText path="task.goToTopic" />
              </Typography>
            </Link>
            <div className="mt-2 space-y-1">
              <Typography tag="p" variant="body2">
                <I18nText path="task.description" values={{ description: state.task.description }} />
              </Typography>
              <Typography tag="p" variant="body2">
                <I18nText
                  path="task.experienceAmount"
                  values={{ experienceAmount: state.task.experienceAmount }}
                />
              </Typography>
              <Typography tag="p" variant="body2">
                <I18nText path="task.timeLimit" values={{ timeLimit: state.task.timeLimit }} />
              </Typography>
            </div>
            {userContext.user?.isUser && (
              <div>
                <UploadSolutionSection />
                <UserSolutionsSection taskId={state.task.id} />
              </div>
            )}
            {(userContext.user?.isAdmin || userContext.user?.isMentor) && (
              <div>
                <SolutionsSection />
                <TestCasesSection />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
