import { RestRequestConfig } from 'mock-config-server'

export const getSolutionTestsInfoByTestIdConfig: RestRequestConfig = {
  path: '/solution/tests/info/:testId',
  method: 'get',
  routes: [
    {
      data: {
        data: {
          id: '1',
          testIndex: 1,
          testTime: '300',
          testInput: 'testInput',
          testOutput: 'testOutput',
          status: 'OK'
        }
      }
    }
  ]
}
