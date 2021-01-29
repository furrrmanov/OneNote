import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import moment from 'moment'
import { makeStyles } from '@material-ui/styles'

import { updateNote } from '@/actions'
import { activeNote, activeEntity } from '@/utils/dataMappers'
import TextField from '@material-ui/core/TextField'

import { Wrapper, NoteInfo, DateContainer, Button } from './styles'

const useStyles = makeStyles((theme) => ({
  hide: {
    opacity: 0,
    transition: 'opacity .3s linear',
  },
  show: {
    opacity: 1,
    transition: 'opacity .3s linear',
  },
}))

export default function NoteEditor(props) {
  const { query, subEntityName, entityName } = props
  const [editorContent, setEditorContent] = useState(``)
  const [noteName, setNoteName] = useState('')
  const classes = useStyles()
  const dispatch = useDispatch()
  const notebook = activeEntity(
    useSelector((state) => state.entities[entityName.id]),
    query.id
  )
  const note = activeNote(notebook, query.subId)

  useEffect(() => {
    setNoteName(note.name)
    setEditorContent(note.text)
  }, [note.name, note.text])

  const handleEditorChange = (value) => {
    setEditorContent(value)
  }

  const handleChangeInput = ({ target }) => {
    setNoteName(target.value)
  }

  const handleClickButtonSave = ({ target }) => {
    const newNote = { ...note, name: noteName, text: editorContent }
    dispatch(
      updateNote({ item: newNote, root: entityName.id, name: subEntityName.id })
    )
  }

  return (
    <Wrapper className={query.subId === null ? classes.hide : classes.show}>
      <NoteInfo>
        <TextField
          autoComplete="off"
          id="standard-basic"
          value={noteName || ''}
          onChange={handleChangeInput}
        />
        <DateContainer>
          {note.date
            ? moment.unix(note.date / 1000).format('DDD MMMM, YYYY HH:mm')
            : moment().format('DDD MMMM, YYYY HH:mm')}
        </DateContainer>
      </NoteInfo>
      <ReactQuill
        key={note.id}
        theme="snow"
        value={editorContent || ''}
        defaultValue={''}
        onChange={handleEditorChange}
      />
      <Button
        disabled={note.name === noteName && note.text === editorContent}
        onClick={handleClickButtonSave}>
        Save
      </Button>
    </Wrapper>
  )
}
