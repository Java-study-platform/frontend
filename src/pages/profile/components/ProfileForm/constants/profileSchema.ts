import * as z from 'zod'

export const profileSchema = z.object({
  username: z.string().min(1, {
    message: 'validation.required'
  }),
  firstName: z.string().min(1, {
    message: 'validation.required'
  }),
  lastName: z.string().min(1, {
    message: 'validation.required'
  }),
  email: z
    .string()
    .min(1, {
      message: 'validation.required'
    })
    .email({
      message: 'validation.email.format'
    })
})

export type ProfileSchema = z.infer<typeof profileSchema>
