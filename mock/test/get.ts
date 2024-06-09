import { RestRequestConfig } from 'mock-config-server';

export const getTestConfig: RestRequestConfig = {
  path: '/test',
  method: 'get',
  routes: [{
    data: 'success'
  }]
}