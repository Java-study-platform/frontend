import { Client, Stomp, StompConfig, StompSubscription } from '@stomp/stompjs'
import { createContext, Dispatch, FC, ReactNode, SetStateAction, useEffect, useState } from 'react'
import SockJS from 'sockjs-client'

export interface Subscriptions {
  [key: string]: StompSubscription
}

export interface StompContextState {
  stompClient: Client | null
  subscriptions: Subscriptions
  setSubscriptions: Dispatch<SetStateAction<Subscriptions>>
}

const defaultValue = {
  isConnected: false,
  stompClient: null,
  subscriptions: {},
  setSubscriptions: () => {}
}

export const StompContext = createContext<StompContextState>(defaultValue)

interface Props {
  children: ReactNode
  config: StompConfig
  onConnected?: (client: Client) => void
}

export const StompProvider: FC<Props> = ({ children, config, onConnected }) => {
  const [stompClient] = useState(() => {
    const sock = new SockJS(config.brokerURL!, {})
    const client = Stomp.over(sock)
    return client
  })
  const [subscriptions, setSubscriptions] = useState({})

  useEffect(() => {
    if (!stompClient) return

    stompClient.activate()
    onConnected?.(stompClient)
    return () => {
      stompClient?.deactivate()
    }
  }, [stompClient])

  return (
    <StompContext.Provider
      value={{
        stompClient,
        subscriptions,
        setSubscriptions
      }}
    >
      {children}
    </StompContext.Provider>
  )
}
