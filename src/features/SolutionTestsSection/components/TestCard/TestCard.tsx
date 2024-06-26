import { TestDto } from '@/generated/solution-api'
import * as fns from 'date-fns'
import { I18nText, SolutionStatus } from '@/components/common'
import { Typography } from '@/components/ui'

interface TestCardProps {
  test: TestDto
}

export const TestCard = ({ test }: TestCardProps) => (
  <div className="flex items-center">
    <Typography tag="p" className="[&:not(:first-child)]:mt-0">
      <I18nText path="task.solutionTestCasesSection.testIndex" values={{ index: test.testIndex }} />
      {'  '}
      {test.testTime && fns.format(new Date(test.testTime), 'dd-MM-yyyy HH:mm')}
    </Typography>
    <SolutionStatus status={test.status!} />
  </div>
)
