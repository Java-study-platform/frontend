import CodeEditor from '@uiw/react-textarea-code-editor'
import { I18nText } from '@/components/common'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui'
import { useCreateTestCaseForm } from './hooks/useCreateTestCaseForm'

interface CreateTestCaseFormProps {
  onSubmitted: () => void
}

export const CreateTestCaseForm = ({ onSubmitted }: CreateTestCaseFormProps) => {
  const { state, form, functions } = useCreateTestCaseForm({ onSubmitted })

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit}>
        <fieldset disabled={state.isLoading} className="space-y-3">
          <FormField
            control={form.control}
            name="expectedInput"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.expectedInput.label" />
                </FormLabel>
                <FormControl>
                  <CodeEditor
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    className="mt-3"
                    language="java"
                    disabled={state.isLoading}
                    padding={15}
                    style={{
                      backgroundColor: '#f5f5f5',
                      fontFamily:
                        'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                    }}
                  />
                </FormControl>
                <FormMessage>
                  {form?.formState?.errors?.expectedInput && (
                    <I18nText path={form.formState.errors.expectedInput.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expectedOutput"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.expectedOutput.label" />
                </FormLabel>
                <FormControl>
                  <CodeEditor
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                    className="mt-3"
                    language="java"
                    padding={15}
                    disabled={state.isLoading}
                    style={{
                      backgroundColor: '#f5f5f5',
                      fontFamily:
                        'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                    }}
                  />
                </FormControl>
                <FormMessage>
                  {form?.formState?.errors?.expectedOutput && (
                    <I18nText path={form.formState.errors.expectedOutput.message as LocaleMessageId} />
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
