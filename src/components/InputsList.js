import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setInputs } from '../actions/inputActions'
// import { usersPathTo } from '../utils/Api';

function InputsList({ inputs, setInputs }) {
  useEffect(() => {
    setInputs()
  }, [setInputs])

  return (
    <div>
      {inputs
        ? inputs.map((input, index) => (
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
