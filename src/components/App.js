import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { setUser } from '../actions/authActions'
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

function App(props) {
  const loggedIn = props.current_user && props.current_user.token

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
              {loggedIn ? '' : <Redirect to="/signin" />}
              <Header />
              <Sidebar />
              <Switch>
                <Route path="/inputs">
                  <Inputs />
                </Route>
              </Switch>
              {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Reactoo
                </a>
              </header> */}
              <MainNavigation />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    current_user: state.reducers.current_user,
  }
}

const mapDispatchToProps = { setUser }

export default connect(mapStateToProps, mapDispatchToProps)(App)
