import { MockServerConfig } from 'mock-config-server';
import * as requestConfigs from './mock'

const mockServerConfig: MockServerConfig = {
  baseUrl:'/api',
  rest: {
    configs: Object.values(requestConfigs)
  },
  cors: {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
  },
  interceptors: {
    request: async (params) => {
      await params.setDelay(1000)
    }
  }
}


export default mockServerConfig;