import * as z from 'zod'

export const editTopicSchema = z.object({
  name: z.string().min(1, {
    message: 'validation.required'
  }),
  material: z.string()
})

export type EditTopicSchema = z.infer<typeof editTopicSchema>
