import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useLocation } from 'react-router-dom'

import { entityListRequest } from '@/actions'
import BasicLayout from '@/components/layouts/BasicLayout'
import EntityScreen from '@/components/blocks/entity/EntityScreen'
import NoteEditor from '@/components/blocks/NoteEditor'

export default function LandingPage() {
  const dispatch = useDispatch()
  const locale = useLocation()
  const search = locale.search
  const params = new URLSearchParams(search)

  useEffect(() => {
    dispatch(entityListRequest('notebook'))
  }, [dispatch])

  return (
    <BasicLayout>
      <EntityScreen
        entityName={{
          id: 'notebook',
          label: 'Notebook',
        }}
        subEntityName={{
          id: 'note',
          label: 'Note',
        }}
        query={{
          id: params.get('id'),
          subId: params.get('subId'),
        }}
        editor={NoteEditor}
      />
    </BasicLayout>
  )
}
