import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch, useHistory } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'

import { filteredEntityList } from '@/utils/dataMappers'
import { createSubEntity } from '@/actions'
import SubEntityScreenListItem from '@/components/blocks/entity/EntityScreen/SubEntityScreenListItem'
import ContextMenu from '@/components/blocks/ContextMenu'
import { deleteNote } from '@/actions'

import { Wrapper, ButtonContainer, Container, Button, Overlay } from './styles'

export default function SubEntityScreenList(props) {
  const { subEntityName, entityName, query } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()
  const [activeItemId, setActiveItemId] = useState(null)
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({
    posX: 0,
    posY: 0,
  })
  const [conextItem, setConextItem] = useState('')
  const noteList = filteredEntityList(
    useSelector((state) => state.entities[entityName.id]),
    query.id,
    subEntityName.id
  )

  useEffect(() => {
    setActiveItemId(query.subId)
  }, [query.subId])

  const handleActiveItem = (id) => {
    history.push(match.path + `?id=${query.id}&subId=${id}`)
    setActiveItemId(id)
  }

  const handleContextMenu = (id, position) => {
    setShowContextMenu(true)
    setContextMenuPosition(position)
    setConextItem(id)
  }

  const handleClickCreateItem = () => {
    dispatch(
      createSubEntity({
        id: query.id,
        root: entityName.id,
        name: subEntityName.id,
      })
    )
  }

  const handleDeleteItem = (item) => {
    dispatch(
      deleteNote({ item: item, root: entityName.id, name: subEntityName.id })
    )
    history.push(match.path + `?id=${query.id}`)
  }

  const handleClickOverlay = () => {
    setShowContextMenu(false)
  }

  return (
    <Wrapper>
      {showContextMenu ? (
        <Overlay onClick={handleClickOverlay}>
          <ContextMenu
            data={{
              item: conextItem,
              position: contextMenuPosition,
              callback: {
                deleteItem: handleDeleteItem,
              },
              show: showContextMenu,
            }}
          />
        </Overlay>
      ) : null}
      <Container>
        {noteList.map((item) => {
          return (
            <SubEntityScreenListItem
              key={Math.random() * 10}
              note={item}
              isActive={activeItemId === item.id}
              handleActiveItem={handleActiveItem}
              handleContextMenu={handleContextMenu}
            />
          )
        })}
      </Container>
      <ButtonContainer>
        <Button
          variant="contained"
          onClick={handleClickCreateItem}
          disabled={!query.id}>
          <FormattedMessage
            id={`add${subEntityName.label}Button`}
            defaultMessage={`Add ${subEntityName.id}`}
          />
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}
