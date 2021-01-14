import React from 'react'

import ProfileAppBar from '@/components/blocks/ProfileAppBar'
import MainMenuBar from '@/components/blocks/MainMenuBar'

import { Wrapper, ContentWrapper } from './styles'

export default function BasicLayout({ children }) {
  return (
    <Wrapper>
      <ProfileAppBar />
      <ContentWrapper>
        <MainMenuBar />
        {children}
      </ContentWrapper>
    </Wrapper>
  )
}
