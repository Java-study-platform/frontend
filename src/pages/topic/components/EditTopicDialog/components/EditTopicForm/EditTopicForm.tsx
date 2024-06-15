import { TopicDTO } from '@/generated/core-api'
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
  RichTextEditor
} from '@/components/ui'
import { useEditTopicForm } from './hooks/useEditTopicForm'

interface EditTopicFormProps {
  onSubmitted: (name: string) => void
  topic: TopicDTO
}

export const EditTopicForm = ({ topic, onSubmitted }: EditTopicFormProps) => {
  const { state, ref, form, functions } = useEditTopicForm({ topic, onSubmitted })

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
            name="material"
            render={() => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.material.label" />
                </FormLabel>
                <FormControl>
                  <RichTextEditor editorRef={ref.materialEditor} />
                </FormControl>
                <FormMessage>
                  {form?.formState?.errors?.material && (
                    <I18nText path={form.formState.errors.material.message as LocaleMessageId} />
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
