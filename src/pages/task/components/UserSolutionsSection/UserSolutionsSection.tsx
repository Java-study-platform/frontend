import { ROUTES } from '@/utils/constants'
import { ReloadIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { I18nText, SolutionStatus } from '@/components/common'
import { Label, RadioGroup, RadioGroupItem, ScrollArea, Typography } from '@/components/ui'
import { useUserSolutionsSection } from './hooks/useUserSolutionsSection'

interface UserSolutionsSectionProps {
  taskId: string
}

export const UserSolutionsSection = ({ taskId }: UserSolutionsSectionProps) => {
  const { state, functions } = useUserSolutionsSection({ taskId })

  return (
    <section className="mt-10">
      <Typography tag="h2" variant="h2">
        <I18nText path="task.userSolutionsSection.title" />
      </Typography>
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      {state.solutions?.length && (
        <RadioGroup
          defaultValue={state.selectedSolutionId ?? state.solutions[0].id}
          onValueChange={functions.setSelectedSolutionId}
          className="flex h-[300px] flex-col"
        >
          <ScrollArea className="h-full">
            {state.solutions.map((solution, index) => (
              <div key={solution.id}>
                <RadioGroupItem value={solution.id!} id={solution.id} className="peer sr-only" />
                <Label
                  htmlFor={solution.id}
                  className="flex items-center gap-2 border-2 p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Link to={ROUTES.SOLUTION(solution.id)}>
                    <Typography tag="p" variant="body1">
                      <I18nText path="task.userSolutionsSection.solutionIndex" values={{ index }} />
                    </Typography>
                  </Link>
                  <SolutionStatus status={solution.status!} />
                </Label>
              </div>
            ))}
          </ScrollArea>
        </RadioGroup>
      )}
    </section>
  )
}
