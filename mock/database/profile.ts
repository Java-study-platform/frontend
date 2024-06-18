import { UserDto } from '../../generated/user-api'

export const PROFILE: Record<string, UserDto> = {
  ADMIN: {
    keyCloakId: 'keyCloakId',
    username: 'Mega admin',
    email: 'email@example.com',
    firstName: 'firstName',
    lastName: 'lastName',
    experience: 1000,
    roles: ['admin']
  }
}
