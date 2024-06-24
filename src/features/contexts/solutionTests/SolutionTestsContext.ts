import React from 'react'

interface SolutionTestsContextParams {
  solutionId: string
  setSolutionId: (solutionId: string) => void
}

export const SolutionTestsContext = React.createContext<SolutionTestsContextParams>({
  solutionId: '',
  setSolutionId: () => {}
})
