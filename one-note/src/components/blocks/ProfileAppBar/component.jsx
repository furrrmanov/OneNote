import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { userLogOut } from '@/actions'
import { singOutUsingFirebase } from '@/utils/firebase'
import { ROUT_FOR_SIGNIN_PAGE } from '@/constants'

import {
  AppBar,
  Toolbar,
  Menu,
  IconButton,
  Wrapper,
  AccountCircle,
  MenuItem,
  UserName,
  Img,
  UserInfo,
} from './styles'

const styles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
  },
}))

export default function ProfileAppBar() {
  const { name, photoUrl, isLogged, email } = useSelector((state) => state.user)
  const history = useHistory()
  const dispatch = useDispatch()
  const [userAnchorEl, setUserAnchorEl] = useState(null)
  const openUserMenu = Boolean(userAnchorEl)
  const classes = styles()

  const handleUserMenuOnClick = (event) => {
    setUserAnchorEl(event.currentTarget)
  }

  const CloseUserMenu = () => {
    setUserAnchorEl(null)
  }

  const userSingOut = () => {
    setUserAnchorEl(null)
    dispatch(userLogOut(false))
    singOutUsingFirebase()
    history.push(ROUT_FOR_SIGNIN_PAGE)
  }

  const userPhoto = <Img src={`${photoUrl}`} alt="" />

  return (
    <Wrapper>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <UserInfo>
            <UserName>{isLogged && name !== 'null' ? name : email}</UserName>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenuOnClick}
              color="inherit">
              {isLogged && photoUrl !== 'null' ? userPhoto : <AccountCircle />}
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={userAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openUserMenu}
              onClose={CloseUserMenu}>
              <MenuItem onClick={userSingOut}>Log-out</MenuItem>
            </Menu>
          </UserInfo>
        </Toolbar>
      </AppBar>
    </Wrapper>
  )
}
