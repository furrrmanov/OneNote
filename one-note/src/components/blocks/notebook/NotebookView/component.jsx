import React from 'react'

import { makeStyles } from '@material-ui/styles'

import NotebookList from '@/components/blocks/notebook/NotebookView/NotebookList'
import NoteList from '@/components/blocks/notebook/NotebookView/NoteList'
import NoteEditor from '@/components/blocks/notebook/NotebookView/NoteEditor'

import { Wrapper } from './styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'calc(100vh - 75px)',
  },
}))

export default function NotebookView() {
  const classes = useStyles()
  return (
    <Wrapper className={classes.wrapper}>
      <NotebookList />
      <NoteList />
      <NoteEditor />
    </Wrapper>
  )
}
