import { UserDto } from '../../generated/user-api'

export const PROFILE: Record<string, UserDto> = {
  ADMIN: {
    keyCloakId: 'keyCloakId',
    username: 'username',
    email: 'email@example.com',
    firstName: 'firstName',
    lastName: 'lastName',
    roles: ['admin']
  }
}
