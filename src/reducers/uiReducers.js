import { SET_SIDEBAR } from "../actions/actionTypes";

const initialState = {
  sidebarOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SIDEBAR: {
      return {
        ...state,
        sidebarOpen: action.payload
      }
    }
    default:
      return state;
  }
}
