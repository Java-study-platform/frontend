import { usePostUserRegisterMutation } from '@/utils/api/hooks'
import { ROUTES } from '@/utils/constants'
import { useUserContext } from '@/utils/contexts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RegisterSchema, registerSchema } from '../constants/registerSchema'

export const useRegisterPage = () => {
  const navigate = useNavigate()
  const userContext = useUserContext()

  const loginForm = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const postUserRegisterMutation = usePostUserRegisterMutation()

  const onSubmit = loginForm.handleSubmit(async (values) => {
    const postUserRegisterMutationResponse = await postUserRegisterMutation.mutateAsync({
      params: values
    })

    userContext.login({ token: postUserRegisterMutationResponse.token, email: values.email })
    navigate(ROUTES.ROOT)
  })

  return {
    state: {
      isLoading: postUserRegisterMutation.isPending || loginForm.formState.isSubmitting
    },
    form: loginForm,
    functions: { onSubmit }
  }
}
