import { UserDto } from '../../generated/user-api'

export const PROFILE: Record<string, UserDto | UserDto[]> = {
  ADMIN: {
    id: '43f6d206-07f7-4ab2-b49e-2c82f7b7a5d1',
    keyCloakId: 'keyCloakId',
    username: 'admin',
    email: 'email@example.com',
    firstName: 'firstName',
    lastName: 'lastName',
    experience: 1000,
    roles: ['USER', 'ADMIN']
  },
  MENTOR: {
    id: '8b3d35e5-67f4-4bc0-a3fe-0d2c5790b1fc',
    keyCloakId: 'keyCloakId',
    username: 'mentor',
    email: 'email@example.com',
    firstName: 'firstName',
    lastName: 'lastName',
    experience: 1000,
    roles: ['USER', 'MENTOR']
  },
  USERS: [
    {
      id: 'f8c49e95-9e55-4321-ae88-56a103d4a6c3',
      keyCloakId: 'keyCloakId',
      username: 'user',
      email: 'email@example.com',
      firstName: 'firstName',
      lastName: 'lastName',
      experience: 100,
      roles: ['USER']
    }
  ]
}
