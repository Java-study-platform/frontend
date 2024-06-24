import { ROUTES } from '@/utils/constants'
import { useI18n } from '@/utils/contexts'
import { ReloadIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { I18nText, SolutionStatus } from '@/components/common'
import { Input, Label, RadioGroup, RadioGroupItem, Typography } from '@/components/ui'
import { useSolutionsSection } from './hooks/useSolutionsSection'

export const SolutionsSection = () => {
  const i18n = useI18n()
  const { state, functions } = useSolutionsSection()

  return (
    <section className="mt-10">
      <Typography tag="h2" variant="h2">
        <I18nText path="task.solutionsSection.title" />
      </Typography>
      <Input
        placeholder={i18n.formatMessage({ id: 'field.solutionUsername.placeholder' })}
        defaultValue={state.username}
        onChange={(event) => functions.setUsername(event.target.value)}
        className="mt-5 max-w-[200px] mdx:max-w-[300px]"
      />
      {state.loading && (
        <div className="mt-2 flex items-center gap-2">
          <I18nText path="common.loading" />
          <ReloadIcon className="h-4 w-4 animate-spin" />
        </div>
      )}
      {!!state.solutions?.length && (
        <RadioGroup className="mt-5 flex max-h-[300px] flex-col">
          <div className="h-full overflow-y-auto">
            {state.solutions.map((solution, index) => (
              <div key={solution.id}>
                <RadioGroupItem value={solution.id!} id={solution.id} className="peer sr-only" />
                <Label
                  htmlFor={solution.id}
                  className=" flex items-center gap-2 border-2 p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Link to={ROUTES.SOLUTION(solution.id)} className="hover:underline">
                    <Typography tag="p" variant="body1">
                      {solution.username}:{' '}
                      <I18nText path="task.userSolutionsSection.solutionIndex" values={{ index }} />
                    </Typography>
                  </Link>
                  <SolutionStatus status={solution.status!} />
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      )}
    </section>
  )
}
