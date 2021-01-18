import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Item, Title } from './styles'

const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function NotebookListItem(props) {
  const { item, isActive, handleActiveItem } = props
  const classes = useStyles()

  const handleClickNotebook = () => {
    handleActiveItem(item.id)
  }

  return (
    <Item
      title={item.name}
      onClick={handleClickNotebook}
      className={isActive ? classes.active : null}>
      <Title>{item.name}</Title>
    </Item>
  )
}
