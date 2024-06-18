import { SolutionDto } from '../../generated/solution-api'

export const SOLUTIONS: Record<SolutionDto['status'], SolutionDto> = {
  OK: {
    id: '1',
    solutionCode: 'function() { return 1 }',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'OK'
  },
  PENDING: {
    id: '2',
    solutionCode: 'solution code',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'PENDING'
  },
  WRONG_ANSWER: {
    id: '3',
    solutionCode: 'solution code',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'WRONG_ANSWER'
  },
  RUNTIME_ERROR: {
    id: '4',
    solutionCode: 'solution code',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'RUNTIME_ERROR'
  },
  MALICIOUS_CODE: {
    id: '5',
    solutionCode: 'solution code',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'MALICIOUS_CODE'
  },
  TIME_LIMIT: {
    id: '6',
    solutionCode: 'solution code',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'TIME_LIMIT'
  },
  COMPILATION_ERROR: {
    id: '7',
    solutionCode: 'solution code',
    createTime: '2022-01-01T00:00:00.000Z',
    username: 'username',
    taskId: '1',
    testIndex: 0,
    status: 'COMPILATION_ERROR'
  }
}
