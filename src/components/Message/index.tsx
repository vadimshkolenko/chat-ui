import React, { FC } from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

import { Message as MessageType } from '../../store/chats/types'

interface Props {
  message: MessageType
  userId: string
}

const Message: FC<Props> = ({ message, userId }) => {
  const classes = useStyles()

  return (
    <Paper
      key={message.id}
      variant="elevation"
      elevation={1}
      className={classnames(
        classes.container,
        userId === message.from
          ? classes.ownMessage
          : classes.interlocutorMessage
      )}
    >
      <Box p={1}>
        <Typography
          variant="body1"
          component="p"
          className={classes.messageText}
        >
          {message.content}
        </Typography>
      </Box>
    </Paper>
  )
}

const useStyles = makeStyles({
  container: {
    width: '300px',
    margin: '15px',
  },
  ownMessage: {
    background: '#4051b5',
  },
  interlocutorMessage: {
    background: '#222222',
  },
  messageText: {
    wordWrap: 'break-word',
    color: '#fff',
  },
})

export default Message
