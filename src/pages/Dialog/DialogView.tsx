import React, { FC, useEffect, useRef } from 'react'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import useInput from '../../hooks/useInput'
import socketClient from '../../socket'
import { Message as MessageType } from '../../store/chat/types'
import MessagesList from '../../components/MessagesList'
import MessageForm from '../../components/MessageForm'

interface IProps {
  token: string
  userId: string
  currentChatId: string
  messages: Array<MessageType>
  addMessageCallback: (message: MessageType) => void
  resetChatCallback: () => void
}

const DialogView: FC<IProps> = ({
  token,
  userId,
  currentChatId,
  messages,
  addMessageCallback,
  resetChatCallback,
}) => {
  const classes = useStyles()

  const listRef = useRef(null)
  const inputRef = useRef(null)

  const socket: any = socketClient(token)

  socket.connect()

  useEffect(() => resetChatCallback, [])

  useEffect(() => {
    return () => socket.removeAllListeners()
  }, [])

  // TODO исправить типизацию
  useEffect((): any => {
    return () => socket.off('connect_error')
  })

  useEffect(() => {
    socket.on('private_message', (msg) => {
      addMessageCallback(msg)
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

  const scrollToStart = () => {
    listRef.current.addEventListener('DOMNodeInserted', (event) => {
      const { currentTarget: target } = event
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' })
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!message.value.length) {
      inputRef?.current?.focus()
      return
    }
    message.clear()
    socket.emit('private_message', {
      content: message.value,
      to: currentChatId,
      from: userId,
    })
    scrollToStart()
    inputRef?.current?.focus()
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="flex-end"
      wrap="nowrap"
      className={classes.container}
    >
      <MessagesList messages={messages} listRef={listRef} userId={userId} />
      <Grid item className={classes.formWrapper}>
        <Box m={2}>
          <MessageForm
            handleSubmit={handleSubmit}
            message={message}
            inputRef={inputRef}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles({
  container: {
    height: '100vh',
    background: '#101010',
  },
  formWrapper: {
    width: '100%',
  },
})

export default DialogView
