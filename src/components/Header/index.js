import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Avatar from "@material-ui/core/Avatar"
import PopOver from "./PopOver"

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
  }
})

class ButtonAppBar extends Component {
  state = {
    anchorEl: null
  }

  setNode = node => (this.node = node)

  handleClick = ({ currentTarget }) => {
    this.setState({ anchorEl: currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const {
      classes,
      toggleMenu,
      imgUrl = "/images/img_avatar.png"
    } = this.props
    const { anchorEl } = this.state
    // const role = "Admin"
    // const name = "Admin"
    return (
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.Toolbar}>
          <IconButton onClick={toggleMenu} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.info}>
            <IconButton
              ref={this.setNode}
              onClick={this.handleClick}
              className={classes.account}>
              <Avatar src={imgUrl} />
            </IconButton>
          </div>
        </Toolbar>
        <PopOver
          anchorEl={anchorEl}
          {...this.props}
          handleClose={this.handleClose}
        />
      </AppBar>
    )
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
