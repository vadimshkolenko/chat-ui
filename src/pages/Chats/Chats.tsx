import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import useInput from '../../hooks/useInput'
import { selectToken, selectUserId } from '../../store/account/selectors'
import { RootState } from '../../store/reducers'
import socketClient from '../../socket'

const Chats: FC = () => {
  const token = useSelector((state: RootState) => selectToken(state))
  const userId = useSelector((state: RootState) => selectUserId(state))

  const socket: any = socketClient(token)

  socket.connect()

  // TODO исправить типизацию
  useEffect((): any => {
    return () => socket.off('connect_error')
  })

  useEffect(() => {
    socket.on('private_message', (msg) => {
      console.log('MESSAGE', msg)
    })

    socket.on('connect_error', (err) => {
      console.log('ERROR', err)
    })

    socket.on('disconnect', function () {
      socket.removeAllListeners()
    })

    socket.emit('join_room', { user: userId })
  }, [])

  const message = useInput('')

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('private_message', {
      content: message.value,
      // to: otherId, подставлять id другого пользака
      from: userId,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={message.value} onChange={message.onChange} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default Chats
