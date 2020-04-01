import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/authActions';

function SignUpForm(props) {
  return (
    <div>Aqui será o SignUp form</div>
  )
}

const mapDispatchToProps = { setUser }

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm)
