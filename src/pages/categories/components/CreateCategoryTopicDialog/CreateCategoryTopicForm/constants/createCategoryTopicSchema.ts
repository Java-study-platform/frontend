import * as z from 'zod'

export const createCategoryTopicSchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required'
  })
})

export type CreateCategoryTopicSchema = z.infer<typeof createCategoryTopicSchema>
