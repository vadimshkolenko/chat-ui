import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectToken, selectUserId } from '../../store/account/selectors'
import { selectCurrentMessages } from '../../store/chats/selectors'
import { RootState } from '../../store/reducers'
import { addMessage } from '../../store/chats/actions'
import ChatsView from './ChatsView'

const Chats: FC = () => {
  const dispatch = useDispatch()

  // TODO исправить
  const { chatId }: any = useParams()

  const token = useSelector((state: RootState) => selectToken(state))
  const userId = useSelector((state: RootState) => selectUserId(state))

  const messages = useSelector((state: RootState) =>
    selectCurrentMessages(state)
  )

  const addMessageCallback = (msg) => dispatch(addMessage(msg))

  return (
    <ChatsView
      token={token}
      userId={userId}
      currentChatId={chatId}
      messages={messages}
      addMessageCallback={addMessageCallback}
    />
  )
}

export default Chats
