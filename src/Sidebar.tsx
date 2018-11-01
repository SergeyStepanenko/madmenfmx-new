import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { Link } from 'react-router'

import { config } from 'src/routes'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

class Sidebar extends React.Component<any> {
  state = {
    left: false
  }

  toggleDrawer = (side: any, open: any) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const { classes, isOpen, onClose } = this.props

    return (
      <Drawer open={isOpen} onClose={onClose}>
        <div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
          <div className={classes.list}>
            <List>
              {config.map(({ name, path }, index) => (
                <Link key={path} to={path}>
                  <ListItem button key={path}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar)
