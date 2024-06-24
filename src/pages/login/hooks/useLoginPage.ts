import { DefaultResponseObject } from '@/generated/user-api'
import { getUserProfile } from '@/utils/api'
import { usePostUserLoginMutation } from '@/utils/api/hooks'
import { ROUTES } from '@/utils/constants'
import { useSessionContext, useUserContext } from '@/utils/contexts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDidUpdate } from '@siberiacancode/reactuse'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginSchema, loginSchema } from '../constants/loginSchema'

export const useLoginPage = () => {
  const navigate = useNavigate()
  const sessionContext = useSessionContext()
  const userContext = useUserContext()

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: ''
    }
  })

  const postUserLoginMutation = usePostUserLoginMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            loginForm.setError(errorKey as keyof LoginSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  useDidUpdate(() => {
    if (sessionContext.session.isAuth) navigate(ROUTES.ROOT)
  }, [sessionContext.session.isAuth])

  const onSubmit = loginForm.handleSubmit(async (values) => {
    const postUserLoginMutationResponse = await postUserLoginMutation.mutateAsync(values)
    sessionContext.login({
      accessToken: postUserLoginMutationResponse.data.data!.accessToken!,
      refreshToken: postUserLoginMutationResponse.data.data!.refreshToken!
    })

    const getUserProfileResponse = await getUserProfile()

    userContext.setUser({
      login: values.login,
      roles: getUserProfileResponse.data.data?.roles ?? [],
      experience: getUserProfileResponse.data.data?.experience ?? 0
    })
    navigate(ROUTES.ROOT)
  })

  return {
    state: {
      isLoading: postUserLoginMutation.isPending || loginForm.formState.isSubmitting
    },
    form: loginForm,
    functions: { onSubmit }
  }
}
