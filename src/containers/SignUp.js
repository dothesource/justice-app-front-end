import React from 'react'
import { SignUpForm } from '../components'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { setUser } from '../actions/authActions'

function SignUp({ current_user }) {
  const loggedIn = current_user && current_user.token

  return (
    <div>
      {loggedIn ? <Redirect to="/inputs" /> : ''}
      <SignUpForm></SignUpForm>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    current_user: state.reducers.current_user,
  }
}

const mapDispatchToProps = { setUser }

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
