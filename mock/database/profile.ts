import { UserDto } from '../../generated/user-api'

export const PROFILE: Record<string, UserDto> = {
  ADMIN: {
    id: '1',
    keyCloakId: 'keyCloakId',
    username: 'Megaadmin',
    email: 'email@example.com',
    firstName: 'firstName',
    lastName: 'lastName',
    experience: 1000,
    roles: ['ADMIN']
  }
}
