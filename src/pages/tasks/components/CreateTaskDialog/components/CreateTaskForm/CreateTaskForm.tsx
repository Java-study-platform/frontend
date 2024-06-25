import { useI18n } from '@/utils/contexts'
import { TopicsCombobox } from '@/components/comboboxes'
import { I18nText } from '@/components/common'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  NumberFormatInput,
  RichTextEditor
} from '@/components/ui'
import { useCreateTaskForm } from './hooks/useCreateTaskForm'

interface CreateTaskFormProps {
  onSubmitted: (name: string) => void
}

export const CreateTaskForm = ({ onSubmitted }: CreateTaskFormProps) => {
  const i18n = useI18n()
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
            render={() => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.description.label" />
                </FormLabel>
                <FormControl>
                  <RichTextEditor value={state.description} onChange={functions.setDescription} />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.description && (
                    <I18nText path={form.formState.errors.description.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experienceAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.experienceAmount.label" />
                </FormLabel>
                <FormControl>
                  <NumberFormatInput
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.experienceAmount.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.experienceAmount && (
                    <I18nText path={form.formState.errors.experienceAmount.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeLimit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.timeLimit.label" />
                </FormLabel>
                <FormControl>
                  <NumberFormatInput
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.timeLimit.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.timeLimit && (
                    <I18nText path={form.formState.errors.timeLimit.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topicId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.chooseTopic.label" />
                </FormLabel>
                {/* // TODO */}
                <TopicsCombobox
                  value={field.value}
                  onSelect={(newValue) => form.setValue('topicId', newValue ?? '')}
                  className="w-full"
                />
                <FormMessage>
                  {form.formState?.errors?.topicId && (
                    <I18nText path={form.formState.errors.topicId.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" loading={state.isLoading} className="w-full">
            <I18nText path="button.create" />
          </Button>
        </fieldset>
      </form>
    </Form>
  )
}
