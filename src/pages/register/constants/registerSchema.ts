import * as z from 'zod'

export const registerSchema = z
  .object({
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
      }),
    password: z.string().min(1, {
      message: 'validation.required'
    }),
    confirmPassword: z.string().min(1, {
      message: 'validation.required'
    })
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'validation.confirmPassword.match',
    path: ['confirmPassword']
  })

export type RegisterSchema = z.infer<typeof registerSchema>
