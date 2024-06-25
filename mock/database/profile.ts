import { UserDto } from '../../generated/user-api'

export const PROFILE: Record<string, UserDto | UserDto[]> = {
  ADMIN: {
    keyCloakId: 'keyCloakId',
    username: 'admin',
    email: 'email@example.com',
    firstName: 'firstName',
    lastName: 'lastName',
    experience: 1000,
    roles: ['USER', 'ADMIN']
  },
  MENTOR: {
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
