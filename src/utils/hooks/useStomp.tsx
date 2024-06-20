import React from 'react'
import { useStompContext } from '../contexts/stomp/useStompContext'

interface ObjectType<T = string | undefined> {
  [key: string]: T
}

export const useStomp = () => {
  const value = useStompContext()
  const { stompClient, subscriptions, setSubscriptions } = value

  React.useEffect(() => {
    console.log('#stompClient.connected', stompClient?.connected)
  }, [stompClient?.connected])

  const send = (path: string, body: ObjectType) => {
    console.log(`#send message to ${path}`)

    stompClient?.publish({
      destination: path,
      body: JSON.stringify(body)
    })
  }

  const subscribe = <T,>(path: string, callback: (msg: T) => void) => {
    if (!stompClient) return
    if (subscriptions[path]) return

    const subscription = stompClient.subscribe(path, (message) => {
      const body: T = JSON.parse(message.body)
      callback(body)
    })
    console.log('#subscribe to ', path)
    setSubscriptions((prev) => ({ ...prev, [path]: subscription }))
  }

  const unsubscribe = (path: string) => {
    const copy = { ...subscriptions }
    copy[path].unsubscribe()
    console.log('#unsubscribe from ', path)
    delete copy[path]
    setSubscriptions(() => ({ ...copy }))
  }

  const disconnect = () => {
    stompClient?.deactivate()
  }

  return {
    disconnect,
    subscribe,
    unsubscribe,
    subscriptions,
    send,
    isConnected: !!stompClient?.connected
  }
}
