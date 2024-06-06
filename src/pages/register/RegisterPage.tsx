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
import { useRegisterPage } from './hooks/useRegisterPage'

const LoginLink = (children: React.ReactNode) => (
  <Link to={ROUTES.LOGIN} className="font-medium underline">
    {children}
  </Link>
)

export const RegisterPage = () => {
  const i18n = useI18n()
  const { state, form, functions } = useRegisterPage()

  return (
    <div className="container max-w-[600px]">
      <Typography tag="h1" variant="h1">
        <I18nText path="register.title" />
      </Typography>
      <Form {...form}>
        <form onSubmit={functions.onSubmit} className="mt-7">
          <fieldset disabled={state.isLoading} className="space-y-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path="field.username.label" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={state.isLoading}
                      placeholder={i18n.formatMessage({ id: 'field.username.placeholder' })}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form?.formState?.errors?.username && (
                      <I18nText path={form.formState.errors.username.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path="field.firstName.label" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={state.isLoading}
                      placeholder={i18n.formatMessage({ id: 'field.firstName.placeholder' })}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form?.formState?.errors?.firstName && (
                      <I18nText path={form.formState.errors.firstName.message as LocaleMessageId} />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path="field.lastName.label" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={state.isLoading}
                      placeholder={i18n.formatMessage({ id: 'field.lastName.placeholder' })}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form?.formState?.errors?.lastName && (
                      <I18nText path={form.formState.errors.lastName.message as LocaleMessageId} />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <I18nText path="field.confirmPassword.label" />
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      disabled={state.isLoading}
                      placeholder={i18n.formatMessage({ id: 'field.confirmPassword.placeholder' })}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState?.errors?.confirmPassword && (
                      <I18nText
                        path={form.formState.errors.confirmPassword.message as LocaleMessageId}
                      />
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" variant="default" loading={state.isLoading}>
              <I18nText path="button.register" />
            </Button>

            <Typography tag="p" variant="sub1">
              <I18nText path="register.haveAccount" values={{ loginLink: LoginLink }} />
            </Typography>
          </fieldset>
        </form>
      </Form>
    </div>
  )
}
