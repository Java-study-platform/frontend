import { DefaultResponseObject } from '@/generated/user-api'
import { usePostUserRegisterMutation } from '@/utils/api/hooks'
import { ROUTES } from '@/utils/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RegisterSchema, registerSchema } from '../constants/registerSchema'

export const useRegisterPage = () => {
  const navigate = useNavigate()

  const registerForm = useForm<RegisterSchema>({
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

  const postUserRegisterMutation = usePostUserRegisterMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            registerForm.setError(errorKey as keyof RegisterSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = registerForm.handleSubmit(async (values) => {
    await postUserRegisterMutation.mutateAsync({ ...values, username: values.username.trim() })
    navigate(ROUTES.LOGIN)
  })

  return {
    state: {
      isLoading: postUserRegisterMutation.isPending || registerForm.formState.isSubmitting
    },
    form: registerForm,
    functions: { onSubmit }
  }
}
