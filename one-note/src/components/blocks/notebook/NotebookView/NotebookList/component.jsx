import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom'

import Modal from '@/components/blocks/Modal'

import { FormattedMessage } from 'react-intl'
import { createNotebook } from '@/actions'
import NotebookListItem from '@/components/blocks/notebook/NotebookView/NotebookListItem'
import ContextMenu from '@/components/blocks/ContextMenu'
import { deleteNotebook } from '@/actions'

import {
  Wrapper,
  ButtonContainer,
  Container,
  Button,
  Popup,
  PopupTitle,
  PopupInputContainer,
  PopupText,
  TextField,
  PopupButtonContainer,
  PopupButton,
  ButtonClose,
  Overlay,
} from './styles'

export default function NotebookList() {
  const dispatch = useDispatch()
  const locale = useLocation()
  const history = useHistory()
  const match = useRouteMatch()
  const notebookList = useSelector((state) => state.notebook.notebookList)
  const [showModal, setShowModal] = useState(false)
  const [notebookName, setNotebookName] = useState('')
  const [activeItemId, setActiveItemId] = useState(null)
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({
    posX: 0,
    posY: 0,
  })
  const [conextItem, setConextItem] = useState('')

  useEffect(() => {
    const search = locale.search
    const params = new URLSearchParams(search)
    const query = params.get('id')
    setActiveItemId(query)
  }, [locale])

  const handleActiveItem = (id) => {
    history.push(match.path + `?id=${id}`)
    setActiveItemId(id)
  }

  const HandleClickCreateNoteBook = () => {
    setShowModal(true)
  }

  const handleClickButtonCancel = () => {
    setShowModal(false)
    setNotebookName('')
  }

  const handleClickButtonClose = () => {
    setShowModal(false)
    setNotebookName('')
  }

  const handleClickButtonOk = () => {
    dispatch(createNotebook(notebookName))
    setShowModal(false)
    setNotebookName('')
  }

  const handleOnChangeInput = ({ target }) => {
    setNotebookName(target.value)
  }

  const handleContextMenu = (id, position) => {
    setShowContextMenu(true)
    setContextMenuPosition(position)
    setConextItem(id)
  }

  const handleDeleteItem = (id) => {
    dispatch(deleteNotebook(id))
    history.push(match.path)
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
        {notebookList.map((notebook) => {
          return (
            <NotebookListItem
              key={notebook.id}
              item={notebook}
              isActive={activeItemId === notebook.id}
              handleActiveItem={handleActiveItem}
              handleContextMenu={handleContextMenu}
            />
          )
        })}
      </Container>
      <ButtonContainer>
        <Button variant="contained" onClick={HandleClickCreateNoteBook}>
          <FormattedMessage
            id="addNotebookButton"
            defaultMessage="Add notebook"
          />
        </Button>
      </ButtonContainer>
      <Modal open={showModal}>
        <Popup>
          <ButtonClose onClick={handleClickButtonClose} />
          <PopupTitle>Notebook Name</PopupTitle>
          <PopupInputContainer>
            <PopupText>Enter a notebook name:</PopupText>
            <TextField
              autocomplete="off"
              value={notebookName}
              onChange={handleOnChangeInput}
            />
          </PopupInputContainer>
          <PopupButtonContainer>
            <PopupButton
              variant="contained"
              onClick={handleClickButtonOk}
              disabled={!notebookName}>
              <FormattedMessage id="Ok" defaultMessage="Ok" />
            </PopupButton>
            <PopupButton variant="contained" onClick={handleClickButtonCancel}>
              <FormattedMessage id="Cancel" defaultMessage="Cancel" />
            </PopupButton>
          </PopupButtonContainer>
        </Popup>
      </Modal>
    </Wrapper>
  )
}
