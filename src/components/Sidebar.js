import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import React from 'react'
import { connect } from 'react-redux'
import { setSidebar } from '../actions/uiActions'

function Sidebar({ sidebarOpen, setSidebar }) {
  const handleDrawerClose = () => {
    setSidebar(!sidebarOpen)
  }
  return (
    <Drawer variant="persistent" anchor="left" open={sidebarOpen}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

const mapStateToProps = (state) => {
  return {
    sidebarOpen: state.ui.sidebarOpen,
  }
}

const mapDispatchToProps = { setSidebar }

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
