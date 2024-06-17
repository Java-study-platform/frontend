import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText, SolutionStatus } from '@/components/common'
import { Typography } from '@/components/ui'
import { useSolutionTestCasesSection } from './hooks/useSolutionTestCasesSection'

interface SolutionTestCasesSectionProps {
  solutionId: string
}

export const SolutionTestCasesSection = ({ solutionId }: SolutionTestCasesSectionProps) => {
  const { state } = useSolutionTestCasesSection({ solutionId })

  return (
    <div>
      <Typography tag="h2" variant="h2">
        <I18nText path="task.solutionTestCasesSection.title" />
      </Typography>
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      {state.tests?.map((test) => (
        <div className="flex items-center gap-2">
          <Typography tag="p" variant="body1">
            <I18nText
              path="task.solutionTestCasesSection.testIndex"
              values={{ index: test.testIndex }}
            />
            {test.testTime}
          </Typography>
          <SolutionStatus status={test.status} />
        </div>
      ))}
    </div>
  )
}
