import styled, { keyframes } from 'styled-components'

import MaterialButton from '@material-ui/core/Button'
import MaterialTextareaAutosize from '@material-ui/core/TextareaAutosize'
import MaterialTextField from '@material-ui/core/TextField'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 10px auto;
`

export const Title = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  & input {
    width: 500px;
  }
`

export const TextField = styled(MaterialTextField)`
  .MuiOutlinedInput-input {
    padding: 5px;
  }
`

export const SwiperContainer = styled.div`
  margin: 10px auto;
  width: 500px;
`

export const Input = styled.input`
  display: none;
`

export const Button = styled(MaterialButton)`
  border-radius: 0px;
  height: 30px;
  background-color: ${(props) => props.theme.secondary} !important;

  &:hover {
    background-color: ${(props) => props.theme.primary} !important;
  }
`

export const UploadForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 8px auto;
`

export const SubTitle = styled.span`
  font-size: 16px;
  padding-bottom: 5px;
  color: ${(props) => props.theme.text};
`

export const TextareaAutosize = styled(MaterialTextareaAutosize)`
  width: 500px;
  margin: 10px auto;
  border: none;
  border: 1px solid ${(props) => props.theme.secondary} !important;
  resize: none;
  outline: none;
  background-color: ${(props) => props.theme.background} !important;
`

export const CharacteristicWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`

const flickering = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Reminder = styled.span`
  position: absolute;
  top: -14px;
  right: 0;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.error};
  animation: ${flickering} 1s linear infinite;
`
