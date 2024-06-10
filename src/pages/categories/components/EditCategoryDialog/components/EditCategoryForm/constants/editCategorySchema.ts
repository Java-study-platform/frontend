import * as z from 'zod'

export const editCategorySchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required'
  }),
  description: z.string().min(1, {
    message: 'validation.required'
  })
})

export type EditCategorySchema = z.infer<typeof editCategorySchema>
