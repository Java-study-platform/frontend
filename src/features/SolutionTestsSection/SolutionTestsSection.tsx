import { ReloadIcon } from '@radix-ui/react-icons'
import { I18nText } from '@/components/common'
import { Accordion } from '@/components/ui'
import { TestCard } from './components/TestCard/TestCard'
import { useSolutionTestsSection } from './hooks/useSolutionTestsSection'

interface SolutionTestsSectionProps {
  solutionId: string
  moreInfo?: boolean
}

export const SolutionTestsSection = ({ solutionId, moreInfo = false }: SolutionTestsSectionProps) => {
  const { state } = useSolutionTestsSection({ solutionId })

  return (
    <section className="max-w-[400px]">
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      <Accordion
        type="multiple"
        className="mt-10 flex h-full max-h-[400px] flex-col gap-4 overflow-y-auto"
      >
        {state.tests?.map((test) => <TestCard key={test.id} moreInfo={moreInfo} test={test} />)}
      </Accordion>
    </section>
  )
}
