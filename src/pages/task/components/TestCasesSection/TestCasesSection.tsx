import { ReloadIcon } from '@radix-ui/react-icons'
import { PlusIcon } from 'lucide-react'
import { I18nText } from '@/components/common'
import { Button, ScrollArea, Typography } from '@/components/ui'
import { CreateTestCaseDialog } from './components/CreateTestCaseDialog/CreateTestCaseDialog'
import { TestCaseCard } from './components/TestCaseCard/TestCaseCard'
import { useTestCasesSection } from './hooks/useTestCasesSection'

export const TestCasesSection = () => {
  const { state, functions } = useTestCasesSection()

  return (
    <section className="mt-10">
      <div className="flex items-center gap-4">
        <Typography tag="h2" variant="h2">
          <I18nText path="task.testCasesSection.title" />
        </Typography>
        <CreateTestCaseDialog
          trigger={
            <Button size="icon" className="-mt-2">
              <PlusIcon className="h-4 w-4" />
            </Button>
          }
        />
      </div>
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      <div className="h-[500px]">
        <ScrollArea className="h-[100%]">
          {state.testCases?.map((testCase) => (
            <TestCaseCard
              key={testCase.id}
              testCase={testCase}
              onDeleteClick={functions.onDeleteTestCaseClick}
            />
          ))}
        </ScrollArea>
      </div>
    </section>
  )
}
