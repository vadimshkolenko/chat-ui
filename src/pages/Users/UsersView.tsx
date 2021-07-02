import React, { FC, useEffect } from 'react'
import { Container, Grid, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { User } from '../../store/users/types'
import UserCard from '../../components/UserCard'

interface Props {
  errorMessage: string
  isLoading: boolean
  users: Array<User> | string // Todo исправить
  page: number
  shouldLoadMore: boolean
  getUsersCallback: (searchValue?: string, page?: number) => void
  resetUsersCallback: () => void
}

const UsersView: FC<Props> = ({
  errorMessage,
  isLoading,
  users,
  getUsersCallback,
  resetUsersCallback,
  page,
  shouldLoadMore,
}) => {
  const classes = useStyles()

  useEffect(() => {
    getUsersCallback()

    return resetUsersCallback
  }, [])

  if (isLoading && !users.length) {
    return <div>Загрузка...</div>
  } else if (errorMessage) {
    return <div>{errorMessage}</div>
  } else
    return (
      <Container
        component="main"
        maxWidth={false}
        className={classes.container}
      >
        <Grid container direction="column" alignItems="center" justify="center">
          {Array.isArray(users) &&
            users.map((user) => <UserCard user={user} key={user.id} />)}
          {shouldLoadMore && (
            <Box pt={3}>
              <Button
                variant="contained"
                color="primary"
                disabled={isLoading}
                onClick={() => getUsersCallback('', page + 1)}
              >
                {isLoading ? 'Загрузка' : 'Показать еще'}
              </Button>
            </Box>
          )}
        </Grid>
      </Container>
    )
}

const useStyles = makeStyles({
  container: {
    background: '#101010',
    paddingBottom: '30px',
  },
})

export default UsersView
