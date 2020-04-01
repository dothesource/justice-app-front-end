import { SET_SIDEBAR } from "./actionTypes";

//Index
export const setSidebar = (isOpen) => {
  return(dispatch) => {
    dispatch({type: SET_SIDEBAR, payload: isOpen})
  }
}
