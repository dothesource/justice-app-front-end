import React from 'react'
import { SignInForm } from '../components'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import { setUser } from '../actions/authActions'

function SignIn({ current_user }) {
  const loggedIn = current_user && current_user.token

  return (
    <div>
      {loggedIn ? <Redirect to="/inputs" /> : ''}
      <SignInForm></SignInForm>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    current_user: state.reducers.current_user,
  }
}

const mapDispatchToProps = { setUser }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
