import React, { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Grid, Button } from '@material-ui/core'

import { User } from '../../store/users/types'

interface Props {
  errorMessage: string
  isLoading: boolean
  users: Array<User> | string // Todo исправить
  page: number
  shouldLoadMore: boolean
  getUsersCallback: (searchValue?: string, page?: number) => void
}

const UsersView: FC<Props> = ({
  errorMessage,
  isLoading,
  users,
  getUsersCallback,
  page,
  shouldLoadMore,
}) => {
  useEffect(() => {
    getUsersCallback()
  }, [])

  if (isLoading && !users.length) {
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
          {shouldLoadMore && (
            <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              onClick={() => getUsersCallback('', page + 1)}
            >
              {isLoading ? 'Загрузка' : 'Показать еще'}
            </Button>
          )}
        </Grid>
      </Container>
    )
}

export default UsersView
