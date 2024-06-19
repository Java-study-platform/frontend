import * as z from 'zod'

export const editTestCaseSchema = z.object({
  expectedInput: z.string().min(1, {
    message: 'validation.required'
  }),
  expectedOutput: z.string().min(1, {
    message: 'validation.required'
  })
})

export type EditTestCaseSchema = z.infer<typeof editTestCaseSchema>
