import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setUser } from '../actions/authActions'
import SignInForm from '../components/SignInForm'

function SignIn() {
  const loggedIn = useSelector((state) => {
    const currentUser = state.reducers.current_user
    return currentUser && currentUser.token
  })
  const dispatch = useDispatch()
  const dispatchSetUser = (user) => dispatch(setUser(user))

  return loggedIn ? (
    <Redirect to="/inputs" />
  ) : (
    <SignInForm setUser={dispatchSetUser} />
  )
}

export default SignIn
