import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'

import { filteredNotebookList } from '@/utils/dataMappers'
import { createNote } from '@/actions'
import NoteListItem from '@/components/blocks/notebook/NotebookView/NoteListItem'
import ContextMenu from '@/components/blocks/ContextMenu'
import { deleteNote } from '@/actions'

import { Wrapper, ButtonContainer, Container, Button, Overlay } from './styles'

export default function NoteList() {
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()
  const locale = useLocation()
  const search = locale.search
  const params = useMemo(() => new URLSearchParams(search), [search])
  const query = params.get('id')
  const [activeItemId, setActiveItemId] = useState(null)
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({
    posX: 0,
    posY: 0,
  })
  const [conextItem, setConextItem] = useState('')
  const noteList = filteredNotebookList(
    useSelector((state) => state.notebook.notebookList),
    query
  )

  useEffect(() => {
    const query = params.get('note')
    setActiveItemId(query)
  }, [params])

  const handleActiveItem = (id) => {
    history.push(match.path + `?id=${query}&note=${id}`)
    setActiveItemId(id)
  }

  const handleContextMenu = (id, position) => {
    setShowContextMenu(true)
    setContextMenuPosition(position)
    setConextItem(id)
  }

  const handleClickCreateNote = () => {
    dispatch(createNote(query))
  }

  const handleDeleteItem = (id) => {
    dispatch(deleteNote(id))
    history.push(match.path + `?id=${query}`)
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
            <NoteListItem
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
          onClick={handleClickCreateNote}
          disabled={!query}>
          <FormattedMessage id="addNoteButton" defaultMessage="Add note" />
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}
