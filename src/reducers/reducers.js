import { SET_USER, LOGOUT, SET_INPUTS } from '../actions/actionTypes'

const initialState = {
  current_user: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_INPUTS: {
      return {
        ...state,
        inputs: action.payload,
      }
    }
    case SET_USER: {
      return {
        ...state,
        current_user: action.payload,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        current_user: null,
      }
    }
    default:
      return state
  }
}
