import * as z from 'zod'

export const createCategoryTopicSchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required'
  }),
  material: z.string()
})

export type CreateCategoryTopicSchema = z.infer<typeof createCategoryTopicSchema>
