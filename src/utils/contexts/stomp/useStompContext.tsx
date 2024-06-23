import React from 'react'
import { StompContext } from './StompProvider'

export const useStompContext = () => React.useContext(StompContext)
