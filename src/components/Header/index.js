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
import PopOver from "../PopOver"

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

  render() {
    const { classes, toggleMenu } = this.props
    // const role = "Admin"
    // const name = "Admin"
    const { active } = this.state
    return (
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton onClick={toggleMenu} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.info}>
            <IconButton onClick={this.setActive}>
              <InvertColor />
              <PopOver active={active}>
                <h1>header1</h1>
                <h1>header2</h1>
                <h1>header3</h1>
                <h1>header4</h1>
                <h1>header5</h1>
              </PopOver>
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
