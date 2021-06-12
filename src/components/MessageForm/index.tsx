import React, { FC, RefObject, SyntheticEvent } from 'react'
import { Box, Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ReturnData } from '../../hooks/useInput'

interface Props {
  message: ReturnData
  handleSubmit: (event: SyntheticEvent) => void
  inputRef: RefObject<HTMLInputElement>
}

const MessageForm: FC<Props> = ({ message, handleSubmit, inputRef }) => {
  const classes = useStyles()

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <Grid container direction="row" justify="center">
        <Grid item xs={5}>
          <Box mr={2}>
            <TextField
              value={message.value}
              onChange={message.onChange}
              placeholder="Введите сообщение..."
              inputRef={inputRef}
              variant="filled"
              fullWidth={true}
              hiddenLabel
              InputProps={{ className: classes.input }}
            />
          </Box>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Отправить
        </Button>
      </Grid>
    </form>
  )
}

const useStyles = makeStyles({
  container: {
    width: '100%',
  },
  input: {
    height: '45px',
    color: '#fff',
    backgroundColor: '#222222',

    // сброс стилей material-ui
    '&:hover': {
      backgroundColor: '#222222',
    },
    '&:not(:hover)': {
      backgroundColor: '#222222',
    },
  },
})

export default MessageForm
