import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Account from "@material-ui/icons/AccountCircle"
import Badge from "@material-ui/core/Badge"
import Notifications from "@material-ui/icons/NotificationsOutlined"
import InvertColor from "@material-ui/icons/InvertColors"

const styles = theme => ({
  appBar: {
    boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.15)"
  },
  Toolbar: {
    flexGrow: 1,
    dipslay: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    color: "#000"
  },
  margin: {
    margin: theme.spacing.unit * 2,
    color: "#0000009F"
  },
  info: {
    display: "flex"
  }
})

class ButtonAppBar extends Component {
  state = { active: false }
  setActive = () => this.setState({ active: !this.state.active })
  handleClose = () => this.setState({ active: false })
  setNode = node => (this.node = node)

  render() {
    const { classes, toggleMenu } = this.props
    // const role = "Admin"
    // const name = "Admin"
    return (
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton onClick={toggleMenu} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.info}>
            <IconButton ref={this.setNode} onClick={this.setActive}>
              <InvertColor ref={node => console.log(node)} />
            </IconButton>

            <IconButton>
              <Badge
                className={classes.margin}
                badgeContent={4}
                color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              ref={this.setRef}
              onClick={this.handleClick}
              className={classes.account}>
              <Account />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
