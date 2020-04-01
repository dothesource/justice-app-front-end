import { SET_INPUTS } from './actionTypes'
import { inputsPathTo } from '../utils/Api'
import db from '../utils/db'

//Index
export const setInputs = (inputId) => {
  return (dispatch) => {
    db.inputs.toArray().then((inputs) => {
      if (inputs.length > 0) {
        dispatch({ type: SET_INPUTS, payload: inputs })
      } else {
        inputsPathTo.query().then((result) => {
          db.inputs.bulkPut(result.data)
          dispatch({ type: SET_INPUTS, payload: result.data })
        })
      }
    })
  }
}
