import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Item, Title } from './styles'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function NotebookListItem(props) {
  const { item, isActive, handleActiveItem, handleContextMenu } = props
  const classes = useStyles()

  const handleClickNotebook = () => {
    handleActiveItem(item.id)
  }

  const handleRightClick = (event) => {
    event.preventDefault()
    handleContextMenu(item, { posX: event.pageX, posY: event.pageY })
  }

  return (
    <Item
    onContextMenu={handleRightClick}
      title={item.name}
      onClick={handleClickNotebook}
      className={isActive ? classes.active : null}>
      <Title>{item.name}</Title>
    </Item>
  )
}
