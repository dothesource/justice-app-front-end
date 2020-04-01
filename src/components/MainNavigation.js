import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
})

function MainNavigation() {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()
  let history = useHistory()

  function redirect(route) {
    history.push(route)
  }

  return (
    <div>
      <BottomNavigation
        value={value}
        className={classes.root}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}>
        <BottomNavigationAction
          icon={<RestoreIcon />}
          onClick={() => redirect('/inputs')}
        />
        <BottomNavigationAction
          icon={<FavoriteIcon />}
          onClick={() => redirect('/preparations')}
        />
        <BottomNavigationAction
          icon={<LocationOnIcon />}
          onClick={() => redirect('/recipes')}
        />
      </BottomNavigation>
    </div>
  )
}

export default MainNavigation
