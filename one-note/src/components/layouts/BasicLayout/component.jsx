import React from 'react'

import ProfileAppBar from '@/components/blocks/ProfileAppBar'

export default function BasicLayout({ children }) {
  return (
    <div>
      <ProfileAppBar />
      {children}
    </div>
  )
}
