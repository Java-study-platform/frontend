import { TestDto } from '@/generated/solution-api'
import { useUserContext } from '@/utils/contexts'
import { ReloadIcon } from '@radix-ui/react-icons'
import CodeEditor from '@uiw/react-textarea-code-editor'
import { I18nText, SolutionStatus } from '@/components/common'
import { AccordionContent, AccordionItem, AccordionTrigger, Typography } from '@/components/ui'
import { useTestCard } from './hooks/useTestCard'

interface TestCardProps {
  test: TestDto
}

export const TestCard = ({ test }: TestCardProps) => {
  const userContext = useUserContext()
  const { state } = useTestCard({ testId: test.id! })

  return (
    <AccordionItem value={test.id!} disabled={!userContext.user?.isAdmin && !userContext.user?.isMentor}>
      <AccordionTrigger className="flex items-center">
        <Typography tag="p" className="[&:not(:first-child)]:mt-0">
          <I18nText path="task.solutionTestCasesSection.testIndex" values={{ index: test.testIndex }} />
          {' - '}
          <I18nText path="test.time" values={{ time: test.testTime }} />
        </Typography>
        <SolutionStatus status={test.status!} />
      </AccordionTrigger>
      <AccordionContent>
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {state.testInfo && (
          <div>
            <Typography tag="p">
              <I18nText path="test.input" />
            </Typography>
            <CodeEditor
              className="mt-5"
              value={state.testInfo.testInput}
              language="java"
              placeholder="Input"
              readOnly
              padding={15}
              style={{
                backgroundColor: '#f5f5f5',
                fontFamily:
                  'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
              }}
            />
            <Typography tag="p">
              <I18nText path="test.output" />
            </Typography>
            <CodeEditor
              className="mt-5"
              value={state.testInfo.testOutput}
              language="java"
              placeholder="Output"
              readOnly
              padding={15}
              style={{
                backgroundColor: '#f5f5f5',
                fontFamily:
                  'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
              }}
            />
            <Typography tag="p">
              <I18nText path="test.time" values={{ time: state.testInfo.testTime }} />
            </Typography>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  )
}
