import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setInputs } from '../actions/inputActions'
// import { usersPathTo } from '../utils/Api';

function InputsList(props) {
  useEffect(() => {
    props.setInputs()
  }, [props])

  return (
    <div>
      {props.inputs
        ? props.inputs.map((input, index) => (
            <div className="input" key={index}>
              {input.name}
            </div>
          ))
        : ''}
    </div>
  )
}

const mapDispatchToProps = { setInputs }

const mapStateToProps = (state) => {
  return {
    inputs: state.reducers.inputs,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputsList)
