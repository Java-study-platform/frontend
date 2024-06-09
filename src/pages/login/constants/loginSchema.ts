import * as z from 'zod'

export const loginSchema = z.object({
  login: z.string().min(1, {
    message: 'validation.required'
  }),
  password: z.string().min(1, {
    message: 'validation.required'
  })
})

export type LoginSchema = z.infer<typeof loginSchema>
