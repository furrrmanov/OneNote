import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Item, Title } from './styles'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function NoteListItem(props) {
  const { note, isActive, handleActiveItem, handleContextMenu } = props
  const classes = useStyles()

  const handleClickNotebook = () => {
    handleActiveItem(note.id)
  }

  const handleRightClick = (event) => {
    event.preventDefault()
    handleContextMenu(note, { posX: event.pageX, posY: event.pageY })
  }

  return (
    <Item
      onContextMenu={handleRightClick}
      title={note.name}
      onClick={handleClickNotebook}
      className={isActive ? classes.active : null}>
      <Title>{note.name}</Title>
    </Item>
  )
}
