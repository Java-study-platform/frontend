import { ROUTES } from '@/utils/constants'
import { useUserContext } from '@/utils/contexts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginSchema, loginSchema } from '../constants/loginSchema'

export const useLoginPage = () => {
  const navigate = useNavigate()
  const userContext = useUserContext()

  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const postAuthLoginEmailMutation = usePostAuthLoginEmailMutation()

  const onSubmit = loginForm.handleSubmit(async (values) => {
    const postAuthLoginEmailMutationResponse = await postAuthLoginEmailMutation.mutateAsync({
      params: values
    })

    userContext.login({ token: postAuthLoginEmailMutationResponse.token, email: values.email })
    navigate(ROUTES.ROOT)
  })

  return {
    state: {
      isLoading: postAuthLoginEmailMutation.isPending || loginForm.formState.isSubmitting
    },
    form: loginForm,
    functions: { onSubmit }
  }
}
