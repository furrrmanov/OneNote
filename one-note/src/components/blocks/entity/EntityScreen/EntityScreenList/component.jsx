import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch, useHistory } from 'react-router-dom'

import Modal from '@/components/blocks/Modal'

import { FormattedMessage } from 'react-intl'
import EntityScreenListItem from '@/components/blocks/entity/EntityScreen/EntityScreenListItem'
import ContextMenu from '@/components/blocks/ContextMenu'
import { deleteEntity, createEntity } from '@/actions'

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

export default function EntityScreenList(props) {
  const { entityName, query } = props
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()
  const notebookList = useSelector((state) => state.entities[entityName.id])
  const [showModal, setShowModal] = useState(false)
  const [createdName, setCreatedName] = useState('')
  const [activeItemId, setActiveItemId] = useState(null)
  const [showContextMenu, setShowContextMenu] = useState(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({
    posX: 0,
    posY: 0,
  })
  const [conextItem, setConextItem] = useState('')

  useEffect(() => {
    setActiveItemId(query.id)
  }, [query.id])

  const handleActiveItem = (id) => {
    history.push(match.path + `?id=${id}`)
    setActiveItemId(id)
  }

  const HandleClickCreateNoteBook = () => {
    setShowModal(true)
  }

  const handleClickButtonCancel = () => {
    setShowModal(false)
    setCreatedName('')
  }

  const handleClickButtonClose = () => {
    setShowModal(false)
    setCreatedName('')
  }

  const handleClickButtonOk = () => {
    dispatch(createEntity({ entityName: createdName, root: entityName.id }))
    setShowModal(false)
    setCreatedName('')
  }

  const handleOnChangeInput = ({ target }) => {
    setCreatedName(target.value)
  }

  const handleContextMenu = (id, position) => {
    setShowContextMenu(true)
    setContextMenuPosition(position)
    setConextItem(id)
  }

  const handleDeleteItem = (item) => {
    dispatch(deleteEntity({ entityId: item.id, root: entityName.id }))
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
        {notebookList.map((item) => {
          return (
            <EntityScreenListItem
              key={item.id}
              item={item}
              isActive={activeItemId === item.id}
              handleActiveItem={handleActiveItem}
              handleContextMenu={handleContextMenu}
            />
          )
        })}
      </Container>
      <ButtonContainer>
        <Button variant="contained" onClick={HandleClickCreateNoteBook}>
          <FormattedMessage
            id={`add${entityName.label}Button`}
            defaultMessage={`Add ${entityName.id}`}
          />
        </Button>
      </ButtonContainer>
      <Modal open={showModal}>
        <Popup>
          <ButtonClose onClick={handleClickButtonClose} />
          <PopupTitle>{`${entityName.label} Name`}</PopupTitle>
          <PopupInputContainer>
            <PopupText>{`Enter a ${entityName.id} name:`}</PopupText>
            <TextField
              autocomplete="off"
              value={createdName}
              onChange={handleOnChangeInput}
            />
          </PopupInputContainer>
          <PopupButtonContainer>
            <PopupButton
              variant="contained"
              onClick={handleClickButtonOk}
              disabled={!createdName}>
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
