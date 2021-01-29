import styled from 'styled-components'
import MaterialCloseIcon from '@material-ui/icons/Close'
import MaterialIconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

export const IconButton = styled(MaterialIconButton)`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const PopupButton = styled(MaterialIconButton)`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const DeleteIcon = styled(HighlightOffIcon)`
  padding: 0px;
  color: ${(props) => props.theme.error} !important;
`

export const CloseIcon = styled(MaterialCloseIcon)`
  font-size: 40px;
  color: ${(props) => props.theme.error} !important;
`

export const Popup = styled.div`
  width: 65vw;
  height: 65vh;
  margin: auto;
  position: relative;
`
