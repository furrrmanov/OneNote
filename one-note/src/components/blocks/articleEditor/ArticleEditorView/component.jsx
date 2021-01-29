import React from 'react'

import ArticleInfo from './ArticleInfo'

import { Wrapper } from './styles'

export default function ArticleEditorView(props) {
  const { query, entityName, subEntityName } = props
  return (
    <Wrapper>
      <ArticleInfo
        query={query}
        entityName={entityName}
        subEntityName={subEntityName}
      />
    </Wrapper>
  )
}
