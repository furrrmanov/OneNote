import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'

import { filteredNotebookList } from '@/utils/dataMappers'
import { createNote } from '@/actions'
import NoteListItem from '@/components/blocks/notebook/NotebookView/NoteListItem'

import { Wrapper, ButtonContainer, Container, Button } from './styles'

export default function NoteList() {
  const dispatch = useDispatch()
  const history = useHistory()
  const match = useRouteMatch()
  const locale = useLocation()
  const search = locale.search
  const params = new URLSearchParams(search)
  const query = params.get('id')
  const [activeItemId, setActiveItemId] = useState(null)
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

  const handleClickCreateNote = () => {
    dispatch(createNote(query))
  }

  return (
    <Wrapper>
      <Container>
        {noteList.map((item) => {
          return (
            <NoteListItem
              key={Math.random() * 10}
              note={item}
              isActive={activeItemId === item.id}
              handleActiveItem={handleActiveItem}
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
