import * as z from 'zod'

export const createCategorySchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required'
  }),
  description: z.string().min(1, {
    message: 'validation.required'
  })
})

export type CreateCategorySchema = z.infer<typeof createCategorySchema>
