import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function MainMenuItem(props) {
  const { pathName, name } = props
  const classes = useStyles()
  const match = useRouteMatch()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(match.path === pathName)
  }, [pathName, match.path])

  const handleClick = () => {
    setIsActive(true)
  }

  return (
    <ListItem
      button
      className={isActive ? classes.active : null}
      onClick={handleClick}>
      <ListItemIcon>
        <CollectionsBookmarkOutlinedIcon />
      </ListItemIcon>
      <ListItemText
        primary={<FormattedMessage id={name} defaultMessage={name} />}
      />
    </ListItem>
  )
}
