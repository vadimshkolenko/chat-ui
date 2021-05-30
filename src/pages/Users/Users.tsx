import React, { FC } from 'react'

import { RootState } from '../../store/reducers'
import { getUsers } from '../../store/users/actions'
import { selectChat } from '../../store/chats/actions'
import {
  selectUsers,
  selectErrorMessage,
  selectIsLoading,
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

  const getUsersCallback = () => dispatch(getUsers())

  const selectChatCallback = (id: string) => dispatch(selectChat(id))

  return (
    <UsersView
      errorMessage={errorMessage}
      isLoading={isLoading}
      users={users}
      getUsersCallback={getUsersCallback}
      selectChatCallback={selectChatCallback}
    />
  )
}

export default Users