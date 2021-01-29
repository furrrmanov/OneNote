import styled from 'styled-components'

import MaterialIconButton from '@material-ui/core/IconButton'
import MaterialTextField from '@material-ui/core/TextField'
import { Field } from 'react-final-form'

export const CharacteristicContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  margin: 5px 0px;

  & input:nth-child(n + 2) {
    width: 150px;
    margin-left: 20px;
  }

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

export const Input = styled(Field)`
  height: 25px;
  width: 300px;
  outline: none;
  border: 1px solid ${(props) => props.theme.secondary} !important;
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