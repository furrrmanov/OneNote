import React from 'react'

import { FormattedMessage } from 'react-intl'

import {
  Wrapper,
  Item,
  Title,
  ButtonContainer,
  Container,
  Button,
} from './styles'

export default function NoteList() {
  return (
    <Wrapper>
      <Container>
        <Item>
          <Title>Заметка 1</Title>
        </Item>
        <Item>
          <Title>Заметка 2</Title>
        </Item>
        <Item>
          <Title>Заметка 3</Title>
        </Item>
      </Container>
      <ButtonContainer>
        <Button variant="contained">
          <FormattedMessage id="addNoteButton" defaultMessage="Add note" />
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}
