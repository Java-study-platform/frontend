import { TestCaseDto } from '@/generated/core-api'
import { useUserContext } from '@/utils/contexts'
import CodeEditor from '@uiw/react-textarea-code-editor'
import { FilePenIcon, TrashIcon } from 'lucide-react'
import { I18nText } from '@/components/common'
import { Button, Card, CardContent, Typography } from '@/components/ui'
import { EditTestCaseDialog } from '../EditTestCaseDialog/EditTestCaseDialog'

interface TaskCardProps {
  testCase: TestCaseDto
  onDeleteClick: (id: string) => void
}

export const TestCaseCard = ({ testCase, onDeleteClick }: TaskCardProps) => {
  const userContext = useUserContext()

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-4">
        <Typography variant="large">
          <I18nText
            path="task.testCasesSection.expectedInput"
            values={{ expectedInput: testCase.expectedInput }}
          />
          <CodeEditor
            value={testCase.expectedInput}
            className="mt-3"
            language="java"
            readOnly
            padding={15}
            style={{
              backgroundColor: '#f5f5f5',
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
            }}
          />
        </Typography>
        <Typography variant="large">
          <I18nText
            path="task.testCasesSection.expectedOutput"
            values={{ expectedOutput: testCase.expectedOutput }}
          />
          <CodeEditor
            value={testCase.expectedOutput}
            className="mt-3"
            language="java"
            readOnly
            padding={15}
            style={{
              backgroundColor: '#f5f5f5',
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
            }}
          />
        </Typography>
        <Typography variant="large">
          <I18nText path="task.testCasesSection.timeLimit" values={{ timeLimit: testCase.timeLimit }} />
        </Typography>
        {userContext.user?.isAdmin && (
          <div className="flex gap-2">
            <EditTestCaseDialog
              testCase={testCase}
              trigger={
                <Button variant="secondary" size="icon" aria-label="Edit">
                  <FilePenIcon className="h-4 w-4" />
                </Button>
              }
            />
            <Button
              variant="destructive"
              size="icon"
              aria-label="Delete"
              onClick={() => onDeleteClick(testCase.id)}
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
