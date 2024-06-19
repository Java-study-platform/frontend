import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText, SolutionStatus } from '@/components/common'
import { Typography } from '@/components/ui'
import { useSolutionTestsSection } from './hooks/useSolutionTestsSection'

interface SolutionTestsSectionProps {
  solutionId: string
}

export const SolutionTestsSection = ({ solutionId }: SolutionTestsSectionProps) => {
  const { state } = useSolutionTestsSection({ solutionId })

  return (
    <section className="mt-10">
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
          <SolutionStatus status={test.status!} />
          {/* // TODO add request for mentor with full info about test */}
        </div>
      ))}
    </section>
  )
}
