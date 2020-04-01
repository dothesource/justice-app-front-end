import { combineReducers } from 'redux'
import reducers from './reducers'
import uiReducers from './uiReducers'

export default combineReducers({
  reducers: reducers,
  ui: uiReducers,
})
