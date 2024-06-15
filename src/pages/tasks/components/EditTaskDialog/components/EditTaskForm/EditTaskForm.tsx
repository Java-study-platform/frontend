import { TaskDTO } from '@/generated/core-api'
import { useI18n } from '@/utils/contexts'
import { I18nText } from '@/components/common'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components/ui'
import { useEditTaskForm } from './hooks/useEditTaskForm'

interface EditTaskFormProps {
  task: TaskDTO
  onSubmitted: (name: string) => void
}

export const EditTaskForm = ({ task, onSubmitted }: EditTaskFormProps) => {
  const i18n = useI18n()
  const { state, form, functions } = useEditTaskForm({ task, onSubmitted })

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit}>
        <fieldset disabled={state.isLoading} className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.name.label" />
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.name.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form?.formState?.errors?.name && (
                    <I18nText path={form.formState.errors.name.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.description.label" />
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.description.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.description && (
                    <I18nText path={form.formState.errors.description.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          {/* // TODO add exp and topic select */}
          <Button type="submit" size="lg" loading={state.isLoading} className="w-full">
            <I18nText path="button.edit" />
          </Button>
        </fieldset>
      </form>
    </Form>
  )
}