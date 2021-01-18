import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Item, Title } from './styles'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function NoteListItem(props) {
  const { note, isActive, handleActiveItem } = props
  const classes = useStyles()

  const handleClickNotebook = () => {
    handleActiveItem(note.id)
  }
  
  return (
    <Item
      title={note.name}
      onClick={handleClickNotebook}
      className={isActive ? classes.active : null}>
      <Title>{note.name}</Title>
    </Item>
  )
}
