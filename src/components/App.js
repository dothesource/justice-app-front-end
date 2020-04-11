import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Inputs, SignIn, SignUp } from '../containers'
import { Header, MainNavigation, Sidebar } from './'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4b0082',
    },
    secondary: {
      main: '#483d8b',
    },
  },
})

function App() {
  const loggedIn = useSelector((state) => {
    const currentUser = state.reducers.current_user
    return currentUser && currentUser.authentication_token
  })

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              {loggedIn ? null : <Redirect to="/signin" />}
              <Header />
              <Sidebar />
              <Switch>
                <Route path="/inputs">
                  <Inputs />
                </Route>
              </Switch>
              <MainNavigation />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
