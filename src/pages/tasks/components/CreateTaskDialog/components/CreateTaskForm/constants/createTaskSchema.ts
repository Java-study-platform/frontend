import * as z from 'zod'

export const createTaskSchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required'
  }),
  description: z.string().min(1, {
    message: 'validation.required'
  }),
  experienceAmount: z.string().min(1, {
    message: 'validation.required'
  }),
  timeLimit: z.string().min(1, {
    message: 'validation.required'
  }),
  topicId: z.string().min(1, {
    message: 'validation.required'
  })
})

export type CreateTaskSchema = z.infer<typeof createTaskSchema>
