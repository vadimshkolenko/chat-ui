import React, { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'

import { User } from '../../store/users/types'

interface Props {
  errorMessage: string
  isLoading: boolean
  users: Array<User> | string // Todo исправить
  getUsersCallback: () => void
}

const UsersView: FC<Props> = ({
  errorMessage,
  isLoading,
  users,
  getUsersCallback,
}) => {
  useEffect(() => {
    getUsersCallback()
  }, [])

  if (isLoading) {
    return <div>Загрузка...</div>
  } else if (errorMessage) {
    return <div>{errorMessage}</div>
  } else
    return (
      <Container component="main" maxWidth="xs">
        <Grid container direction="column" alignItems="center" justify="center">
          {Array.isArray(users) &&
            users.map((user) => (
              <NavLink to={`/chat/${user.id}`} key={user.id}>
                <p>{user.username}</p>
              </NavLink>
            ))}
        </Grid>
      </Container>
    )
}

export default UsersView
