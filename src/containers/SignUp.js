import React from 'react';
import {SignUpForm} from '../components';
import { Redirect } from "react-router";
import { connect } from 'react-redux';

function SignUp(props) {
  const loggedIn = props.current_user && props.current_user.token

  return (
    <div>
      {loggedIn ? <Redirect to="/inputs" /> : ''}
      <SignUpForm></SignUpForm>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    current_user: state.reducers.current_user
  }
}

export default connect(
  mapStateToProps
)(SignUp)
