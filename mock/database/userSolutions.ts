import { SolutionDto } from '../../generated/solution-api'

export const USER_SOLUTIONS: SolutionDto[] = [
  {
    id: '1',
    solutionCode: 'function() { return 1 }',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'OK'
  },
  {
    id: '1',
    solutionCode: 'function() { return 1 }',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 1,
    status: 'WRONG_ANSWER'
  }
]
