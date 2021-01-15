import React, { useState } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import moment from 'moment'
import TextField from '@material-ui/core/TextField'

import { Wrapper, NoteInfo, DateContainer } from './styles'

export default function NoteEditor() {
  const [editorContent, setEditorContent] = useState(``)

  const onHandleEditorChange = ({ value }) => {
    setEditorContent(value)
  }

  return (
    <Wrapper>
      <NoteInfo>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" />
        </form>
        <DateContainer>{moment().format('DDD MMMM, YYYY HH:MM')}</DateContainer>
      </NoteInfo>
      <ReactQuill
        theme="snow"
        defaultValue={editorContent}
        onChange={onHandleEditorChange}
      />
    </Wrapper>
  )
}
