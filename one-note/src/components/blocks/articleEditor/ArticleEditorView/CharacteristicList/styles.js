import styled from 'styled-components'

import MaterialIconButton from '@material-ui/core/IconButton'
import MaterialTextField from '@material-ui/core/TextField'

export const CharacteristicContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  margin: 5px 0px;
  align-items: end;

  .MuiIconButton-root {
    padding: 0px;
    color: ${(props) => props.theme.error} !important;
  }
`
export const IconButton = styled(MaterialIconButton)`
  width: 40px;
`

export const TextField = styled(MaterialTextField)`
  .MuiOutlinedInput-input {
    padding: 5px;
  }
`

export const Input = styled.input`
  height: 25px;
  width: 100%;
  outline: none;
  border: 1px solid ${(props) => props.theme.secondary};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px auto;

  flex-direction: row;

  .MuiIconButton-root {
    padding: 0px;
  }
`

export const Error = styled.span`
  font-size: 12px;
  color: #ff0c0c;
`
