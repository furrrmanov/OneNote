import styled from 'styled-components'

import MaterialButton from '@material-ui/core/Button'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 180px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.secondary};
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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  background-color: #ffffff00;
`
