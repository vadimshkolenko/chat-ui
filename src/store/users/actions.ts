import { Dispatch } from 'redux'

import api from '../../utils/api'
import { UsersActionTypes } from './types'
import {
  START_USERS_REQUEST,
  USERS_ERROR,
  USERS_SUCCESS,
  USERS_PAGE_SIZE,
} from './constants'

export const getUsers = (searchValue = '', page = 1) => async (
  dispatch: Dispatch<UsersActionTypes>
): Promise<void> => {
  try {
    dispatch({ type: START_USERS_REQUEST })
    const response = await api.get('/users', {
      params: { searchValue, page, pageSize: USERS_PAGE_SIZE },
    })
    const users = response.data.users
    dispatch({ type: USERS_SUCCESS, payload: { data: users, page } })
  } catch (err) {
    dispatch({ type: USERS_ERROR, payload: err.error ?? 'Ошибка!' })
  }
}
