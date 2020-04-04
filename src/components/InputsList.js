import React from 'react'

function InputsList({ inputs }) {
  return inputs
    ? inputs.map((input, index) => (
        <div className="input" key={index}>
          {input.name}
        </div>
      ))
    : 'No inputs'
}

export default InputsList
