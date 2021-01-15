import styled from 'styled-components'

import MaterialButton from '@material-ui/core/Button'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.elements};
`

export const Item = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 40px;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`

export const Title = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px;
  margin: 0px 10px 0px 10px;
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
