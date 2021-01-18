import styled from 'styled-components'

import MaterialButton from '@material-ui/core/Button'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  min-width: 180px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.elements};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`

export const Button = styled(MaterialButton)`
  width: 100%;
  border-radius: 0px !important;
  text-transform: none !important;
  color: ${(props) => props.theme.text} !important;
  background-color: ${(props) => props.theme.secondary} !important;

  &:hover {
    background-color: ${(props) => props.theme.primary} !important;
  }
`
