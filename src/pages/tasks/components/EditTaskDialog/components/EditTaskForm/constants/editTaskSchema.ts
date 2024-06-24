import * as z from 'zod'

export const editTaskSchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required'
  }),
  description: z.string(),
  experienceAmount: z.string().min(1, {
    message: 'validation.required'
  }),
  timeLimit: z.string().min(1, {
    message: 'validation.required'
  })
})

export type EditTaskSchema = z.infer<typeof editTaskSchema>
