import React, { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { User } from '../../store/users/types'

interface Props {
  errorMessage: string
  isLoading: boolean
  users: Array<User> | string // Todo исправить
  getUsersCallback: () => void
  selectChatCallback: (id: string) => void
}

const UsersView: FC<Props> = ({
  errorMessage,
  isLoading,
  users,
  getUsersCallback,
  selectChatCallback,
}) => {
  useEffect(() => {
    getUsersCallback()
  }, [])

  console.log(users)

  if (isLoading) {
    return <div>Загрузка...</div>
  } else if (errorMessage) {
    return <div>{errorMessage}</div>
  } else
    return (
      <div>
        {Array.isArray(users) &&
          users.map((user) => (
            <NavLink
              to={'/chats'}
              key={user.id}
              onClick={() => selectChatCallback(user.id)}
            >
              <p>{user.username}</p>
            </NavLink>
          ))}
      </div>
    )
}

export default UsersView
