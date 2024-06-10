import { UserRepresentation } from '@/generated/user-api'
import { useI18n } from '@/utils/contexts'
import { I18nText } from '@/components/common'
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  PasswordInput
} from '@/components/ui'
import { useProfileForm } from './hooks/useProfileForm'

interface ProfileFormProps {
  profile: UserRepresentation
}

export const ProfileForm = ({ profile }: ProfileFormProps) => {
  const i18n = useI18n()
  const { state, form, functions } = useProfileForm({ profile })

  return (
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
                <FormDescription>
                  <I18nText path="field.username.description" />
                </FormDescription>
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
                  <PasswordInput
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.email.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.email && (
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
                  <PasswordInput
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.firstName.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.firstName && (
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
                  <PasswordInput
                    disabled={state.isLoading}
                    placeholder={i18n.formatMessage({ id: 'field.lastName.placeholder' })}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {form.formState?.errors?.lastName && (
                    <I18nText path={form.formState.errors.lastName.message as LocaleMessageId} />
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" loading={state.isLoading} className="w-full">
            <I18nText path="button.update" />
          </Button>
        </fieldset>
      </form>
    </Form>
  )
}
