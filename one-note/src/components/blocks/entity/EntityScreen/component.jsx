import React from 'react'

import { makeStyles } from '@material-ui/styles'

import EntityScreenList from '@/components/blocks/entity/EntityScreen/EntityScreenList'
import SubEntityScreenList from '@/components/blocks/entity/EntityScreen/SubEntityScreenList'

import { Wrapper } from './styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'calc(100vh - 70px)',
  },
}))

export default function EntityScreen({
  entityName,
  subEntityName,
  query,
  editor,
}) {
  const classes = useStyles()
  const EditorComponent = editor
  return (
    <Wrapper className={classes.wrapper}>
      <EntityScreenList entityName={entityName} query={query} />
      <SubEntityScreenList
        entityName={entityName}
        subEntityName={subEntityName}
        query={query}
      />
      <EditorComponent query={query} subEntityName={subEntityName}  entityName={entityName} />
    </Wrapper>
  )
}
