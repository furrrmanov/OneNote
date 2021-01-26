import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useLocation } from 'react-router-dom'

import { entityListRequest } from '@/actions'

import BasicLayout from '@/components/layouts/BasicLayout'
import EntityScreen from '@/components/blocks/entity/EntityScreen'
import ArticleEditor from '@/components/blocks/ArticleEditor'

export default function CatalogPage() {
  const dispatch = useDispatch()
  const locale = useLocation()
  const search = locale.search
  const params = new URLSearchParams(search)

  useEffect(() => {
    dispatch(entityListRequest('/catalog'))
  }, [dispatch])

  return (
    <BasicLayout>
      <EntityScreen
        entityName={{
          id: 'catalog',
          label: 'Catalog',
        }}
        subEntityName={{
          id: 'article',
          label: 'Article',
        }}
        query={{
          id: params.get('id'),
          subId: params.get('subId'),
        }}
        editor={ArticleEditor}
      />
    </BasicLayout>
  )
}
