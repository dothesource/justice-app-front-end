import React from 'react'
import { SignInForm } from '../components'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

function SignIn(props) {
  const loggedIn = props.current_user && props.current_user.token

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

export default connect(mapStateToProps)(SignIn)
