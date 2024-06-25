import { SolutionTestsSection } from '@/features/SolutionTestsSection'
import { ReloadIcon } from '@radix-ui/react-icons'
import CodeEditor from '@uiw/react-textarea-code-editor'
import { I18nText, SolutionStatus } from '@/components/common'
import { Typography } from '@/components/ui'
import { useSolutionPage } from './hooks/useSolutionPage'

export const SolutionPage = () => {
  const { state } = useSolutionPage()

  return (
    <div className="flex">
      <div className="container max-w-[750px] mdx:mx-auto mdx:max-w-[300px]">
        <div className="flex items-center gap-4">
          <Typography tag="h1" variant="h1">
            <I18nText path="solution.title" />
          </Typography>
          {state.solution?.status && <SolutionStatus status={state.solution?.status} />}
        </div>
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        {state.solution && (
          <div className="mt-10">
            <Typography tag="h2" variant="h2">
              <I18nText path="solution.code" />
            </Typography>
            <CodeEditor
              className="mt-5"
              value={state.solution.solutionCode}
              language="java"
              placeholder="Please enter java code."
              readOnly
              padding={15}
              style={{
                backgroundColor: '#f5f5f5',
                fontFamily:
                  'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
              }}
            />
            <SolutionTestsSection moreInfo solutionId={state.solution.id!} />
          </div>
        )}
      </div>
    </div>
  )
}
