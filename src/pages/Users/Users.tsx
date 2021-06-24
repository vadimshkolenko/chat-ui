import React, { FC } from 'react'

import { RootState } from '../../store/reducers'
import { getUsers } from '../../store/users/actions'
import {
  selectUsers,
  selectErrorMessage,
  selectIsLoading,
  selectPage,
  selectShouldLoadMore,
} from '../../store/users/selectors'
import { useDispatch, useSelector } from 'react-redux'
import UsersView from './UsersView'

const Users: FC = () => {
  const dispatch = useDispatch()

  const errorMessage = useSelector((state: RootState) =>
    selectErrorMessage(state)
  )
  const isLoading = useSelector((state: RootState) => selectIsLoading(state))

  const users = useSelector((state: RootState) => selectUsers(state))

  const page = useSelector((state: RootState) => selectPage(state))

  const shouldLoadMore = useSelector((state: RootState) =>
    selectShouldLoadMore(state)
  )

  const getUsersCallback = (searchValue, page) =>
    dispatch(getUsers(searchValue, page))

  return (
    <UsersView
      errorMessage={errorMessage}
      isLoading={isLoading}
      users={users}
      page={page}
      shouldLoadMore={shouldLoadMore}
      getUsersCallback={getUsersCallback}
    />
  )
}

export default Users
