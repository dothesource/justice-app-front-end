import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import { setSidebar } from '../actions/uiActions';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



function Sidebar(props) {
  const handleDrawerClose = () => {
    props.setSidebar(!props.sidebarOpen)
  }
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={props.sidebarOpen}
    >
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

const mapStateToProps = (state) => {
  return {
    sidebarOpen: state.ui.sidebarOpen
  }
}

const mapDispatchToProps = { setSidebar }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
