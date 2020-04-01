import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { IntlProvider } from 'react-intl'
import messages from './messages'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// todo: fazer de outro jeito
const current_user = {
  reducers: { current_user: JSON.parse(localStorage.getItem('current_user')) }
}

const store = createStore(
  rootReducer,
  current_user,
  composeEnhancer(applyMiddleware(thunk))
)

// 'id,code,name,input_category_id,acquisition_unit_level_1_id,acquisition_unit_level_2_id,acquisition_unit_level_3_id,efficiency,created_at,updated_at,deleted_at,last_price,last_acquisition_id,package,in_stock,count_unit_id'

function EntryPoint() {
  const navigatorLocale =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en'

  const locale = messages.hasOwnProperty(navigatorLocale)
    ? navigatorLocale
    : 'en'

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  )
}

ReactDOM.render(EntryPoint(), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
