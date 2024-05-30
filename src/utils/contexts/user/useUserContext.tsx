import React from 'react'
import { UserContext } from './UserContext'

export const useUserContext = () => React.useContext(UserContext)
