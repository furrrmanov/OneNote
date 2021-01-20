import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import moment from 'moment'
import { makeStyles } from '@material-ui/styles'

import { updateNote } from '@/actions'
import { activeNote, activeNotebook } from '@/utils/dataMappers'
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

export default function NoteEditor() {
  const [editorContent, setEditorContent] = useState(``)
  const [noteName, setNoteName] = useState('')
  const classes = useStyles()
  const dispatch = useDispatch()
  const locale = useLocation()
  const search = locale.search
  const params = useMemo(() => new URLSearchParams(search), [search])
  const queryNote = params.get('note')
  const queryNotebook = params.get('id')
  const notebook = activeNotebook(
    useSelector((state) => state.notebook.notebookList),
    queryNotebook
  )
  const note = activeNote(notebook, queryNote)

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
    dispatch(updateNote({ ...note, name: noteName, text: editorContent }))
  }

  return (
    <Wrapper className={queryNote === null ? classes.hide : classes.show}>
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
