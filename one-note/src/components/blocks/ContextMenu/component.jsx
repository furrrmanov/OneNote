import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Wrapper, Item, Text } from './styles'

export default function ContextMenu(props) {
  const { data } = props
  const useStyles = makeStyles((theme) => ({
    menu: {
      position: 'absolute',
      top: `${data.position.posY}px`,
      left: `${data.position.posX}px`,
      visibility: data.show ? 'visible' : 'hidden',
      transition: 'opacity .3s linear',
    },
  }))
  const classes = useStyles()

  const handleClickDelete = () => {
    data.callback.deleteItem(data.item)
  }

  return (
    <Wrapper className={classes.menu}>
      <Item onClick={handleClickDelete}>
        <Text>Delete</Text>
      </Item>
    </Wrapper>
  )
}
