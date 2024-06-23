import { SolutionDto } from '@/generated/solution-api'

export const defaultConvertUsers = (solutions: SolutionDto[]) =>
  solutions.map((solution) => ({
    label: solution.username!,
    value: solution.id!
  }))
