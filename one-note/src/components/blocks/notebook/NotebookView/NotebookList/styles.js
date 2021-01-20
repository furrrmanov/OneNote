import styled from 'styled-components'

import MaterialButton from '@material-ui/core/Button'
import MaterialCloseIcon from '@material-ui/icons/Close'

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

export const Popup = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  width: 300px;
  margin: auto;
  outline: none;
  border: 2px solid ${(props) => props.theme.primary};
  box-shadow: 0px 0px 8px 2px ${(props) => props.theme.secondary};
`

export const PopupTitle = styled.span`
  margin: 10px 0px 0px 10px;
  font-size: 20px;
`

export const PopupText = styled.span`
  font-size: 16px;
`

export const PopupInputContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  margin: 10px 0px 0px 0px;
`
export const TextField = styled.input`
  margin-top: 5px;
  outline: none;
  height: 30px;
`

export const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px 20px 10px;
`

export const PopupButton = styled(MaterialButton)`
  width: 80px;
  margin-left: 10px !important;
  border-radius: 0px !important;
  text-transform: none !important;

  background-color: ${(props) => props.theme.secondary} !important;

  &:hover {
    background-color: ${(props) => props.theme.primary} !important;
  }
`

export const ButtonClose = styled(MaterialCloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
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
