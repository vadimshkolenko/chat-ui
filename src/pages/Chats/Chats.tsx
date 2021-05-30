import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useInput from '../../hooks/useInput'
import { selectToken, selectUserId } from '../../store/account/selectors'
import {
  selectCurrentChatId,
  selectCurrentMessages,
} from '../../store/chats/selectors'
import { RootState } from '../../store/reducers'
import { addMessage } from '../../store/chats/actions'
import socketClient from '../../socket'

const Chats: FC = () => {
  const dispatch = useDispatch()

  const token = useSelector((state: RootState) => selectToken(state))
  const userId = useSelector((state: RootState) => selectUserId(state))
  const currentChatId = useSelector((state: RootState) =>
    selectCurrentChatId(state)
  )

  const messages = useSelector((state: RootState) =>
    selectCurrentMessages(state)
  )

  const socket: any = socketClient(token)

  socket.connect()

  // TODO исправить типизацию
  useEffect((): any => {
    return () => socket.off('connect_error')
  })

  useEffect(() => {
    socket.on('private_message', (msg) => {
      dispatch(addMessage(msg))
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
      to: currentChatId,
      from: userId,
    })
  }

  return (
    <div>
      <div>
        {Array.isArray(messages) &&
          messages.map((message) => <p key={message.id}>{message.content}</p>)}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={message.value} onChange={message.onChange} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default Chats
