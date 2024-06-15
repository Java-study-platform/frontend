import { TopicDTO } from '../../generated/core-api'
import { TASKS } from './tasks'

export const TOPICS: TopicDTO[] = [
  {
    id: '1f6a2e17-3d5b-41a4-9e7e-98ef3e0ed7d1',
    name: 'Artificial Intelligence',
    categoryId: '1d6e2d16-3d5b-41b4-9e7e-98ef3e0ed7d1',
    authorLogin: 'tech_guru',
    tasks: TASKS.slice(0, 3),
    material: 'material test',
    createTime: '2023-01-15T10:00:00Z',
    modifiedDate: '2023-06-01T12:30:00Z'
  },
  {
    id: '2g7b3f28-4e6c-42b5-a0f1-99fg4h1ij6k2',
    name: 'Nutrition Basics',
    categoryId: '2f1a4c86-89c1-4b72-8f2f-bf2dc92b4c10',
    authorLogin: 'health_expert',
    material: 'material test',
    createTime: '2023-02-10T11:30:00Z',
    modifiedDate: '2023-05-05T14:00:00Z'
  },
  {
    id: '3h8c4g39-5f7d-53c6-b1g2-88hi5j2kl7m3',
    name: 'European Travel Tips',
    categoryId: '3c2e5d14-32b7-498f-90c3-b3f3f4c7b5e2',
    authorLogin: 'traveler_123',
    material: 'material test',
    createTime: '2023-03-20T12:45:00Z',
    modifiedDate: '2023-04-10T15:30:00Z'
  },
  {
    id: '4i9d5h40-6g8e-64d7-c2h3-77ij6k3lm8n4',
    name: 'Vegan Recipes',
    categoryId: '4d4e8a26-56d8-41d2-8c7f-2b4f4e4c8f24',
    authorLogin: 'chef_master',
    material: 'material test',
    createTime: '2023-04-25T13:15:00Z',
    modifiedDate: '2023-05-20T16:45:00Z'
  },
  {
    id: '5j1e6i51-7h9f-75e8-d3i4-66jk7l4mn9o5',
    name: 'Online Learning Platforms',
    categoryId: '5e6a7b46-64e9-4c12-9d8f-3c5d6f5b9e36',
    authorLogin: 'educator_pro',
    tasks: TASKS.slice(3, 5),
    material: 'material test',
    createTime: '2023-05-05T14:30:00Z',
    modifiedDate: '2023-06-10T17:15:00Z'
  },
  {
    id: '6k2f7j62-8i0g-86f9-e4j5-55kl8m5no0p6',
    name: 'Investment Strategies',
    categoryId: '6f7b8c66-78fa-4d23-ae9f-4d6e7f6e0f48',
    authorLogin: 'finance_guru',
    material: 'material test',
    createTime: '2023-06-15T15:45:00Z',
    modifiedDate: '2023-07-05T18:30:00Z'
  },
  {
    id: '7l3g8k73-9j1h-97g0-f5k6-44lm9n6op1q7',
    name: 'Home Workout Plans',
    categoryId: '7g8c9d86-89fb-4e34-bf8f-5e7f8f7e1f5a',
    authorLogin: 'fitness_freak',
    material: 'material test',
    createTime: '2023-07-25T16:00:00Z',
    modifiedDate: '2023-08-10T19:45:00Z'
  },
  {
    id: '8m4h9l84-0k2i-08h1-g6l7-33mn0o7pq2r8',
    name: 'Minimalist Living',
    categoryId: '8h9d1a96-9a0c-4f45-cf9f-6f8g9g8e2f6c',
    authorLogin: 'life_coach',
    material: 'material test',
    createTime: '2023-08-10T17:15:00Z',
    modifiedDate: '2023-09-10T20:30:00Z'
  },
  {
    id: '9n5i0m95-1l3j-19i2-h7m8-22no1pq3r4s9',
    name: 'Startup Funding',
    categoryId: '9i1e2b16-0b1d-4f56-df0f-7g9h1h9f3g7d',
    authorLogin: 'biz_mogul',
    tasks: TASKS.slice(5, 10),
    material: 'material test',
    createTime: '2023-09-15T18:30:00Z',
    modifiedDate: '2023-10-15T21:15:00Z'
  },
  {
    id: '0o6j1n06-2m4k-20j3-i8n9-11op2qr4s5t0',
    name: 'Oscar Winners',
    categoryId: '0j2f3c26-1c2e-4f67-ef1f-8h0i2i0g4h8e',
    authorLogin: 'entertainment_buff',
    material: 'material test',
    createTime: '2023-10-25T19:45:00Z',
    modifiedDate: '2023-11-10T22:00:00Z'
  },

  {
    id: '1f6a2e17-3d5b-41a4-9e7e-98ef3e0ed7d2',
    name: 'Artificial Intelligence 2',
    categoryId: '1d6e2d16-3d5b-41b4-9e7e-98ef3e0ed7d1',
    authorLogin: 'tech_guru',
    tasks: TASKS.slice(0, 3),
    material: 'material test',
    createTime: '2023-01-15T10:00:00Z',
    modifiedDate: '2023-06-01T12:30:00Z'
  },
  {
    id: '2g7b3f28-4e6c-42b5-a0f1-99fg4h1ij6k3',
    name: 'Nutrition Basics 2',
    categoryId: '2f1a4c86-89c1-4b72-8f2f-bf2dc92b4c10',
    authorLogin: 'health_expert',
    material: 'material test',
    createTime: '2023-02-10T11:30:00Z',
    modifiedDate: '2023-05-05T14:00:00Z'
  },
  {
    id: '3h8c4g39-5f7d-53c6-b1g2-88hi5j2kl7m4',
    name: 'European Travel Tips 2',
    categoryId: '3c2e5d14-32b7-498f-90c3-b3f3f4c7b5e2',
    authorLogin: 'traveler_123',
    material: 'material test',
    createTime: '2023-03-20T12:45:00Z',
    modifiedDate: '2023-04-10T15:30:00Z'
  },
  {
    id: '4i9d5h40-6g8e-64d7-c2h3-77ij6k3lm8n5',
    name: 'Vegan Recipes 2',
    categoryId: '4d4e8a26-56d8-41d2-8c7f-2b4f4e4c8f24',
    authorLogin: 'chef_master',
    material: 'material test',
    createTime: '2023-04-25T13:15:00Z',
    modifiedDate: '2023-05-20T16:45:00Z'
  },
  {
    id: '5j1e6i51-7h9f-75e8-d3i4-66jk7l4mn9o6',
    name: 'Online Learning Platforms 2',
    categoryId: '5e6a7b46-64e9-4c12-9d8f-3c5d6f5b9e36',
    authorLogin: 'educator_pro',
    tasks: TASKS.slice(3, 5),
    material: 'material test',
    createTime: '2023-05-05T14:30:00Z',
    modifiedDate: '2023-06-10T17:15:00Z'
  },
  {
    id: '6k2f7j62-8i0g-86f9-e4j5-55kl8m5no0p7',
    name: 'Investment Strategies 2',
    categoryId: '6f7b8c66-78fa-4d23-ae9f-4d6e7f6e0f48',
    authorLogin: 'finance_guru',
    material: 'material test',
    createTime: '2023-06-15T15:45:00Z',
    modifiedDate: '2023-07-05T18:30:00Z'
  },
  {
    id: '7l3g8k73-9j1h-97g0-f5k6-44lm9n6op1q8',
    name: 'Home Workout Plans 2',
    categoryId: '7g8c9d86-89fb-4e34-bf8f-5e7f8f7e1f5a',
    authorLogin: 'fitness_freak',
    material: 'material test',
    createTime: '2023-07-25T16:00:00Z',
    modifiedDate: '2023-08-10T19:45:00Z'
  },
  {
    id: '8m4h9l84-0k2i-08h1-g6l7-33mn0o7pq2r9',
    name: 'Minimalist Living 2',
    categoryId: '8h9d1a96-9a0c-4f45-cf9f-6f8g9g8e2f6c',
    authorLogin: 'life_coach',
    material: 'material test',
    createTime: '2023-08-10T17:15:00Z',
    modifiedDate: '2023-09-10T20:30:00Z'
  },
  {
    id: '9n5i0m95-1l3j-19i2-h7m8-22no1pq3r4s5',
    name: 'Startup Funding 2',
    categoryId: '9i1e2b16-0b1d-4f56-df0f-7g9h1h9f3g7d',
    authorLogin: 'biz_mogul',
    tasks: TASKS.slice(5, 10),
    material: 'material test',
    createTime: '2023-09-15T18:30:00Z',
    modifiedDate: '2023-10-15T21:15:00Z'
  },
  {
    id: '0o6j1n06-2m4k-20j3-i8n9-11op2qr4s5t5',
    name: 'Oscar Winners 2',
    categoryId: '0j2f3c26-1c2e-4f67-ef1f-8h0i2i0g4h8e',
    authorLogin: 'entertainment_buff',
    material: 'material test',
    createTime: '2023-10-25T19:45:00Z',
    modifiedDate: '2023-11-10T22:00:00Z'
  }
]
