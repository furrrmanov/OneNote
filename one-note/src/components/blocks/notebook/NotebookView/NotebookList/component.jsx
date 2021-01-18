import React, { useState } from 'react'

import { FormattedMessage } from 'react-intl'

import Modal from '@/components/blocks/Modal'

import {
  Wrapper,
  Item,
  Title,
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
} from './styles'

export default function NotebookList() {
  const [showModal, setShowModal] = useState(false)
  const [notebookName, setNotebookName] = useState('')

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
    setShowModal(false)
    setNotebookName('')
  }

  const handleOnChangeInput = ({ target }) => {
    setNotebookName(target.value)
  }

  return (
    <Wrapper>
      <Container>
        <Item title="Записная книжка 1">
          <Title>Записная книжка 1 </Title>
        </Item>
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
            <PopupButton variant="contained" onClick={handleClickButtonOk}>
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
