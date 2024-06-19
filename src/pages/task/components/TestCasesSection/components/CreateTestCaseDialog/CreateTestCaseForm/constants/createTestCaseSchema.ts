import * as z from 'zod'

export const createTestCaseSchema = z.object({
  expectedInput: z.string().min(1, {
    message: 'validation.required'
  }),
  expectedOutput: z.string().min(1, {
    message: 'validation.required'
  })
})

export type CreateTestCaseSchema = z.infer<typeof createTestCaseSchema>
