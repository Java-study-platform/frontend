import { ROUTES } from '@/utils/constants'
import { useI18n } from '@/utils/contexts'
import { Link } from 'react-router-dom'
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
  PasswordInput,
  Typography
} from '@/components/ui'
import { useLoginPage } from './hooks/useLoginPage'

const RegisterLink = (children: React.ReactNode) => (
  <Link to={ROUTES.REGISTER} className="font-medium underline">
    {children}
  </Link>
)

export const LoginPage = () => {
  const i18n = useI18n()
  const { state, form, functions } = useLoginPage()

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="container max-w-[500px]">
        <Typography tag="h1" variant="h1">
          <I18nText path="login.title" />
        </Typography>
        <Form {...form}>
          <form onSubmit={functions.onSubmit} className="mt-7">
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
              <Button type="submit" size="lg" loading={state.isLoading} className="w-full">
                <I18nText path="button.login" />
              </Button>
              <Typography tag="p" variant="sub1" className="text-center">
                <I18nText path="login.noAccount" values={{ registerLink: RegisterLink }} />
              </Typography>
            </fieldset>
          </form>
        </Form>
      </div>
    </div>
  )
}
