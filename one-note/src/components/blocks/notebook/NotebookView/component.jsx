import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/styles'

import { usersProfileListRequest } from '@/actions'
import NotebookList from '@/components/blocks/notebook/NotebookView/NotebookList'
import NoteList from '@/components/blocks/notebook/NotebookView/NoteList'
import NoteEditor from '@/components/blocks/notebook/NotebookView/NoteEditor'

import { Wrapper } from './styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'calc(100vh - 70px)',
  },
}))

export default function NotebookView() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(usersProfileListRequest())
  }, [dispatch])
  const classes = useStyles()
  return (
    <Wrapper className={classes.wrapper}>
      <NotebookList />
      <NoteList />
      <NoteEditor />
    </Wrapper>
  )
}
