import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SignUpForm from '../components/SignUpForm'
// import { setUser } from '../actions/authActions'

function SignUp() {
  const loggedIn = useSelector((state) => {
    const currentUser = state.reducers.current_user
    return currentUser && currentUser.token
  })

  return loggedIn ? <Redirect to="/inputs" /> : <SignUpForm />
}

export default SignUp
