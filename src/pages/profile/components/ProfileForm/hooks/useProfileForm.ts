import { DefaultResponseObject, UserRepresentation } from '@/generated/user-api'
import { usePostUserLoginMutation } from '@/utils/api/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { ProfileSchema, profileSchema } from '../constants/profileSchema'

interface UseProfileFormParams {
  profile: UserRepresentation
}

export const useProfileForm = ({ profile }: UseProfileFormParams) => {
  const profileForm = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: profile.firstName ?? '',
      lastName: profile.lastName ?? '',
      username: profile.username ?? '',
      email: profile.email ?? ''
    }
  })

  // TODO ?
  const postUserLoginMutation = usePostUserLoginMutation({
    options: {
      onError: (error: AxiosError<DefaultResponseObject>) => {
        if (error.response?.data?.errors) {
          Object.entries(error.response.data.errors).forEach(([errorKey, errorString]) => {
            profileForm.setError(errorKey as keyof ProfileSchema, {
              message: errorString[0]
            })
          })
        }
      }
    }
  })

  const onSubmit = profileForm.handleSubmit(() => {
    // TODO rework
    // await postUserLoginMutation.mutateAsync(values)
  })

  return {
    state: {
      isLoading: postUserLoginMutation.isPending || profileForm.formState.isSubmitting
    },
    form: profileForm,
    functions: { onSubmit }
  }
}
