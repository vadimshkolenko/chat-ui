import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { User } from '../../store/users/types'

interface Props {
  user: User
}

const UserCard: FC<Props> = ({ user }) => {
  const classes = useStyles()

  return (
    <Box pt={3}>
      <NavLink to={`/chat/${user.id}`} className={classes.userLink}>
        <Typography variant="body1" component="p" className={classes.userName}>
          {user.username}
        </Typography>
      </NavLink>
    </Box>
  )
}

const useStyles = makeStyles({
  userLink: {
    textDecoration: 'none',
    color: 'white',
  },
  userName: {
    wordWrap: 'break-word',
    color: '#fff',
  },
})

export default UserCard
