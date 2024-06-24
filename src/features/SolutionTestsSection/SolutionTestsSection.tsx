import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { Accordion } from '@/components/ui'
import { TestCard } from './components/TestCard/TestCard'
import { useSolutionTestsSection } from './hooks/useSolutionTestsSection'

interface SolutionTestsSectionProps {
  solutionId: string
}

export const SolutionTestsSection = ({ solutionId }: SolutionTestsSectionProps) => {
  const { state } = useSolutionTestsSection({ solutionId })

  return (
    <section>
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      <Accordion type="multiple" className="mt-10 flex max-w-[400px] flex-col gap-4">
        {state.tests?.map((test) => <TestCard key={test.id} test={test} />)}
      </Accordion>
    </section>
  )
}
