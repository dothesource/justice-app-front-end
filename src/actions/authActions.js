import { SET_USER, LOGOUT } from './actionTypes'
import { tokensPathTo } from '../utils/Api'

// Login
export const setUser = (formData) => {
  return (dispatch) => {
    tokensPathTo.save({ data: formData }).then((result) => {
      localStorage.setItem('current_user', JSON.stringify(result.data))
      dispatch({ type: SET_USER, payload: result.data })
    })
  }
}

export const logout = () => ({
  type: LOGOUT,
})
