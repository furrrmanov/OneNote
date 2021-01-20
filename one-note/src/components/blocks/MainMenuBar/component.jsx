import React from 'react'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

import MainMenuItem from '@/components/blocks/MainMenuItem'
import { ROUT_FOR_NOTEBOOK_PAGE, ROUT_FOR_DIRECTORY_PAGE } from '@/constants'

import { List } from './styles'

const drawerWidth = 170

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
}))

const MenuItem = [
  { pathName: ROUT_FOR_NOTEBOOK_PAGE, name: 'Notebook' },
  { pathName: ROUT_FOR_DIRECTORY_PAGE, name: 'Directory' },
]

export default function MainMenuBar() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div
      className={classes.root}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
        <List>
          {MenuItem.map((item) => {
            return (
              <MainMenuItem
                key={item.name}
                pathName={item.pathName}
                name={item.name}
              />
            )
          })}
        </List>
      </Drawer>
    </div>
  )
}
