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
  Input,
  PasswordInput
} from '@/components/ui'
import { useLoginPage } from './hooks/useLoginPage'

export const LoginPage = () => {
  const i18n = useI18n()
  const { state, form, functions } = useLoginPage()

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit}>
        <fieldset disabled={state.isLoading} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.email.label" />
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.email.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form?.formState?.errors?.email && (
                    <I18nText path={form.formState.errors.email.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <I18nText path="field.password.label" />
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.password.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.password && (
                    <I18nText path={form.formState.errors.password.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" loading={state.isLoading}>
            <I18nText path="button.login" />
          </Button>
        </fieldset>
      </form>
    </Form>
  )
}
