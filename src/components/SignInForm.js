import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { setUser } from '../actions/authActions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©<span>NuLeaf</span> {new Date().getFullYear()}.
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function SignInForm({ setUser }) {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const [formUser, setFormUser] = useState({ email: '', password: '' })

  const submitHandler = (e) => {
    e.preventDefault()
    setUser(formUser)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage id="signInForm.signIn" />
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={formatMessage({ id: 'signInForm.emailLabel' })}
            name="email"
            autoComplete="email"
            value={formUser.email}
            onChange={(e) =>
              setFormUser({ ...formUser, email: e.target.value })
            }
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={formatMessage({ id: 'signInForm.passwordLabel' })}
            type="password"
            id="password"
            autoComplete="current-password"
            value={formUser.password}
            onChange={(e) =>
              setFormUser({ ...formUser, password: e.target.value })
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            <FormattedMessage id="signInForm.signIn" />
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                <FormattedMessage id="signInForm.forgotPassword" />
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="body2">
                <FormattedMessage id="signInForm.noAccount" />
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default SignInForm
