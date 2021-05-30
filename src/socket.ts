import { io } from 'socket.io-client'

const URL = 'http://localhost:8080'

const socketClient = (token: string) => {
  const socket = io(URL, { autoConnect: false, auth: { token } })

  // socket.onAny((event, ...args) => {
  //   console.log(event, args)
  // })

  return socket
}

export default socketClient
