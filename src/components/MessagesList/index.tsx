import React, { FC, RefObject } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Message as MessageType } from '../../store/chat/types'
import Message from '../Message'

interface Props {
  messages: Array<MessageType>
  listRef: RefObject<HTMLDivElement>
  userId: string
}

const MessagesList: FC<Props> = ({ messages, listRef, userId }) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.container} ref={listRef}>
      {Array.isArray(messages) &&
        messages.map((message) => (
          <Message key={message.id} message={message} userId={userId} />
        ))}
    </Grid>
  )
}

const useStyles = makeStyles({
  container: {
    height: 'auto',
    overflow: 'scroll',
  },
})

export default MessagesList
