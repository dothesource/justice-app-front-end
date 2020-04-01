import React from 'react'
import logo from '../assets/logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { SignIn, Inputs, SignUp } from '../containers'
import { Header, MainNavigation, Sidebar } from './'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { setUser } from '../actions/authActions'
import { Drawer } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e45306',
    },
    secondary: {
      main: '#cd4a05',
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
