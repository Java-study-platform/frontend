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
import { useCreateTaskForm } from './hooks/useCreateTaskForm'

interface CreateTaskFormProps {
  onSubmitted: (name: string) => void
}

export const CreateTaskForm = ({ onSubmitted }: CreateTaskFormProps) => {
  const { state, form, functions } = useCreateTaskForm({ onSubmitted })

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
                  <Input disabled={state.isLoading} {...field} />
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
                  <Input disabled={state.isLoading} {...field} />
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
            <I18nText path="button.create" />
          </Button>
        </fieldset>
      </form>
    </Form>
  )
}
