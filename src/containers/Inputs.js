import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputs } from '../actions/inputActions'
import InputsList from '../components/InputsList'

function Inputs() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setInputs())
  }, [dispatch])

  const inputs = useSelector((state) => state.reducers.inputs)

  return <InputsList inputs={inputs} />
}

export default Inputs
