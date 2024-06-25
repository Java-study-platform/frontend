import { TestDto } from '../../generated/solution-api'

export const USER_TESTS: TestDto[] = [
  {
    id: '1',
    testIndex: 1,
    testTime: '200',
    status: 'PENDING'
  },
  {
    id: '2',
    testIndex: 2,
    testTime: '100',
    status: 'OK'
  },
  {
    id: '3',
    testIndex: 3,
    testTime: '300',
    status: 'WRONG_ANSWER'
  },
  {
    id: '4',
    testIndex: 4,
    testTime: '400',
    status: 'RUNTIME_ERROR'
  },
  {
    id: '5',
    testIndex: 5,
    testTime: '500',
    status: 'COMPILATION_ERROR'
  },
  {
    id: '6',
    testIndex: 6,
    testTime: '600',
    status: 'MALICIOUS_CODE'
  },
  {
    id: '7',
    testIndex: 7,
    testTime: '700',
    status: 'TIME_LIMIT'
  },
  {
    id: '8',
    testIndex: 8,
    testTime: '800',
    status: 'PENDING'
  },
  {
    id: '9',
    testIndex: 9,
    testTime: '900',
    status: 'PENDING'
  },
  {
    id: '10',
    testIndex: 10,
    testTime: '1000',
    status: 'PENDING'
  }
]
