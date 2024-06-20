import { Client, Stomp, StompConfig, StompSubscription } from '@stomp/stompjs'
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from 'react'
import SockJS from 'sockjs-client'
import { useSessionContext } from '../session'

export interface Subscriptions {
  [key: string]: StompSubscription
}

export interface StompContextState {
  isConnected: boolean
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
  const sessionContext = useSessionContext()
  const [stompClient] = useState(() => {
    const sock = new SockJS(config.brokerURL!, {})
    const client = Stomp.over(sock)

    return client
  })
  const [subscriptions, setSubscriptions] = useState({})
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    if (!stompClient) return

    stompClient.connect(
      {
        Authorization: 'Bearer ' + sessionContext.session.accessToken
      },
      () => {
        setIsConnected(true)
        onConnected?.(stompClient)
        console.log('#stompClient.connect connected')
      },
      (error: FIXME) => {
        console.error(error)
      }
    )
    stompClient.activate()

    return () => {
      stompClient?.disconnect()
      stompClient?.deactivate()
    }
  }, [stompClient])

  const value = useMemo(
    () => ({ stompClient, subscriptions, setSubscriptions, isConnected }),
    [stompClient, subscriptions, setSubscriptions, isConnected]
  )

  return <StompContext.Provider value={value}>{children}</StompContext.Provider>
}
