import React, { useEffect, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined'
import MenuBookIcon from '@material-ui/icons/MenuBook'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function MainMenuItem(props) {
  const { pathName, name } = props
  const classes = useStyles()
  const history = useHistory()
  const match = useRouteMatch()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(match.path === pathName)
  }, [pathName, match.path])

  const handleClick = () => {
    setIsActive(true)
    history.push(pathName)
  }

  const itemIcon = (name) => {
    switch (name) {
      case 'Notebook':
        return <CollectionsBookmarkOutlinedIcon />
      case 'Catalog':
        return <MenuBookIcon />
      default:
        break
    }
  }

  return (
    <ListItem
      button
      className={isActive ? classes.active : null}
      onClick={handleClick}>
      <ListItemIcon>{itemIcon(name)}</ListItemIcon>
      <ListItemText
        primary={<FormattedMessage id={name} defaultMessage={name} />}
      />
    </ListItem>
  )
}
