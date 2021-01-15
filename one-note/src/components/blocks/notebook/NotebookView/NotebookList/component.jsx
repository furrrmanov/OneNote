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

export default function NotebookList() {
  return (
    <Wrapper>
      <Container>
        <Item>
          <Title>Записная книжка 1</Title>
        </Item>
        <Item>
          <Title>Записная книжка 1</Title>
        </Item>
      </Container>
      <ButtonContainer>
        <Button variant="contained">
          <FormattedMessage
            id="addNotebookButton"
            defaultMessage="Add notebook"
          />
        </Button>
      </ButtonContainer>
    </Wrapper>
  )
}
