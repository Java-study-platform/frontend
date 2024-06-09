import React from 'react'
import { SessionContext } from './SessionContext'

export const useSessionContext = () => React.useContext(SessionContext)
